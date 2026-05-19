function reflect(): void {
  const theme = document.documentElement.getAttribute("data-theme") ||
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);

  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

reflect();

document.addEventListener("astro:after-swap", () => {
  const theme = localStorage.getItem("theme") ||
    (window as unknown as { __theme?: { value: string } }).__theme?.value ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);
  reflect();
});

document.addEventListener("astro:before-swap", event => {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme) {
    (event as { newDocument: Document }).newDocument
      .documentElement.setAttribute("data-theme", theme);
  }

  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    (event as { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});
