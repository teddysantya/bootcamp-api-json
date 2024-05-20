export const dynamic = 'force-dynamic'

export function GET(request) {
	let msg = {
		message: "hello world"
	}
	return new Response(JSON.stringify(msg))
}
