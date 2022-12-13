const b = document.body.style;

//b.fontStyle = textF.style;

//Change font
var textF = null;
if (textF == null) {
    textF = 'normal';
}
b.fontStyle = textF;

var selectF = document.getElementById('font');
if (selectF) {
    selectF.addEventListener("click", getOptionF);
}

function getOptionF() {
    var textF = selectF.options[selectF.selectedIndex].text;
    b.fontStyle = textF;
}

function getFont(f) {
    b.fontStyle = f;
}
//Change font color
var select = document.getElementById('fontColor');
if (select) {
    select.addEventListener("click", getOption);
}

function getOption() {
    text = select.options[select.selectedIndex].text;
    b.color = text;
}
//Change Background color
//b.backgroundColor = 'purple';
var textBG = null;
var selectBG = document.getElementById('bgColor');
if (selectBG) {
    selectBG.addEventListener("click", getBG);
}

function getBG() {
    textBG = selectBG.options[selectBG.selectedIndex].text;
    b.backgroundColor = textBG;
}
b.backgroundColor = textBG;