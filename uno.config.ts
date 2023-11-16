// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetUno(), presetIcons({})],
  // ...UnoCSS options
})