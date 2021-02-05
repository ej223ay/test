var inputElem, input2elem, resultElem;

function init() {
    inputElem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    resultElem = document.getElementById("result");
    document.getElementById("runBtn").onclick = areaCalculations;
} //End init
window.onload = init;

function areaCalculations() {
    var length;
    var width;
    var area;

    length = Number(inputElem.value);
    width = Number(input2Elem.value);
    area = length * width;

    resultElem.innerHTML = area;
} // End areaCalkulations