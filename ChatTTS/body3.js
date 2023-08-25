const stringToUint = string => {
		let uintArray = new Uint8Array(string.length);
		for (let i = 0; i < string.length; i++) {
				uintArray[i] = string.charCodeAt(i);
		}
		return uintArray;
}
const uintToString = uintArray => {
		let str = "";
		let len = Math.ceil(uintArray.byteLength / 32767);
		for (let i = 0; i < len; i++) {
				str += String.fromCharCode.apply(null, uintArray.subarray(i * 32767, Math.min((i + 1) * 32767, uintArray.byteLength)));
		}
		return str;
}
let isCompressedChats = localStorage.getItem("compressedChats") === "true";
const originSetItem = localStorage.setItem;
localStorage.setItem = (key, value) => {
		try {
				if (isCompressedChats && key === "chats") value = uintToString(deflateSync(new TextEncoder().encode(value), {level: 1}));
				originSetItem.call(localStorage, key, value)
		} catch (e) {
				if (isCompressedChats) {
						notyf.error(translations[locale]["localQuotaExceedTip"])
						return;
				}
				let isKeyChats = key === "chats";
				let compressed = uintToString(deflateSync(new TextEncoder().encode(isKeyChats ? value : localStorage.getItem("chats")), {level: 1}));
				originSetItem.call(localStorage, "chats", compressed);
				originSetItem.call(localStorage, "compressedChats", true);
				isCompressedChats = true;
				if (!isKeyChats) originSetItem.call(localStorage, key, value);
		}
}