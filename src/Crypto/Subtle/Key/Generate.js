"use strict";

function generateKeyImpl (a,e,u) {
	return crypto.subtle.generateKey(a,e,u);
}
const exp65537 = new Uint8Array([0x01,0x00,0x01]);

export {generateKeyImpl, exp65537}