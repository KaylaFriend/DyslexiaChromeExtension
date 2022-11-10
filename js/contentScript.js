b = document.body.style;

//Change font
b.fontFamily = 'opendyslexic';
b.fontStyle = 'normal';
b.fontWeight = 'normal';

//Change font color
c = 'black';

var fontC = document.getElementById("fontC");
if (fontC) {
    fontC.addEventListener("click", getOption);
}

function getOption() {
    c = document.getElementById("fontC").selected;
    b.color = c;
}
