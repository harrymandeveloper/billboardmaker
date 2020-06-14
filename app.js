
((d) => {

    d.getElementById("billboard").onclick = changeColor;   

    function changeColor() {
        d.body.style.backgroundColor = "purple";
        return false;
    } 

    d.getElementById("slogan").onclick = changeText;

    function changeText() {
        d.getElementById("slogan").innerHTML = "Dodge Bullets";
        return false;
    }
})(document);