function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let message = "";
    if (i % multiples[0] === 0) message = words[0];
    if (i % multiples[1] === 0) message = words[1];
    if (i % multiples[0] === 0 && i % multiples[1] === 0)
      message = words[0] + words[1];
    console.log(message || i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
