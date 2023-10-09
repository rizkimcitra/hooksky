import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    target: "es2020",
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    dts: true,
    minify: options.watch ? false : "terser",
  };
});
