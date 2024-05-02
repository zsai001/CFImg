export async function onRequest(context) {  // Contents of context object
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;
    context.request
    const url = new URL(request.url);
    let real_host = request.headers.get('x-real-url');
    const response = fetch(real_host, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
    return response;
}
