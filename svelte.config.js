import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { IGNORED_WARNINGS } from "./src/lib/constants.js";

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    onwarn(warning, handler) {
        if (!IGNORED_WARNINGS.includes(warning.code))
            handler(warning)
    },
};
