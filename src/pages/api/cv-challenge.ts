import { createHmac } from "node:crypto";
import type { APIRoute } from "astro";

// The check is meant to slow down casual visitors, not stop a determined
// attacker, so a shortened dev fallback secret is acceptable if the real
// secret is not configured. Set CV_CHECK_SECRET on the hosting provider.
const SECRET: string =
	import.meta.env.CV_CHECK_SECRET ?? "fasbary-dev-secret-change-me";

const CHALLENGE_LIFETIME_MS = 5 * 60 * 1000;

export const prerender = false;

export const GET: APIRoute = async () => {
	// Multiplication and division only, so the answer is always an integer.
	const op: "mul" | "div" = Math.random() < 0.5 ? "mul" : "div";
	let a: number;
	let b: number;
	if (op === "mul") {
		a = 6 + Math.floor(Math.random() * 7);
		b = 5 + Math.floor(Math.random() * 8);
	} else {
		b = 3 + Math.floor(Math.random() * 7);
		const quotient = 4 + Math.floor(Math.random() * 9);
		a = quotient * b;
	}
	const exp = Date.now() + CHALLENGE_LIFETIME_MS;
	const sig = createHmac("sha256", SECRET)
		.update(`${a}|${b}|${op}|${exp}`)
		.digest("base64url");

	return new Response(JSON.stringify({ a, b, op, exp, sig }), {
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store",
		},
	});
};