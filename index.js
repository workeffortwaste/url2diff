module.exports = async function (url) {
  const beautify = require('js-beautify').html
  const jsdiff = require('diff')
  const puppeteer = require('puppeteer')

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  let htmlraw
  page.on('response', async response => {
    if (![301, 302, 303, 307, 308].includes(response.status())) {
      if (!htmlraw) {
        htmlraw = await response.text()
      }
    }
  })

  await page.goto(url, { waitUntil: 'networkidle2' })
  const htmlparsed = await page.content()
  await browser.close()

  const input = jsdiff.createPatch(
    'diff',
    beautify(htmlraw, { indent_size: 2, space_in_empty_paren: true }),
    beautify(htmlparsed, { indent_size: 2, space_in_empty_paren: true })
  )

  return input
}
