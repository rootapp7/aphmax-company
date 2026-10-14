/* Shared navigation enhancements for single-page section navigation. */
(function () {
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burger");
  if (!menu || !burger) return;
  function setOpen(open) { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open)); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
  burger.addEventListener("click", function () { setOpen(!menu.classList.contains("open")); });
  menu.addEventListener("click", function (event) { if (event.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") setOpen(false); });
})();
