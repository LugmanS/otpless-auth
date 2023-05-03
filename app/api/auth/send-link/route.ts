import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
    const token = jwt.sign({
        data: "Singed by OtpLess"
    }, "28394203942kjlskjdfalksjdf9234289");

    return new Response(JSON.stringify(token));
}
