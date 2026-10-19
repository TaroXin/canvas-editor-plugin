import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const name = 'docx'
  if (mode === 'lib') {
    return {
      plugins: [
        {
          ...typescript({
            tsconfig: './tsconfig.json',
            include: ['./src/docx/**']
          }),
          apply: 'build',
          declaration: true,
          declarationDir: 'types/',
          rootDir: '/'
        }
      ],
      build: {
        // 兼容 webpack 4（acorn 6）等旧构建工具
        target: 'es2019',
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, 'src/docx/index.ts')
        },
        rollupOptions: {
          output: {
            sourcemap: true
          },
          external: ['@baohu/canvas-editor']
        }
      }
    }
  }
  return {
    base: `/${name}/`,
    server: {
      host: '0.0.0.0'
    }
  }
})
