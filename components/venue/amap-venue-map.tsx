"use client";

import { ExternalLink, MapPinned } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { T } from "@/components/ui/t";

type AMapMap = {
  addControl: (control: unknown) => void;
  destroy?: () => void;
  setFitView: (items?: unknown[]) => void;
};

type AMapMarker = {
  setMap: (map: AMapMap) => void;
};

type AMapNamespace = {
  Map: new (
    container: HTMLElement,
    options: {
      center: [number, number];
      resizeEnable: boolean;
      viewMode: "2D";
      zoom: number;
    },
  ) => AMapMap;
  Marker: new (options: {
    position: [number, number];
    title: string;
  }) => AMapMarker;
  Scale: new () => unknown;
  ToolBar: new (options?: Record<string, unknown>) => unknown;
};

declare global {
  interface Window {
    _AMapSecurityConfig?: {
      serviceHost?: string;
    };
  }
}

type AmapVenueMapProps = {
  address: string;
  addressEn: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
  venue: string;
  venueEn: string;
};

export function AmapVenueMap({
  address,
  addressEn,
  latitude,
  longitude,
  mapUrl,
  venue,
  venueEn,
}: AmapVenueMapProps) {
  const amapKey = process.env.NEXT_PUBLIC_AMAP_WEB_KEY;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<AMapMap | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "fallback">(
    amapKey ? "idle" : "fallback",
  );
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!amapKey || !containerRef.current || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoad(true);
        setStatus("loading");
        observer.disconnect();
      },
      {
        rootMargin: "240px 0px",
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [amapKey, shouldLoad]);

  useEffect(() => {
    if (!amapKey || !containerRef.current || !shouldLoad) {
      return;
    }

    let disposed = false;

    window._AMapSecurityConfig = {
      serviceHost: `${window.location.origin}/_AMapService`,
    };

    import("@amap/amap-jsapi-loader")
      .then(({ load }) => load({
        key: amapKey,
        plugins: ["AMap.Scale", "AMap.ToolBar"],
        version: "2.0",
      }))
      .then((AMap) => {
        if (disposed || !containerRef.current) {
          return;
        }

        const api = AMap as AMapNamespace;
        const map = new api.Map(containerRef.current, {
          center: [longitude, latitude],
          resizeEnable: true,
          viewMode: "2D",
          zoom: 16,
        });
        const marker = new api.Marker({
          position: [longitude, latitude],
          title: venue,
        });

        marker.setMap(map);
        map.addControl(new api.Scale());
        map.addControl(new api.ToolBar({ position: "RB" }));
        map.setFitView([marker]);

        mapRef.current = map;
        setStatus("ready");
      })
      .catch(() => {
        if (!disposed) {
          setStatus("fallback");
        }
      });

    return () => {
      disposed = true;
      mapRef.current?.destroy?.();
      mapRef.current = null;
    };
  }, [amapKey, latitude, longitude, shouldLoad, venue]);

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50"
      data-testid="guide-venue-map-shell"
    >
      <div
        className="h-52 w-full sm:h-64"
        data-testid={status === "fallback" ? "guide-venue-map-fallback" : "guide-venue-map"}
        ref={containerRef}
      />
      {status !== "ready" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,rgba(26,95,180,0.06),rgba(240,244,249,0.95))] px-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
            <MapPinned className="size-5" />
          </div>
          <div className="space-y-2">
            <p className="text-body-dense font-medium text-gray-900">
              {status === "loading" ? (
                <T zh="正在加载高德地图…" en="Loading Amap..." />
              ) : status === "idle" ? (
                <T zh="滚动到此区域后将加载地图。" en="The map will load as you reach this section." />
              ) : (
                <T zh="地图暂时不可用，请先打开高德地图导航。" en="Map unavailable for now. Open Amap navigation instead." />
              )}
            </p>
            <p className="text-body-copy text-gray-500">
              <T zh={`${venue} · ${address}`} en={`${venueEn} · ${addressEn}`} />
            </p>
          </div>
          <a
            className="text-body-dense inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-600 transition hover:border-blue-300 hover:bg-blue-100"
            href={mapUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <T zh="打开高德地图" en="Open Amap" />
            <ExternalLink className="size-4" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
