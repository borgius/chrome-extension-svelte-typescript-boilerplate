import { crx } from "@crxjs/vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig, loadEnv } from "vite";
import manifest from "./src/manifest.config";
import UnoCSS from '@unocss/svelte-scoped/vite'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [
            UnoCSS(),
            svelte(),
            crx({ manifest }),
            mode === "production" && obfuscatorPlugin({
                include: ["src/**/*.ts", "src/**/*.js"],
                apply: "build",
                debugger: true,
                options: {
                    optionsPreset: "high-obfuscation",
                    debugProtection: true,
                }
            })],
        publicDir: "./src/public",
        server: {
            port: 5173,
            strictPort: true,
            hmr: {
                clientPort: 5173,
            },
        },
    })
}
// https://vitejs.dev/config/
