declare module "@amap/amap-jsapi-loader" {
  export function load(options: {
    key: string;
    plugins?: string[];
    version?: string;
  }): Promise<unknown>;
}
