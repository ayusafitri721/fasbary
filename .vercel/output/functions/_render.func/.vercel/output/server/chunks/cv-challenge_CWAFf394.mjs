import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { createHmac } from "node:crypto";
//#region src/pages/api/cv-challenge.ts
var cv_challenge_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var SECRET = "fasbary-dev-secret-change-me";
var CHALLENGE_LIFETIME_MS = 3e5;
var GET = async () => {
	const a = 10 + Math.floor(Math.random() * 11);
	const b = 1 + Math.floor(Math.random() * 9);
	const exp = Date.now() + CHALLENGE_LIFETIME_MS;
	const sig = createHmac("sha256", SECRET).update(`${a}|${b}|${exp}`).digest("base64url");
	return new Response(JSON.stringify({
		a,
		b,
		exp,
		sig
	}), { headers: {
		"content-type": "application/json",
		"cache-control": "no-store"
	} });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/cv-challenge@_@ts
var page = () => cv_challenge_exports;
//#endregion
export { page };
