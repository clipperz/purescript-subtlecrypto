"use strict";

function signImpl (a,k,x) {
	return crypto.subtle.sign(a,k,x);
}
function verifyImpl (a,k,s,x) {
	return crypto.subtle.verify(a,k,s,x);
}

export {signImpl, verifyImpl}