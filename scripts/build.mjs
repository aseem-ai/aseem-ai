import fs from "node:fs";

const stamp = new Date().toISOString().slice(0, 10);

// Keep the repo feeling alive: inject date into the bottom animation line.
const bottomPath = "assets/bottom-anim.svg";
let svg = fs.readFileSync(bottomPath, "utf8");

svg = svg.replace(
  /Engineering Intelligence • Building Systems • Shipping Reality( • \d{4}-\d{2}-\d{2})?/g,
  `Engineering Intelligence • Building Systems • Shipping Reality • ${stamp}`
);

fs.writeFileSync(bottomPath, svg);
console.log("Refreshed:", bottomPath);
