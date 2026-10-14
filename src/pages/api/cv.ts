import { createHmac, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { APIRoute } from "astro";

const SECRET: string =
	import.meta.env.CV_CHECK_SECRET ?? "fasbary-dev-secret-change-me";

const CV_FILE = join(
	process.cwd(),
	"private",
	"cv-namry-ayu-safitri.pdf",
);

const json = (body: unknown, status: number) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json", "cache-control": "no-store" },
	});

const safeEqual = (left: string, right: string) => {
	const a = Buffer.from(left);
	const b = Buffer.from(right);
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
};

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return json({ error: "invalid-json" }, 400);
	}

	const { a, b, op, exp, sig, answer } = payload as Record<string, unknown>;
	const intA = Number(a);
	const intB = Number(b);
	const intExp = Number(exp);
	const givenAnswer = Number(answer);

	const valid =
		Number.isInteger(intA) &&
		Number.isInteger(intB) &&
		Number.isInteger(intExp) &&
		Number.isInteger(givenAnswer) &&
		(op === "mul" || op === "div") &&
		typeof sig === "string";

	if (!valid) return json({ error: "bad-request" }, 400);
	if (Date.now() > intExp) return json({ error: "expired" }, 403);

	// Signature over the operands proves they came from the server and were
	// not edited by the client, so the check cannot be answered by reading
	// the page source.
	const expectedSig = createHmac("sha256", SECRET)
		.update(`${intA}|${intB}|${op}|${intExp}`)
		.digest("base64url");
	if (!safeEqual(expectedSig, sig)) return json({ error: "tampered" }, 403);

	const expected = op === "mul" ? intA * intB : intA / intB;
	if (givenAnswer !== expected || !Number.isInteger(expected))
		return json({ error: "wrong-answer" }, 403);

	const pdf = await readFile(CV_FILE);
	return new Response(new Uint8Array(pdf), {
		headers: {
			"content-type": "application/pdf",
			"content-disposition":
				'attachment; filename="cv-namry-ayu-safitri.pdf"',
			"cache-control": "no-store",
		},
	});
};