'use strict';

var assert = require('assert');
var vows = require('vows');
var fs = require('fs');
var ffs = require('final-fs');
var ts = require('typescript');
var tmp = require('tmp');
var http = require('http');

var CodeGen = require('../lib/codegen').CodeGen;

function compileString(testName, input) {
    var tmpDir = tmp.dirSync({
        dir: './',
        unsafeCleanup: true,
        keep: true
    });
    var tmpFile = tmp.fileSync({
        postfix: '.ts',
        dir: tmpDir.name,
        keep: true
    });
    fs.writeFileSync(tmpFile.fd, input);

    var program = ts.createProgram([tmpFile.name], {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2016, // Makes promises resolve
        moduleResolution: ts.ModuleResolutionKind.NodeJs // ensure we can use node_modules
    });
    var emitResult = program.emit();

    var allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

    allDiagnostics.forEach(function (diagnostic) {
        var lineAndCharacter = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        var line = lineAndCharacter.line;
        var character = lineAndCharacter.character;
        var message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        var outputLine = diagnostic.file.text.split('\n')[line];
        console.log('\n' + testName + ': (' + (line + 1) + ',' + (character + 1) + '): ' + message);
        console.log('     ERROR line: ' + outputLine.trim());
    });

    var errorsSeen = allDiagnostics.length !== 0;
    if (errorsSeen) {
        console.log('     ERRORS seen, generated code preserved in: ' + tmpFile.name);
    } else {
        tmpFile.removeCallback();
        tmpDir.removeCallback();
    }
    return !errorsSeen;
}

// var batch = {};
// var list = ffs.readdirSync('tests/apis');
// list.forEach(function (file) {
//     file = 'tests/apis/' + file;
//     batch[file] = function () {
//         var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
//         var result = CodeGen.getTypescriptCode({
//             swagger: swagger
//         });
//         console.log(result);

//         assert(typeof (result), 'string');
//     };
// });
// vows.describe('Test Generation').addBatch(batch).export(module);

var options = {
    hostname: 'localhost',
    port: 61878,
    path: '/swagger/v1/swagger.json',
    method: 'GET'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (data) {
        var swagger = JSON.parse(data);
        var result = CodeGen.getTypescriptCode({
            swagger: swagger
        });
        console.log(result);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();