export async function onRequest(context) {
  return new Response("Hello from Worker!", {
    headers: { "content-type": "text/plain" }
  });
}
