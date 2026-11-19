// PRESS START: one span per letter so each can hop a little after the last
const press = document.getElementById("hi");
if (press) "PRESS START".split(" ").forEach((word, w) => {
  const g = document.createElement("span");
  g.className = "word"; g.setAttribute("aria-hidden", "true");
  [...word].forEach((ch, i) => {
    const s = document.createElement("span");
    s.textContent = ch;
    s.style.animationDelay = (w * 6 + i) * 0.12 + "s";
    g.append(s);
  });
  press.append(g, " ");
});

// menu bar clock
const clock = document.getElementById("clock");
const tick = () => { if (!clock) return; clock.textContent = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }); };
tick(); setInterval(tick, 15000);

// hearts float up from wherever iyyko gets petted
const pop = (x, y) => {
  const h = document.createElement("img");
  h.src = "img/heart.svg"; h.alt = ""; h.className = "pop";
  h.style.left = x - 14 + "px"; h.style.top = y - 12 + "px";
  document.body.append(h);
  setTimeout(() => h.remove(), 1300);
};
const petFrom = (el) => () => { const r = el.getBoundingClientRect(); pop(r.left + r.width / 2, r.top); };
["walker", "photo"].forEach((id) => { const el = document.getElementById(id); el.addEventListener("click", petFrom(el)); });

// close boxes fold a window down to its title bar
document.querySelectorAll(".win > .bar .close").forEach((b) => {
  b.addEventListener("click", () => {
    const w = b.closest(".win");
    w.classList.toggle("shut");
    b.setAttribute("aria-label", w.classList.contains("shut") ? "Expand window" : "Collapse window");
  });
});

// drag the big windows around by their title bars, like a real desktop (wide screens only)
if (matchMedia("(pointer: fine) and (min-width: 901px)").matches) {
  document.querySelectorAll("main > .win > .bar").forEach((bar) => {
    const w = bar.parentElement;
    let sx, sy, ox = 0, oy = 0;
    bar.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".close")) return;
      sx = e.clientX - ox; sy = e.clientY - oy;
      bar.setPointerCapture(e.pointerId); w.classList.add("dragging"); w.style.zIndex = 30;
    });
    bar.addEventListener("pointermove", (e) => {
      if (!w.classList.contains("dragging")) return;
      ox = e.clientX - sx; oy = e.clientY - sy;
      w.style.transform = `translate(${ox}px, ${oy}px)`;
    });
    const stop = () => w.classList.remove("dragging");
    bar.addEventListener("pointerup", stop);
    bar.addEventListener("pointercancel", stop);
    // double-click a title bar to put the window back
    bar.addEventListener("dblclick", () => { ox = oy = 0; w.style.transform = ""; });
  });
}
