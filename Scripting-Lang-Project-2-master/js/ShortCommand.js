class ShortCommand {
    constructor(informationObject) {
        this._console = informationObject.consoleElement;
        this._dynamicTable = informationObject.dynamicTable;
    }

    /**
     * Returns a Promise that calls setTimout for millisInt milliseconds.
     * @param {Integer} millisInt 
     */
    wait(millisInt) {
        let waitPromise = new Promise((resolve, _) => setTimeout(resolve, millisInt));
        return waitPromise;
    }

    clearAll() {
        for (let row = 1; row <= 10; row++)
            for (let col = 1; col <= 20; col++)
                this.setColor(row, col, "white");
    }

    clear(rowInt, colInt) {
        try {
            this.setColor(rowInt, colInt, "white");
        } catch (e) {
            this.log(rowInt + ',' + colInt + ' Does not exist.');
        }
    }

    setColor(rowInt, colInt, colorString) {
        try {
            this._dynamicTable.setColor(rowInt + ',' + colInt, colorString);
        } catch (e) {
            this.log(rowInt + ',' + colInt + ' Does not exist.');
        }
    }

    log(message) {
        this._console.append('<br>' + message);
    }
}