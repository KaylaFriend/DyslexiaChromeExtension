const b = document.body.style;

// CHANGE FONT

// Set event listener for font style selecction
var selectF = document.getElementById('font');
if (selectF) {
    selectF.addEventListener("click", getOptionF);
}

// Get text selection and change font style
function getOptionF() {
    textF = selectF.options[selectF.selectedIndex].text;
    b.fontStyle = textF;
}

// CHANGE FONT COLOR

// Set event listener for font color selecction
var select = document.getElementById('fontColor');
if (select) {
    select.addEventListener("click", getOption);
}

// Get text selection and change font color
function getOption() {
    text = select.options[select.selectedIndex].text;
    b.color = text;
}

// CHANGE BACKGROUND COLOR

// Set event listener for background color selecction
var textBG = null;
var selectBG = document.getElementById('bgColor');
if (selectBG) {
    selectBG.addEventListener("click", getBG);
}

// Get text selection and change background color
function getBG() {
    textBG = selectBG.options[selectBG.selectedIndex].text;
    b.backgroundColor = textBG;
}