function loopyLighthouse() {
  for (let i = 100; i <= 200; i++) {
    let message = "";
    if (i % 3 === 0) message = "Loopy";
    if (i % 4 === 0) message = "LightHouse";
    if (i % 3 === 0 && i % 4 === 0) message = "LoopyLighthouse";
    console.log(message || i);
  }
}

loopyLighthouse();
