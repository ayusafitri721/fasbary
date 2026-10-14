import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createHmac, timingSafeEqual } from "node:crypto";
//#region src/pages/api/cv.ts
var cv_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var SECRET = "fasbary-dev-secret-change-me";
var CV_FILE = join(process.cwd(), "private", "cv-namry-ayu-safitri.pdf");
var json = (body, status) => new Response(JSON.stringify(body), {
	status,
	headers: {
		"content-type": "application/json",
		"cache-control": "no-store"
	}
});
var safeEqual = (left, right) => {
	const a = Buffer.from(left);
	const b = Buffer.from(right);
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
};
var POST = async ({ request }) => {
	let payload;
	try {
		payload = await request.json();
	} catch {
		return json({ error: "invalid-json" }, 400);
	}
	const { a, b, exp, sig, answer } = payload;
	const intA = Number(a);
	const intB = Number(b);
	const intExp = Number(exp);
	const givenAnswer = Number(answer);
	if (!(Number.isInteger(intA) && Number.isInteger(intB) && Number.isInteger(intExp) && Number.isInteger(givenAnswer) && typeof sig === "string")) return json({ error: "bad-request" }, 400);
	if (Date.now() > intExp) return json({ error: "expired" }, 403);
	if (!safeEqual(createHmac("sha256", SECRET).update(`${intA}|${intB}|${intExp}`).digest("base64url"), sig)) return json({ error: "tampered" }, 403);
	if (intA + intB !== givenAnswer) return json({ error: "wrong-answer" }, 403);
	const pdf = await readFile(CV_FILE);
	return new Response(new Uint8Array(pdf), { headers: {
		"content-type": "application/pdf",
		"content-disposition": "attachment; filename=\"cv-namry-ayu-safitri.pdf\"",
		"cache-control": "no-store"
	} });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/cv@_@ts
var page = () => cv_exports;
//#endregion
export { page };
