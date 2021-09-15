const fs = require("fs");

function rewrite(filename, replace) {
  const encoding = "utf8";
  fs.writeFileSync(filename, replace(fs.readFileSync(filename, { encoding })), {
    encoding,
  });
}

rewrite("./node_modules/.prisma/client/index.js", (file) =>
  file.replace(
    `'"node_modules/.prisma/client"',`,
    `"node_modules/.prisma/client",`
  )
);
