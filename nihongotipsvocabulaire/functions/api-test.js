export async function onRequestGet(context) {
  // Exemple simple : renvoie un texte
  return new Response("Fonction test OK !", {
    headers: { "Content-Type": "text/plain" }
  });
}
