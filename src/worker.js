export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Construct the path to the file in the assets
      let path = url.pathname;

      // If path is '/', serve index.html
      if (path === "/") {
        path = "/index.html";
      } else if (!path.includes(".")) {
        // For routes without file extensions, serve index.html (for client-side routing)
        path = "/index.html";
      }

      // Get the asset from KV
      const response = await env.ASSETS.fetch(request);

      // Add security headers
      const headers = new Headers(response.headers);
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("X-Frame-Options", "DENY");
      headers.set("X-XSS-Protection", "1; mode=block");

      return new Response(response.body, {
        status: response.status,
        headers,
      });
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  },
};
