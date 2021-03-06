/a/lib/tsc.js -i
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/users/username/projects/project/file1.ts]
export const x = 10;

//// [/users/username/projects/project/file2.ts]
export const y = 20;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"incremental":true,"module":"amd","outFile":"out.js"}}

//// [/users/username/projects/project/out.js]
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.y = 20;
});


//// [/users/username/projects/project/out.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file1.ts",
      "./file2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 286,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/users/username/projects/project/out.tsbuildinfo.baseline.txt]
======================================================================
File:: /users/username/projects/project/out.js
----------------------------------------------------------------------
text: (0-286)
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.x = 10;
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.y = 20;
});

======================================================================


Output::

Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"module":2,"outFile":"/users/username/projects/project/out.js","configFilePath":"/users/username/projects/project/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

No cached semantic diagnostics in the builder::

WatchedFiles::

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.Success
