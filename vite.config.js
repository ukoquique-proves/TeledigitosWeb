import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE || (mode === 'production' ? '/TeledigitosWeb/' : '/')

  return {
    base,
  }
})
