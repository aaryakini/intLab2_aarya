/***************************************************************************************
*    Title: Hover on element and highlight all elements with the same class
*    Author: Chris (https://stackoverflow.com/users/364869/chris)
*    Date: Oct 8, 2012
*    Availability: https://stackoverflow.com/questions/12786810/hover-on-element-and-highlight-all-elements-with-the-same-class
***************************************************************************************/
var classes = ["one", "two"]; //list of your classes
var elements = {};
var a = {}, nclasses = classes.length;
function changeColor(classname, color) {
    var currentA = a[classname];
    for(var i = 0; i < currentA; i ++) {
        elements[classname][i].style.color = color;
    }
}
for(var j = 0; j < nclasses; j++) {
    var currentClass = classes[j];
    elements[currentClass] = document.getElementsByClassName(currentClass);
    a[currentClass] = elements[currentClass].length;
    var currentA = a[currentClass];
    for(var i = 0; i < currentA; i ++) {
        elements[currentClass][i].onmouseover = function() {
            changeColor(this.className, "deeppink"); //hover color
        };
        elements[currentClass][i].onmouseout = function() {
            changeColor(this.className, "black"); //original color
        };
    }
};
/***************************************************************************************/