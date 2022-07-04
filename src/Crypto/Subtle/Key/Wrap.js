"use strict";

function wrapKeyImpl (f,x,k,a) {
	return crypto.subtle.wrapKey(f,x,k,a);
}
function unwrapKeyImpl (f,x,k,a,i,e,u) {
	return crypto.subtle.unwrapKey(f,x,k,a,i,e,u);
}

export {unwrapKeyImpl, wrapKeyImpl}
