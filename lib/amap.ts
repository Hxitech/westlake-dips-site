const AMAP_STYLE_PATH = "v4/map/styles";
const AMAP_REST_BASE = "https://restapi.amap.com/";
const AMAP_WEBAPI_BASE = "https://webapi.amap.com/";

export function getAmapUpstreamUrl(pathSegments: string[]) {
  const normalizedPath = pathSegments.join("/");
  const base = normalizedPath === AMAP_STYLE_PATH ? AMAP_WEBAPI_BASE : AMAP_REST_BASE;

  return new URL(normalizedPath, base);
}

export function buildAmapProxyUrl(
  requestUrl: string,
  pathSegments: string[],
  securityJsCode: string,
) {
  const incomingUrl = new URL(requestUrl);
  const upstreamUrl = getAmapUpstreamUrl(pathSegments);

  incomingUrl.searchParams.forEach((value, key) => {
    if (key !== "jscode") {
      upstreamUrl.searchParams.append(key, value);
    }
  });

  upstreamUrl.searchParams.set("jscode", securityJsCode);

  return upstreamUrl;
}
