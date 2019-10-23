/**
 * Contains all of the functions used in the front-end to manipulate the table.
 */
class DynamicColorTable {

    // Constructor
    /**
     * 
     * @param {Object} dynamicElements - The necessary elements passed from the HTML page. 
     * @param {Document} document - The Document that the Table is in.
     */
    constructor(dynamicElements, document) {
        this.dynamicElements = dynamicElements;
        this.document = document;

        //Setting up error box
        let errorBox = this.dynamicElements.errorBox;
        errorBox.readOnly = true
        errorBox.size = 30
    }

    //CONVENIENCE FUNCTIONS

    /**
     * Easy access to this.document.getElementById
     * 
     * @param {String} idString 
     */
    getElementById(idString) {
        return this.document.getElementById(idString);
    }

    /**
     * Easy access to this.document.createElement
     * @param {String} elementString 
     */
    createElement(elementString) {
        return this.document.createElement(elementString);
    }

    /**
     * Copy of table.appendChild
     * @param {Element} childElement - The Element to add.
     */
    appendChild(childElement) {
        this.dynamicElements.table.appendChild(childElement);
    }

    /**
     * Gets the picked color from the Color Picker Element and validates it before using it.
     */
    get pickedColor() {
        var redColorInt = this.dynamicElements.redColorPicker.value;
        var greenColorInt = this.dynamicElements.greenColorPicker.value;
        var blueColorInt = this.dynamicElements.blueColorPicker.value;

        //validating as numbers
        console.log('validating RGB. R: '+ redColorInt + ' G: '+ greenColorInt + ' B: ' + blueColorInt + ' as a number');
        if(this.validateInput(redColorInt) && this.validateInput(greenColorInt) && this.validateInput(blueColorInt) ){
            //validating as colors in range
            console.log('validating for a range');
            if(this.validateCustomColor(redColorInt, greenColorInt, blueColorInt)){
                return "rgb(" + redColorInt + "," + greenColorInt + "," + blueColorInt + ")";
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    /**
     * Creates a new table with given row and Column parameters.
     * @param {Integer} rowInt - The number of rows the table should have.
     * @param {Integer} columnInt - The number of columns the table should have.
     */
    createTable(rowInt, columnInt) {
        this.emptyTable();

        console.log('Validating row, col as number');
        if( this.validateInput(rowInt) && this.validateInput(columnInt) ){
            console.log('Validating row, col in range');
            if(this.validateTableSize(rowInt, columnInt)){
                this.rowLength = rowInt;
                this.columnLength = columnInt;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }

        this.getElementById('rowCount').value = rowInt;
        this.getElementById('columnCount').value = columnInt;

        for (let r = 0; r < rowInt; r++) {
            let newRowElement = this.createElement('tr');

            for (let c = 0; c < columnInt; c++) {
                let newColumnElement = this.createElement('td');
                newColumnElement.innerHTML = '';
                newColumnElement.id = this.getCellIdString(r, c);
                newColumnElement.addEventListener("click", () => {
                    this.setCellColor(r, c, this.pickedColor);
                    this.printCellInfo(r,c);
                });
                newRowElement.appendChild(newColumnElement);
            }

            this.appendChild(newRowElement);
        }

        this.scale(rowInt, columnInt);
    }

    /**
     * Resets all of the table's cells' color to white
     */
    clearTableColors() {
        for (let r = 0; r < this.rowLength; r++) {
            for (let c = 0; c < this.columnLength; c++) {
                this.setCellColor(r, c, 'white');
            }
        }
    }

    /** 
     * Clears the contents of the exisitng table.
     */
    emptyTable() {
        this.rowLength = 0;
        this.columnLength = 0;
        this.dynamicElements.table.innerHTML = '';
    }

    /**
     * Sets the cell color given the cell's row and column.
     * @param {Integer} rowInt - The row of the cell.
     * @param {Integer} columnInt - The column of the cell.
     * @param {String} colorString - The Color to set the cell;
     */
    setCellColor(rowInt, columnInt, colorString) {
        let cellElement = this.getElementById(this.getCellIdString(rowInt, columnInt));
        cellElement.style.backgroundColor = colorString;
    }

    /**
     * Validates type number as an integer
     * @param {Any} number - Possible number
     */
    //DONE
    validateInput(number){
        if( isNaN(parseInt(number)) ){
            this.dynamicElements.errorBox.value = 'Enter NUMBERS!!';
            this.dynamicElements.errorBox.style.fontWeight = "bold";
            console.log(number + ' is not a number');
            return false;
        }
        else {
            //console.log(number + ' is a number');
            this.resetErrorBox();
            return true;
        }
    }

    /**
     * Validates 3 integers as RGB values in the range 0 to 255
     * @param {Any} redColor - Possible red value
     * @param {Any} blueColor - Possible blue value
     * @param {Any} greenColor - Possible green value
     */
    validateCustomColor(redColor, blueColor, greenColor){
        let RGB = [redColor, blueColor, greenColor];

        for(let color of RGB){
            if( color < 0 || color > 255){
                console.log("ColorFail: " + color);
                this.dynamicElements.errorBox.value = 'Enter numbers between 0 and 255';
                alert("0-255");
                return false;
            }
        }
        return true;
        this.resetErrorBox();
    }

    /**
     * Validates 2 integers as row,col acceptable values
     * @param {Any} rowInt 
     * @param {Any} colInt 
     */
    validateTableSize(rowInt, colInt){
        let tableDimensions = [rowInt, colInt];
        
        for(let dimension of tableDimensions){
            if(dimension < 0 || dimension > 500){
                console.log("dimension: " + dimension);
                this.dynamicElements.errorBox.value = 'Enter numbers between 0 and 500';
                alert("0-500");
                return false;
            }
        }
        return true;
        this.resetErrorBox();
    }

    /**
     * Resets Error Box after fixing the issue
     */
    resetErrorBox(){
        this.dynamicElements.errorBox.value = 'Good, you\'re very smart';
        this.dynamicElements.errorBox.style.fontWeight = "normal";
    }

    
    /**
     * Scales the table based on numbers of rows and columns
     * @param {integer} numRows No. of rows
     * @param {integer} numCols No. of columns
     */
    scale(numRows, numCols){
        let defaultCap = 50;
        let tds = document.getElementsByTagName('td');
        let scaleFactorX = 1;
        let scaleFactorY = 1;
        
        if(numRows <= defaultCap && numCols <= defaultCap)
        {
            let cell = tds[0].style;
            if(cell.width != "20px" || cell.height != "20px"){
                this.resetScale(tds);
            }
        }
        else if(numRows > defaultCap && numCols > defaultCap){
            scaleFactorX = numCols/defaultCap;
            scaleFactorY = numRows/defaultCap;
        }
        else if(numCols > defaultCap){
            scaleFactorX = numCols/defaultCap;
        }
        else if(numRows > defaultCap){
            scaleFactorY = numRows/defaultCap;
        }

        this.applyScale(tds, scaleFactorX, scaleFactorY);
    }

    /**
     * Scale Helper function to actually apply the right scale on the table
     * @param {array} cells 
     * @param {integer} scaleFactorX 
     * @param {integer} scaleFactorY 
     */
    applyScale(cells, scaleFactorX, scaleFactorY){
        console.log('Applying Scale X: ' + 1/scaleFactorX + ' Y: ' + 1/scaleFactorY);
        var defaultSize = 20;
        
        var newWidthInt = defaultSize / scaleFactorX;
        var newWidth = Math.round(newWidthInt) + 'px';

        var newHeightInt = defaultSize / scaleFactorY;
        var newHeight = Math.round(newHeightInt) + 'px';

        console.log('NewWidth: ' + newWidth);
        console.log('NewHeight: ' + newHeight);
        for(let cell of cells){
            cell.style.width = newWidth;
            cell.style.height = newHeight;
        }
    }

    /**
     * Resets scale to default 
     * @param {array} cells 
     */
    resetScale(cells){
        console.log('Resetting Scale')
        for(let cell of cells){
            cell.style.width = '20px';
            cell.style.height = '20px';
        }
    }

    //DEBUG FRIENDLY FUNCTIONS (GET, SET, PRINT)

    /**
     * Prints the entire table with Row, Col, RGB
     */
    printEverything(){
        for(let r = 0; r < this.rowLength; r++){
            for(let c = 0; c < this.columnLength; c++){
                this.printCellInfo(r, c);
            }
        } 
    }

    /**
     * print cell selected by row, col
     * @param {integer} rowInput row of the cell
     * @param {integer} columnLength column of the cell
     */
    printCellInfo(row, column){
        console.log('Row: ' + row + ' Column: ' + column);
        let RGB = this.getCellColor(row, column);
        console.log('RGB: ' + RGB);
    }

    /**
     * Gets the number of rows from the currently rendered Table. 
     */
    get nrows() {
        return this.rowLength;
    }

    /**
     * Gets the number of columns from the currently rendered Table
     */
    get ncols() {
        return this.columnLength;
    }

    /**
     * Returns a string with cell and row number
     * @param {integer} cellRowInt row number of the cell
     * @param {integer} cellColumnInt column number of the cell
     */
    getCellIdString(cellRowInt, cellColumnInt) {
        return 'cell:' + cellRowInt + ',' + cellColumnInt;
    }


    /**
     * gets cell color based on row, col
     * @param {integer} rowInt 
     * @param {columnInt} columnInt
     */
    getCellColor(rowInt, columnInt){
        let cellElement = this.getElementById(this.getCellIdString(rowInt, columnInt));
        let RGB = cellElement.style.backgroundColor;
        return RGB;
    }

    /**
     * Sets row number variable
     * @param {integer} rowInt - no. of rows
     */
    set nrows(rowInt) {
        this.rowLength = rowInt;
    }

    /**
     * Sets column number variable
     * @param {integer} colInt - no. of columns
     */
    set ncols(colInt) {
        this.columnLength = colInt;
    }

    /**
     * Returns pixel string from integers
     * @param {integer} redColorInt - R value
     * @param {integer} greenColorInt - G value
     * @param {integer} blueColorInt - B value
     */
    getPixelColor(redColorInt, greenColorInt, blueColorInt){
        return "rgb(" + redColorInt + "," + greenColorInt + "," + blueColorInt + ")";   
    }
}

