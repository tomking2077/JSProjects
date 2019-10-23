function addKeyboardListeners() {
    $('#code-element').on("keydown", event => {
        if (event.keyCode === 9) {
            event.preventDefault();
            let range = window.getSelection().getRangeAt(0);

            const tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
            range.insertNode(tabNode);
            range.setStartAfter(tabNode);
            range.setEndAfter(tabNode);
        }
    });

    $('#editor-content').on('keydown', event => {
        if (event.keyCode == 13) {
            let editorContent = $('#editor-content').val();
            $('#code-element').append('<br>' + Prism.highlight(editorContent), Prism.languages.javascript);
        }
    });

    $(window).keypress(event => {
        if (event.which == 115 && (event.ctrlKey || event.metaKey) || (event.which == 19)) {
            event.preventDefault();
            saveCode();
            return false;
        }
        return true;
    });
}

function remapConsole() {
    let oldLog = console.log;
    console.log = message => {
        oldLog(message);
        shortCommand.log(message);
    };
    console.warn = message => {
        oldLog(message);
        shortCommand.log(message);
    };
    console.error = message => {
        oldLog(message);
        shortCommand.log(message);
    };
}

function createTable() {
    let dynamicTable = new DynamicTable(document);
    dynamicTable.createTable(20, 10);
    return dynamicTable;
}

function addButtonListeners() {
    $('#run-button').on('click', (event) => {
        let codeString = globalObject.codeElement.getValue();
        executeCode(codeString);
    });
    $('#clear-button').on('click', () => shortCommand.clearAll());
    $('#stop-button').on('click', killCode);
    $('#save-button').on('click', saveCode);
    $('#clear-console-button').on('click', event => $('#console-element').html(''));
}