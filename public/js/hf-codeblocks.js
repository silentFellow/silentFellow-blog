/* hf-codeblocks.js */
document.addEventListener("DOMContentLoaded", () => {
	// helper to escape HTML for safe injection
	const esc = (s) =>
		s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

	// process every code element created by Hugo render hook
	document.querySelectorAll(".hf-pre > code").forEach((codeEl) => {
		const raw = codeEl.textContent.replace(/\r\n/g, "\n");
		const lines = raw.split("\n");
		// if last line is empty (trailing newline), keep it so numbering matches
		const html = lines
			.map((ln, i) => {
				return (
					'<span class="hf-code-line">' +
					'<span class="hf-lineno" aria-hidden="true">' +
					(i + 1) +
					"</span>" +
					'<span class="hf-linecontent">' +
					esc(ln) +
					"</span>" +
					"</span>"
				);
			})
			.join("\n");
		codeEl.innerHTML = html;
	});

	// copy button handler (delegated)
	document.addEventListener("click", (ev) => {
		const btn = ev.target.closest(".hf-copy-btn");
		if (!btn) return;
		const targetId = btn.getAttribute("data-target");
		const pre = document.getElementById(targetId);
		if (!pre) return;
		// reconstruct raw text from .hf-linecontent (preserves original newlines)
		const lines = Array.from(pre.querySelectorAll(".hf-linecontent")).map(
			(n) => n.textContent,
		);
		const text = lines.join("\n");
		// use Clipboard API
		navigator.clipboard
			.writeText(text)
			.then(() => {
				btn.textContent = "Copied!";
				setTimeout(() => (btn.textContent = "Copy"), 1200);
			})
			.catch(() => {
				// fallback: select + execCommand
				const range = document.createRange();
				range.selectNodeContents(pre);
				const sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				try {
					document.execCommand("copy");
					btn.textContent = "Copied!";
					setTimeout(() => (btn.textContent = "Copy"), 1200);
				} catch (err) {
					btn.textContent = "Copy failed";
					setTimeout(() => (btn.textContent = "Copy"), 1200);
				}
				sel.removeAllRanges();
			});
	});
});
