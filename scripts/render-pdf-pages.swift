import AppKit
import Foundation
import PDFKit

struct Arguments {
  let inputPath: String
  let outputDirectory: String
  let scale: CGFloat
}

func parseArguments() -> Arguments? {
  let args = CommandLine.arguments

  guard args.count >= 3 else {
    fputs("Usage: swift scripts/render-pdf-pages.swift <input-pdf> <output-dir> [scale]\n", stderr)
    return nil
  }

  let scale = args.count >= 4 ? CGFloat(Double(args[3]) ?? 2.0) : 2.0
  return Arguments(inputPath: args[1], outputDirectory: args[2], scale: scale)
}

func renderPage(_ page: PDFPage, to outputURL: URL, scale: CGFloat) throws {
  let pageRect = page.bounds(for: .mediaBox)
  let renderWidth = Int(ceil(pageRect.width * scale))
  let renderHeight = Int(ceil(pageRect.height * scale))

  guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: renderWidth,
    pixelsHigh: renderHeight,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
  ) else {
    throw NSError(domain: "render-pdf-pages", code: 1, userInfo: [
      NSLocalizedDescriptionKey: "Failed to create bitmap buffer.",
    ])
  }

  guard let graphicsContext = NSGraphicsContext(bitmapImageRep: bitmap) else {
    throw NSError(domain: "render-pdf-pages", code: 1, userInfo: [
      NSLocalizedDescriptionKey: "Failed to create graphics context.",
    ])
  }

  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = graphicsContext

  let context = graphicsContext.cgContext
  context.setFillColor(NSColor.white.cgColor)
  context.fill(CGRect(x: 0, y: 0, width: renderWidth, height: renderHeight))
  context.scaleBy(x: scale, y: scale)
  page.draw(with: .mediaBox, to: context)

  NSGraphicsContext.restoreGraphicsState()

  guard let pngData = bitmap.representation(using: .png, properties: [:]) else {
    throw NSError(domain: "render-pdf-pages", code: 2, userInfo: [
      NSLocalizedDescriptionKey: "Failed to encode PNG output.",
    ])
  }

  try pngData.write(to: outputURL)
}

guard let options = parseArguments() else {
  exit(1)
}

let inputURL = URL(fileURLWithPath: options.inputPath)
let outputURL = URL(fileURLWithPath: options.outputDirectory, isDirectory: true)

guard let document = PDFDocument(url: inputURL) else {
  fputs("Unable to open PDF at \(options.inputPath)\n", stderr)
  exit(1)
}

try FileManager.default.createDirectory(
  at: outputURL,
  withIntermediateDirectories: true,
)

for index in 0..<document.pageCount {
  guard let page = document.page(at: index) else {
    continue
  }

  let filename = "page-\(index + 1).png"
  let pageURL = outputURL.appendingPathComponent(filename)
  try renderPage(page, to: pageURL, scale: options.scale)
  print(pageURL.path)
}
