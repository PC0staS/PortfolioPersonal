export async function GET() {
  const base = 'https://pablocostas.dev'
  const content = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
Host: ${base}
`
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
