import fs from "fs";
import path from "path";

const root = path.resolve(process.cwd(), "dist", "public", "assets");
const budgets = {
  entryJs: 420 * 1024,
  entryCss: 140 * 1024,
  totalJs: 800 * 1024,
};

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

function ensureDirExists(target) {
  if (!fs.existsSync(target)) {
    throw new Error(
      `Performance budget check failed: "${target}" does not exist. Run "npm run build" first.`,
    );
  }
}

function getAssetSizes() {
  const files = fs.readdirSync(root);
  const result = {
    js: [],
    css: [],
  };

  files.forEach((file) => {
    const filePath = path.join(root, file);
    const stats = fs.statSync(filePath);

    if (file.endsWith(".js")) {
      result.js.push({ file, size: stats.size });
    }
    if (file.endsWith(".css")) {
      result.css.push({ file, size: stats.size });
    }
  });

  return result;
}

function enforceBudgets(assets) {
  const mainJs = assets.js.sort((a, b) => b.size - a.size)[0];
  const mainCss = assets.css.sort((a, b) => b.size - a.size)[0];
  const totalJsSize = assets.js.reduce((sum, asset) => sum + asset.size, 0);

  const failures = [];

  if (mainJs && mainJs.size > budgets.entryJs) {
    failures.push(
      `Largest JS chunk (${mainJs.file}) is ${formatSize(mainJs.size)} (budget ${formatSize(
        budgets.entryJs,
      )})`,
    );
  }

  if (mainCss && mainCss.size > budgets.entryCss) {
    failures.push(
      `Largest CSS chunk (${mainCss.file}) is ${formatSize(mainCss.size)} (budget ${formatSize(
        budgets.entryCss,
      )})`,
    );
  }

  if (totalJsSize > budgets.totalJs) {
    failures.push(
      `Total JS payload is ${formatSize(totalJsSize)} (budget ${formatSize(budgets.totalJs)})`,
    );
  }

  if (failures.length) {
    console.error("❌ Performance budget failed:");
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  } else {
    console.log("✅ Performance budgets respected.");
    console.table({
      entryJs: formatSize(mainJs?.size ?? 0),
      entryCss: formatSize(mainCss?.size ?? 0),
      totalJs: formatSize(totalJsSize),
    });
  }
}

ensureDirExists(root);
const assets = getAssetSizes();
enforceBudgets(assets);


