import { NextRequest, NextResponse } from "next/server";

import { buildAmapProxyUrl } from "@/lib/amap";

const HOP_BY_HOP_HEADERS = [
  "connection",
  "content-encoding",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const securityJsCode = process.env.AMAP_SECURITY_JS_CODE;

  if (!securityJsCode) {
    return NextResponse.json(
      { error: "AMap proxy is not configured." },
      { status: 503 },
    );
  }

  const { path } = await params;
  const targetUrl = buildAmapProxyUrl(request.url, path, securityJsCode);

  try {
    const upstreamResponse = await fetch(targetUrl, {
      cache: "no-store",
      headers: {
        accept: request.headers.get("accept") ?? "*/*",
      },
      method: "GET",
    });
    const headers = new Headers(upstreamResponse.headers);

    HOP_BY_HOP_HEADERS.forEach((header) => headers.delete(header));

    return new NextResponse(upstreamResponse.body, {
      headers,
      status: upstreamResponse.status,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach AMap upstream service." },
      { status: 502 },
    );
  }
}
