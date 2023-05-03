export const runtime = 'edge';

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);
    const hubMode = searchParams.get("hub.mode");
    const hubChallenge = searchParams.get("hub.challenge");
    const hubVerifyToken = searchParams.get("hub.verify_token");

    //Validate token
    if (!hubVerifyToken || hubVerifyToken !== process.env.WEBHOOK_VERIFY_TOKEN) {
        return new Response(JSON.stringify({
            error: "Invalid verification token"
        }), {
            status: 401
        });
    }

    return new Response(hubChallenge);
}

export async function POST() {
    return new Response("Hello");
}