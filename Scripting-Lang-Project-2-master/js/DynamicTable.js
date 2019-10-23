class DynamicTable {

    constructor(document) {
        this._document = document;
    }

    setColor(id, color) {
        this._document.getElementById(id).style.background = color;
    }

    createTable(nbCols, nbRows) {
        let tableElement = this._document.createElement('table');

        tableElement.appendChild(this.firstRowElement(20));
        for (let i = 1; i <= nbRows; i++) {
            tableElement.appendChild(this.colorRowElement(i, nbCols));
        }

        this._document.getElementById("tableSpace").appendChild(tableElement);
    }

    headerColumnElement(number) {
        let columnElement = this._document.createElement('th');
        columnElement.innerHTML = number;
        return columnElement;
    }

    colorColumnElement(rowInt, columnInt) {
        let columnElement = this._document.createElement('td');
        columnElement.setAttribute('id', rowInt + ',' + columnInt);
        return columnElement;
    }

    firstRowElement(numColsInt) {
        let firstRowElement = this._document.createElement('tr');
        for (let columnInt = 0; columnInt <= numColsInt; columnInt++) {
            firstRowElement.appendChild(this.headerColumnElement(columnInt == 0 ? '' : columnInt));
        }
        return firstRowElement;
    }

    colorRowElement(rowNumberInt, numColsInt) {
        let rowElement = this._document.createElement('tr');
        for (let columnInt = 0; columnInt <= numColsInt; columnInt++) {
            rowElement.appendChild(columnInt > 0 ? this.colorColumnElement(rowNumberInt, columnInt) : this.headerColumnElement(rowNumberInt));
        }
        return rowElement;
    }

}