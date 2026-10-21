/**
 * Genera public/cv.pdf a partir de public/cv.html.
 *
 * Uso:
 *   bun run cv        (o npm run cv)
 */
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { access, stat } from 'node:fs/promises'
import { chromium } from 'playwright'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = resolve(root, 'public/cv.html')
const pdfPath = resolve(root, 'public/cv.pdf')

// Fallback a navegadores del sistema si Playwright no tiene Chromium instalado
// (npx playwright install chromium).
const systemBrowsers = [
  process.env.CHROME_PATH,
  '/usr/bin/brave',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

async function launch() {
  try {
    return await chromium.launch()
  } catch (error) {
    for (const executablePath of systemBrowsers) {
      try {
        await access(executablePath)
        return await chromium.launch({ executablePath })
      } catch {
        // Siguiente candidato.
      }
    }
    throw error
  }
}

const browser = await launch()
try {
  const page = await browser.newPage()

  await page.goto(pathToFileURL(htmlPath).href, {
    waitUntil: 'networkidle',
  })

  // Espera a que las fuentes web (Google Fonts) estén listas antes de imprimir.
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMedia({ media: 'print' })

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  const { size } = await stat(pdfPath)
  console.log(
    `✔ public/cv.pdf generado (${(size / 1024 / 1024).toFixed(2)} MB)`,
  )
} finally {
  await browser.close()
}
