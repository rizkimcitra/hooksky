import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    target: "es2020",
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: false,
    clean: true,
    treeshake: true,
    dts: {
      entry: "src/index.ts",
    },
    keepNames: true,
    name: "hooksky",
    platform: "neutral",
    minify: options.watch ? false : "terser",
  };
});
