import vinext from "vinext";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { sites } from "./build/sites-vite-plugin";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
  },

  plugins: [
    tailwindcss(),
    vinext(),
    sites(),
    nitro(),
  ],
});