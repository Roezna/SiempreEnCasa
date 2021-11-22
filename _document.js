import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

const sheet = new ServerStyleSheet()
try {
  const html = renderToString(sheet.collectStyles(<YourApp />))
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
} catch (error) {
  // handle error
  console.error(error)
} finally {
  sheet.seal()
}