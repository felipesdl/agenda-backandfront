const express = require("express");
const routes = express.Router();

const homeController = require("./src/controllers/homeController.js");
const loginController = require("./src/controllers/loginController.js");
const contatoController = require("./src/controllers/contatoController.js");

const { loginRequired } = require("./src/middlewares/middlewares");

//Rotas da home
routes.get("/", homeController.index);
//Rotas de login
routes.get("/login/index", loginController.index);
routes.post("/login/register", loginController.register);
routes.post("/login/login", loginController.login);
routes.get("/login/logout", loginController.logout);

//Rotas de contato
routes.get("/contato/index", loginRequired, contatoController.index);
routes.post("/contato/register", loginRequired, contatoController.register);
routes.get("/contato/index/:id", loginRequired, contatoController.editIndex);
routes.post("/contato/edit/:id", loginRequired, contatoController.edit);
routes.get("/contato/delete/:id", loginRequired, contatoController.delete);

module.exports = routes;
