const TokenService = require("./services/tokenService");

const token = TokenService.generate("test", "test");

console.log(token.toJwt());
