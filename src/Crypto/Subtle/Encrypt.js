"use strict";

function encryptImpl (a,k,x) {
	return crypto.subtle.encrypt(a,k,x);
}
function decryptImpl (a,k,x) {
	return crypto.subtle.decrypt(a,k,x);
}

export {encryptImpl, decryptImpl}