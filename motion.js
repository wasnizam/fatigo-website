(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((el) => io.observe(el));
})();
