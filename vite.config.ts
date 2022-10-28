import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import vue from '@vitejs/plugin-vue'


const vitestConfig: VitestUserConfigInterface = {
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    minify: true,
    reportCompressedSize: true
  },
  test: vitestConfig.test
})
