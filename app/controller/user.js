"use strict";

const { Controller } = require("egg");

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = "这是用户！！！";
    }
}

module.exports = UserController;