/// <reference path="../fourslash.ts"/>

// @Filename: tsconfig.json
//// {
////     "compilerOptions": {
////         "plugins": [
////             { "name": "html-diagnostic-adder" }
////         ]
////     },
////     "files": ["a.ts"]
//// }

// @Filename: a.ts
//// let x = [1, 2];
//// 

// @Filename: b.html
//// <html>
//// /**/
//// </html
//// 

// Test adding an error message for external file
goTo.file('b.html', undefined, "EXTERNAL");
verify.getSyntacticDiagnostics([]);
verify.getSemanticDiagnostics([
    { 
        code: 9999, 
        range: { pos: 0, end: 3, fileName: "b.html" },
        message: "[html-diagnostic-adder] error",
    }
]);