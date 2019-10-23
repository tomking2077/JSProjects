// Function that changes value of input boxes depending on color selected
function changeVal(document) {
    let colorPickerElement = document.getElementById('colorPicker');
    var c = String(colorPickerElement.options[colorPickerElement.selectedIndex].value);    
    switch (c) {
        case "red":
            document.getElementById("redColorPicker").value = 255;
            document.getElementById("greenColorPicker").value = 0;
            document.getElementById("blueColorPicker").value = 0;
            break;
        case "green":
            document.getElementById("redColorPicker").value = 0;
            document.getElementById("greenColorPicker").value = 255;
            document.getElementById("blueColorPicker").value = 0;
            break;
        case "black":
            document.getElementById("redColorPicker").value = 0;
            document.getElementById("greenColorPicker").value = 0;
            document.getElementById("blueColorPicker").value = 0;
            break;
        case "blue":
            document.getElementById("redColorPicker").value = 0;
            document.getElementById("greenColorPicker").value = 0;
            document.getElementById("blueColorPicker").value = 255;
            break;
        case "maroon":
            document.getElementById("redColorPicker").value = 128;
            document.getElementById("greenColorPicker").value = 0;
            document.getElementById("blueColorPicker").value = 0;
            break;
        case "white":
            document.getElementById("redColorPicker").value = 255;
            document.getElementById("greenColorPicker").value = 255;
            document.getElementById("blueColorPicker").value = 255;
            break;
    }
}