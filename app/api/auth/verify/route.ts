export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    return new Response("Verify endpoint");

}