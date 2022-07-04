"use strict";

function exportKeyImpl (f,x) {
	return crypto.subtle.exportKey(f,x);
}

export {exportKeyImpl}