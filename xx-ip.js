addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch('https://github.com/enricorath/cf-ip-list/blob/main/cloudflare-ip.txt')
  const text = await response.text()
  const json = JSON.parse(text)

  const newResponse = await fetch(json.url)
  const newText = await newResponse.text()

  return new Response(newText, {
    headers: { 'Content-Type': 'text/plain' }
  })
}
