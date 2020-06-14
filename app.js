((d) => {

    let clickCount = 0;
    let billboardBackground = d.getElementById("billboard");
    let billboardText = d.getElementById("slogan");

    let body = d.body;
    let hue = 360;
    let saturation = 50;
    let lightness = 50;


    billboardBackground.addEventListener("click", () => {
        clickCount +=24;

        hue = Math.round(clickCount);

        let hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)"; 
        console.log(hsl);

        body.style.backgroundColor = `${hsl}`;
    });

    billboardText.addEventListener("click", () => {
    )

})(document);


// d.getElementById("slogan").onclick = changeText;

// function changeText() {
//     d.getElementById("slogan").innerHTML = "Dodge Bullets";
//     return false;  