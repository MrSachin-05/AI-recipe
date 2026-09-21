const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const arcjetDistDir = path.join(
  projectRoot,
  "node_modules",
  "@arcjet",
  "analyze-wasm",
  "dist"
);
const indexPath = path.join(arcjetDistDir, "index.js");
const originalImport = "./_virtual/_./wasm/arcjet_analyze_js_req.component.core";
const replacementImport = "./_virtual/alias/wasm/arcjet_analyze_js_req.component.core";
const sourceWasmDir = path.join(arcjetDistDir, "_virtual", "_.", "wasm");
const aliasWasmDir = path.join(arcjetDistDir, "_virtual", "alias", "wasm");

function patchIndexFile() {
  if (!fs.existsSync(indexPath)) {
    return;
  }

  let contents = fs.readFileSync(indexPath, "utf8");
  const updated = contents
    .replaceAll(`${originalImport}.js`, `${replacementImport}.js`)
    .replaceAll(`${originalImport}2.js`, `${replacementImport}2.js`)
    .replaceAll(`${originalImport}3.js`, `${replacementImport}3.js`);

  if (updated !== contents) {
    fs.writeFileSync(indexPath, updated);
    console.log("Patched @arcjet/analyze-wasm dist/index.js import paths.");
  }
}

function copyWasmAliasFiles() {
  if (!fs.existsSync(sourceWasmDir)) {
    return;
  }

  fs.mkdirSync(aliasWasmDir, { recursive: true });

  for (const file of fs.readdirSync(sourceWasmDir)) {
    if (file.startsWith("arcjet_analyze_js_req.component.core")) {
      fs.copyFileSync(path.join(sourceWasmDir, file), path.join(aliasWasmDir, file));
    }
  }
}

try {
  patchIndexFile();
  copyWasmAliasFiles();
} catch (error) {
  console.warn("fix-arcjet-wasm.js skipped:", error.message);
}
