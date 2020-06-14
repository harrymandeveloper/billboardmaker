((d) => {
  let clickCount = 0;
  let textCount = 0;
  let billboardBackground = d.getElementById("billboard");
  let billboardText = d.getElementById("slogan");

  let body = d.body;
  let hue = 360;
  let saturation = 50;
  let lightness = 50;

  // This is the test JSON file.
  // Once this is working, this will be replaced with an open API request
  const testJSON = [
    "Pay Someone a Compliment",
    "Draw a Picture for Someone You Love",
    "Don't be ashamed to use your own ideas",
    "Treat yourself once in a while",
    "Look at the order not the structure",
  ];

  billboardBackground.addEventListener("click", () => {
    clickCount += 50;
    hue = Math.round(clickCount);
    let hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    console.log(hsl);
    body.style.backgroundColor = `${hsl}`;
  });

//   billboardText.addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random() * 11);
//     textCount = (textCount + randomNumber) % testJSON.length;
//     let newText = testJSON[textCount];
//     billboardText.innerHTML = `${newText}`;
//   });


// This is our API request in progress.


  billboardText.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 11);
    textCount = (textCount + randomNumber) % testJSON.length;

    fetch('https://api.adviceslip.com/advice')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      billboardText.innerHTML = `${data.slip.advice}`;
      console.log(data.slip.advice)
    })
    .catch(err => {
      console.log("Nothing to see here");
    });

  });

})(document);
