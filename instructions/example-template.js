/*
  A template for a new instruction. To use it:
  1. Copy this file, rename it (for example instructions/rings.js), and change the code.
  2. Add its path to "extra" in settings.json, for example: "extra": ["instructions/rings.js"]
  3. Upload both files to GitHub. The phone picks it up the next time it opens on Wi-Fi,
     and it appears in the studio's list and in the double-tap rotation.

  Every frame, draw(A) gets:
    A.visible   indexes of lines currently "on" (each rolled a 6 recently)
    A.x(i), A.y(i)  where point i is right now
    A.points.partner[i]  the point that line i connects to
    A.points.born[i], A.now   when line i appeared and the current time (ms, piece time)
    A.palette   the colors of the current palette (index 0 is black)
    A.ctx, A.W, A.H   the canvas and its size
    A.cfg       every setting from the studio and settings.json
*/
Connectome.register("dots", {
  label: "Dots",
  draw(A) {
    const g = A.ctx;
    g.fillStyle = "#000"; g.fillRect(0, 0, A.W, A.H);
    for (const i of A.visible) {
      g.fillStyle = A.palette[1 + (i % (A.palette.length - 1))];
      g.beginPath(); g.arc(A.x(i), A.y(i), 3, 0, Math.PI * 2); g.fill();
    }
  }
});
