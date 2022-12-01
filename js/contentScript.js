b = document.body.style;
//document.body.style.color = 'red';
//Change font
b.fontFamily = 'opendyslexic';
b.fontStyle = 'normal';
//b.fontStyle = 'italic';
b.fontWeight = 'normal';

//Change font color
//b.color = 'red';
b.color = 'blue';
c = 'black';

var fontC = document.getElementById("fontC");
if (fontC) {
    fontC.addEventListener("click", getOption);
}

function getOption() {
    c = document.getElementById("fc").selected;
    b.color = c;
}

//Change Background color
//b.backgroundColor = 'purple';