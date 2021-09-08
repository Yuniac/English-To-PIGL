import react from "react";

function CopyButton({ text, canCopy }) {
	console.log(text, canCopy);
	const [copyNotificationState, setCopyNotificationState] = react.useState(false);
	const copyButton = react.useRef(null);
	function handleTextCopy() {
		if (canCopy) {
			setCopyNotificationState(true);
			navigator.clipboard.writeText(text);
			setTimeout(() => {
				setCopyNotificationState(false);
			}, 2000);
		} else {
			copyButton.current.style.border = "1px solid purple";
			setTimeout(() => {
				copyButton.current.style.border = "";
			}, 2000);
		}
		console.log(text, canCopy);
	}
	return (
		<div style={{ position: "absolute", right: "32px", bottom: 0 }}>
			<button ref={copyButton} onClick={handleTextCopy} style={{ background: "lime", padding: "1rem" }}>
				Copy
			</button>
			<p
				style={{
					visibility: copyNotificationState ? "visible" : "hidden",
					position: "absolute",
					right: "-207px",
					bottom: "-50px",
					padding: "1rem",
					background: "#4be2ff",
					color: "#9b59b6",
				}}
			>
				Output copied successfully!
			</p>
		</div>
	);
}

export default CopyButton;
