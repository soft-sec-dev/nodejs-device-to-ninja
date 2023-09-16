const port = process.argv[2] || process.env.PORT || 3000,
  http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);

    const nameArg = capitalize(
      req.url
        .replace(/[^\w.,-]/g, " ")
        .replace(/\s+/g, "")
        .trim() || "world"
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<p>Hello ${nameArg}</p>`);
  })
  .listen(port);

function capitalize(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(`Server runnin on: http://localhost:${port}`);
