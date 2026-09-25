(function () {
	var btn = document.getElementById("menuBtn"),
		nav = document.getElementById("nav");
	if (!btn || !nav) return;
	function setOpen(open) {
		nav.classList.toggle("is-open", open);
		btn.setAttribute("aria-expanded", String(open));
		btn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
	}
	btn.addEventListener("click", function () {
		setOpen(btn.getAttribute("aria-expanded") !== "true");
	});
	nav.addEventListener("click", function (e) {
		if (e.target.closest("a")) setOpen(false);
	});
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			setOpen(false);
			btn.focus();
		}
	});
	window
		.matchMedia("(min-width: 900px)")
		.addEventListener("change", function (e) {
			if (e.matches) setOpen(false);
		});
})();
