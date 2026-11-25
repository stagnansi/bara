export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'baramadhans.pages.dev') {
    const redirectUrl = new URL(context.request.url);
    redirectUrl.hostname = 'bara.asia';
    return Response.redirect(redirectUrl.toString(), 301);
  }
  return context.next();
}
