import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }): Response => {
    const query: string | null = url.searchParams.get('query');

    //Handle if a query is not present
    if (query === null) {
        return new Response(JSON.stringify({
            error: 'No query provided'
        }), {
            status: 400, // Bad request
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({ query }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}