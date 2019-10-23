var execVerbose = false;
var hashVerbose = false;
var asyncVerbose = false;
var loadVerbose = false;

/**
 * @param {String} codeString
 */
function executeCode(codeString) {
    try {
        codeString = resolveHashCommand(codeString);
        codeString = addAsyncWrapper(codeString);
        if (execVerbose)
            console.log("Logging: " + codeString);
        eval(codeString);
    } catch (exception) {
        console.error(exception);
    }
}

/**
 * 
 * @param {String} codeString 
 */
function addAsyncWrapper(codeString) {
    if (asyncVerbose)
        console.log('Adding async wrapper');
    return 'let codeToExec = async () => {\ntry {\n\n' + codeString + '\n\n} catch (exception) {console.error(exception);}\n}\ncodeToExec();';
}

/**
 * 
 * @param {String} codeString 
 */
function resolveHashCommand(codeString) {
    let commandPattern = new RegExp('keno', 'i');
    let matchedCount = 0;

    while (commandPattern.test(codeString)) {
        let hashCommand = commandPattern.exec(codeString)[0];
        codeString = codeString.replace(hashCommand, 'await shortCommand');
        if (hashVerbose) {
            //console.log("Matched Pattern, Replacing");
            matchedCount++;
        }
    }

    if (hashVerbose)
        console.log("Matched: " + matchedCount);

    return codeString;
}

function saveCode() {
    let data = globalObject.codeElement.getValue()
    var filename = prompt("Please enter in the desired filename");

    if (filename == null) {
        return false;
    }

    if (filename == "") {
        alert("Error, no filename entered");
        return false;
    }

    filename += '.kjs';

    let type = 'text/javascript';
    var file = new Blob([data], {
        type: type
    });

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
        let a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
    return true;
}

function loadCode() {
    $("#files").click();
    $(() => {
        $("#files").change(loadCodeCallback);
    });
}

/**
 * 
 * @param {event Handler} e 
 */
function loadCodeCallback(e) {
    var files = document.getElementById('files').files;

    if (!files.length) {
        alert('Error: no file selected!!');
        return false;
    }

    if (loadVerbose) {
        for (var i = 0; i < files.length; i++) {
            console.log("Filename: " + files[i].name);
            console.log("Type: " + files[i].type);
            console.log("Size: " + files[i].size + " bytes");
        }
    }

    // Validate Extensions
    // If file isn't a kjs or js file, then alert and quit. 
    var allowedExtensions = /(\.js|\.kjs)$/i;

    if (!allowedExtensions.exec(files[0].name)) {
        alert('Please upload file having extensions .js/.kjs only.');
        return false;
    }

    var file = files[0];
    var start = 0;
    var stop = file.size - 1;

    if (stop == -1) {
        alert("Error: The file is empty.");
        return false;
    }

    var reader = new FileReader();

    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {

            codeToReload = evt.target.result;
            $('#code-element').text(codeToReload);
            // Cookies.set('code', codeToReload);
            globalObject.codeElement.setValue(codeToReload);
        }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
    return true;
}

function debugAll() {
    execVerbose = true;
    hashVerbose = true;
    asyncVerbose = true;
    loadVerbose = true;
}

function debugExecution() {
    execVerbose = true;
}

function debugParsing() {
    hashVerbose = true;
    asyncVerbose = true;
}

function debugFileLoad() {
    loadVerbose = true;
}