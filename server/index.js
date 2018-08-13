const express = require("express");
const next = require("next");

const api = require("./app");

const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set("port", port);

// Import API Routes
app.use("/api", api);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextApp.render(req, res, "/", req.query);
  });

  // Listen the server
  const server = app.listen(port, host);
  api.setup(server);

  console.log(`Server listening on ${host}:${port}`); // eslint-disable-line no-console
});
