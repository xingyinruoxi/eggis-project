"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
    async aa() {
        const { ctx } = this;
        ctx.body = "Hello, egg！!!";
    }
}

module.exports = HomeController;