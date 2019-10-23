var nbRows = 10;
var nbCols = 10;
var cellWidth = 10;
var cellHeight = 10;

/* ander */
// error handling
// alerts the user of an error
function alertError(message) {
  alert("[ERROR]" + message);
}

// debugging
// sets the color of a button, given its id
function setColor(id) {
  inputColor = document.getElementById("colorpicker").value;
  document.getElementById(id).style.background = inputColor;
}

// debugging manually
// manually set the color of a button, given its id and hex color
function manualSetColor(id, hexColor) {
  document.getElementById(id).style.background = hexColor;
}

function testManualSet() {
  manualSetColor("button0", "#000000");
  manualSetColor("button2", "#000000");
  manualSetColor("button4", "#000000");
  manualSetColor("button6", "#000000");
  manualSetColor("button8", "#000000");
}

// check for the rows and cols
function isValidRowsAndCols(nbRows, nbCols) {
  if (isNaN(nbRows) || isNaN(nbCols)) {
    alertError("Rows and columns must be an integer");
    return;
  }

  if (nbRows < 1 || nbCols < 1) {
    alertError("Rows and columns need to be greated than 0");
    return;
  }

  if (nbRows > 100 || nbCols > 100) {
    alertError("Rows and columns cannot be larger than 100");
    return;
  }
}

// create table with specified rows and columns
function createTable(nbCols, nbRows) {
  nbRows = nbRows || document.getElementById("nbRows").value;
  nbCols = nbCols || document.getElementById("nbCols").value;
  cellWidth = 10;
  cellHeight = 10;

  /* ander */
  // error handling
  isValidRowsAndCols(nbRows, nbCols);

  createTableStmt = "<table id='tbl'>";
  styleClause =
    "style='width:" + cellWidth + "px; height:" + cellHeight + "px'; ";
  buttonClause = "<button type='submit' onclick=setColor(this.id)></button>";
  buttonStyleClause =
    "style='background-color: #FFFFFF; border: none; width:" +
    cellWidth +
    "px; height:" +
    cellHeight +
    "px';";
  colClause = "<td " + styleClause + "> " + buttonClause + "</td>\n";

  var nbId = 0;
  for (var i = 0; i < nbRows; ++i) {
    createTableStmt += "<tr>";
    for (var j = 0; j < nbCols; ++j) {
      createTableStmt +=
        "<td " +
        styleClause +
        "> " +
        "<button type='submit' id='button" +
        nbId +
        "' onclick=setColor(this.id) " +
        buttonStyleClause +
        "></button>";
      +"</td>\n";
      ++nbId;
    }
    createTableStmt += "</tr>";
  }

  createTableStmt += "</table>";

  document.getElementById("tableSpace").innerHTML = createTableStmt;
}

// resets the colors in a table to white
function resetTable() {
  var rows = document.getElementById("nbRows").value;
  var cols = document.getElementById("nbCols").value;
  createTable(cols, rows);
}
