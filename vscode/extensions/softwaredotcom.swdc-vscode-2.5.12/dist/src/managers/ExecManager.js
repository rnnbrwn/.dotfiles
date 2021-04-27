"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execCmd = void 0;
const { execSync } = require("child_process");
function execCmd(cmd = "", projectDir = null, returnLines = false) {
    let result = returnLines ? [] : null;
    if (!cmd) {
        // no command to run, return default
        return result;
    }
    try {
        const opts = projectDir ? { cwd: projectDir, encoding: "utf8" } : { encoding: "utf8" };
        const cmdResult = execSync(cmd, opts);
        if (cmdResult && cmdResult.length) {
            const lines = cmdResult.trim().replace(/^\s+/g, " ").replace(/</g, "").replace(/>/g, "").split(/\r?\n/);
            if (lines.length) {
                result = returnLines ? lines : lines[0];
            }
        }
    }
    catch (e) {
        console.log("Error processing command: ", e.message);
    }
    return result;
}
exports.execCmd = execCmd;
//# sourceMappingURL=ExecManager.js.map