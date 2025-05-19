const jwt = require("jsonwebtoken");
const secret_key = "vjdfvbkjdfvbjkfdvbkjfdbvkjfdbvjkfdbvfjdkvbjdkdxc";

function verifyToken(req, res, next) {
  if (req.headers["authorization"] === undefined) {
    res.send({ ok: false, error: "token is missing" });
  } else {
    var token = req.headers["authorization"].slice(7);

    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        res.json({ ok: false, error: "Invalid token" });
      } else {
        next();
      }
    });
  }
}

module.exports = verifyToken;
