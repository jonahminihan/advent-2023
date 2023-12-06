let input = `
Time:        44     70     70     80
Distance:   283   1134   1134   1491
`;

input = `
Time:        44707080
Distance:   283113411341491
`;

// input = `
// Time:      7  15   30
// Distance:  9  40  200
// `;

// input = `
// Time:      71530
// Distance:  940200
// `;

let [times, distances] = input
  .split("\n")
  .filter((x) => x != "")
  .map((ent) =>
    ent
      .slice(ent.indexOf(":") + 1)
      .split(" ")
      .filter((x) => x != "")
      .map((x) => parseInt(x))
  );

let possiblites = times.map((t) => 0);
times.forEach((t, index) => {
  let i = 0;
  while (i < t) {
    if (i * (t - i) > distances[index]) {
      possiblites[index] = possiblites[index] + 1;
    }
    i++;
  }
});

console.log("possiblites", possiblites);
console.log(
  "multiplied",
  possiblites.reduce((acc, curr) => acc * curr, 1)
);
