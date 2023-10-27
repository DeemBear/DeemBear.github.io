const notyf = new Notyf({
		position: {x: "center", y: "top"},
		types: [
				{
						type: "success",
						background: "#99c959",
						duration: 2000,
				},
				{
						type: "warning",
						background: "#f8b26a",
						duration: 3000
				},
				{
						type: "error",
						background: "#e15b64",
						duration: 3000,
				}
		]
});
const registerSW = () => {
		if ("serviceWorker" in navigator) {
				navigator.serviceWorker.register("sw.js" + location.search).then(reg => console.log("Service worker register succeeded"),
						error => console.error(`Service worker register failed: ${error}`))
		}
};
window.addEventListener("load", () => registerSW());
const isMobile = navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|webOS/);
if (isMobile) {
		const script = document.createElement("script");
		script.src = "https://cdn.jsdelivr.net/gh/timruffles/mobile-drag-drop@3.0.0-rc.0/release/index.min.js";
		script.crossOrigin = "anonymous";
		script.defer = true;
		script.onload = () => {
				MobileDragDrop.polyfill();
		}
		document.body.appendChild(script);
		const link = document.createElement("link");
		link.crossOrigin = "anonymous";
		link.rel = "stylesheet";
		link.href = "https://cdn.jsdelivr.net/gh/timruffles/mobile-drag-drop@3.0.0-rc.0/release/default.css";
		document.body.appendChild(link);
}
let envAPIEndpoint, envAPIKey, envBingAPIEndpoint, envBingAPIKey/*, envClaudeAPIEndpoint, envClaudeAPIKey, envPOEAPIEndpoint, envPOEAPIKeyÐÂÔö*/;