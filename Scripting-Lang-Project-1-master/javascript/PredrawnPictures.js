/**
 * TODO: Document
 */
class PredrawnPictures {

    /**
     * Creates a PredrawnPictures class using a 
     * 
     * @param {DynamicColorTable} dynamicColorTable 
     */
    constructor(dynamicColorTable) {
        this.dynamicColorTable = dynamicColorTable;
    }

    /** 
     * Draws a flower using the create table function in DynamicColorTable class.
     */
    drawFlower() {
        this.dynamicColorTable.createTable(25, 25);

        for (let r = 0; r < 25; r++) {
            for (let c = 0; c < 25; c++) {
                if (((c >= 10) && (c < 15) && (r > 15))) {
                    this.dynamicColorTable.setCellColor(r, c, 'green');
                }
                if (((c >= 7) && (c < 18) && ((r > 5) && (r < 16)))) {
                    this.dynamicColorTable.setCellColor(r, c, 'red');
                }
                if (((c >= 11) && (c < 14) && ((r > 8) && (r < 13)))) {
                    this.dynamicColorTable.setCellColor(r, c, 'yellow');
                }

            }
        }
    }


    /**
     * Draws A&M symbol
     */
    drawTAMU() {
        this.dynamicColorTable.createTable(50, 50);

        for (let r = 0; r < 50; r++) {
            for (let c = 0; c < 50; c++) {
                //sets white background color for entire table
                this.dynamicColorTable.setCellColor(r, c, 'white');

                //Draw T---------------------------------------------------------------------------------------//
                if (r == 6 && (c > 4) && (c < 45)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');

                }
                if (r == 7 && (c > 4) && (c < 45)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');

                }
                if (r == 8 && (c > 4) && (c < 45)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');

                }
                if (r == 9 && (((c == 5) || (c == 6) || (c == 7)) || ((c == 42) || (c == 43) || (c == 44)))) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');

                }
                if (c > 21 && c < 28 && r > 6 && r < 35) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }

                if ((c > 16 && c < 20 && r == 32) || (c > 29 && c < 33 && r == 32)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((c > 16 && r > 32 && r < 35 && c < 33)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                //Draw T---------------------------------------------------------------------------------------//

                //Draw A----------------------------------------//
                if (r > 14 && r < 17 && c > 6 && c < 14) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 17 && c > 7 && c < 13) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 18 && c > 6 && c < 14 && c != 10) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 19 && c > 5 && c < 15 && c != 9 && c != 10 && c != 11) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 20 && c > 4 && c < 16 && c != 8 && c != 9 && c != 10 && c != 11 && c != 12) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 21 && c > 3 && c < 17) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if (r == 22 && c > 2 && c < 18) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 23 && c > 1 && c < 7) || (r == 23 && c > 13 && c < 19)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 24 && c > 1 && c < 7) || (r == 24 && c > 13 && c < 19)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                //Draw A----------------------------------------//

                //Draw M-----------------------------------------------------------------//
                if ((r == 15 && c < 37 && c > 31) || (c > 41 && c < 47 && r == 15)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 16 && c < 38 && c > 31) || (c > 40 && c < 47 && r == 16)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 17 && c < 37 && c > 32) || (c > 41 && c < 46 && r == 17)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 18 && c < 38 && c > 32 && c != 34) || (c > 40 && c < 46 && c != 44 && r == 18)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 19 && c < 38 && c > 31 && c != 34 && c != 35) || (c > 40 && c < 47 && c != 44 && c != 43 && r == 19)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 20 && c < 39 && c > 31 && c != 34 && c != 35 && c != 36) ||
                    (c > 39 && c < 47 && c != 44 && c != 43 && c != 42 && r == 20)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 21 && c < 40 && c > 30 && c != 34 && c != 35 && c != 36) ||
                    (c > 39 && c < 48 && c != 44 && c != 43 && c != 42 && r == 21)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 22 && c < 40 && c > 30 && c != 34 && c != 35 && c != 36 && c != 37) ||
                    (c > 39 && c < 48 && c != 44 && c != 43 && c != 42 && c != 41 && r == 22)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 23 && c < 38 && c > 29 && c != 35 && c != 36 && c != 37) ||
                    (c > 40 && c < 49 && c != 43 && c != 42 && c != 41 && r == 23)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                if ((r == 24 && c < 38 && c > 29 && c != 35 && c != 36 && c != 37) ||
                    (c > 40 && c < 49 && c != 43 && c != 42 && c != 41 && r == 24)) {
                    this.dynamicColorTable.setCellColor(r, c, 'maroon');
                }
                //Draw M-----------------------------------------------------------------//
            }
        }
    }

    /**
     * Draws a SICK sword
     */
    drawSword(){
        this.dynamicColorTable.createTable(100,100);

        this.setBackground('gainsboro');

        for(let r = 0; r < 100; r++){
            for(let c = 0; c < 100; c++){
                //drawing Border
                if(this.borderCheck(c,r) ){
                    this.dynamicColorTable.setCellColor(r,c, 'gold');
                }

                //drawing Point
                else if( this.between(r,15,19) && this.between(c, 46, 54) ){
                    if(this.pointCheck(r,c)){
                        this.dynamicColorTable.setCellColor(r,c,'darkgray');
                    }
                }

                //drawing Blade
                else if( this.between(r,20,63) && this.between(c, 46, 54) ){
                    this.dynamicColorTable.setCellColor(r,c,'darkgray');
                }

                //drawing Guard
                else if( this.between(r,65,68) && this.between(c, 36, 64) ){
                    this.dynamicColorTable.setCellColor(r,c,'brown');
                }

                //drawing Hilt
                else if( this.between(r,70,80) && this.between(c, 48, 52) ){
                    this.dynamicColorTable.setCellColor(r,c,'black');
                }

                //adding Realism
                else if( r == 64 && this.between(c, 45, 55) ){
                    this.dynamicColorTable.setCellColor(r,c,'brown');
                }
                
                else if( r == 69 && this.between(c, 46, 54) ){
                    this.dynamicColorTable.setCellColor(r,c,'brown');
                }
                
                //drawing Fuller 1
                if (this.between(r, 29, 63) && this.between(c, 49, 51) ){
                    this.dynamicColorTable.setCellColor(r,c,'grey');
                }

                //drawing Fuller 2
                if( this.between(r, 27, 28) && this.between(c, 50, 50) ){
                    this.dynamicColorTable.setCellColor(r, c, 'grey');
                }
            }
        }
    }

    setBackground(color){
        for(let r = 0; r < 100; r++){
            for(let c = 0; c < 100; c++){
                this.dynamicColorTable.setCellColor(r,c,color);
            }
        }
    }

    /**
     * Helper function to draw borders (HardCoded)
     * @param {integer} rowNum row of the Cell
     * @param {integer} colNum column of the Cell
     */
    borderCheck(rowNum, colNum){
        if(colNum == 0 || colNum == 99){
            return true;
        }
        else if(rowNum == 0 || rowNum == 99){
            return true;
        }
            return false;
    }

    /**
     * Helper function for drawing the pointy end of the sword (HardCoded)
     * @param {integer} rowNum row of the cell
     * @param {integer} colNum column of the cell
     */
    pointCheck(rowNum, colNum){
        var colStarting = 50;
        var colMax = colStarting;
        var colMin = colStarting;
        var pointHeight = 5;
        var startingRow = 15;
        var currentRow = startingRow;

        //Performs pointHeight iterations widening the sword each time

        for(let i = 0; i < pointHeight; i++){
            if(this.between(colNum, colMin, colMax) && rowNum == currentRow){
                return true;
            }
            else{
                colMin-=1;
                colMax+=1;
                currentRow+=1;
            }
        }
    }

    /**
     * Psuedo macro to make statements shorter while range checking
     * @param {integer} i number to check the bounds of
     * @param {integer} min minimum of the range
     * @param {integer} max maximum of the range
     */
    between(i, min, max){
        if(i >= min && i <= max){
            return true;
        }
        else
            return false;
    }

}