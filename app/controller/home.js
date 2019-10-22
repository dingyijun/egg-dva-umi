'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }

  async test() {
    const result = {
      code: 0,
      data: [
        { name: 'pxh', height: 182, gender: 'man' },
      ]
    }
    this.ctx.body = result;
  }
}

module.exports = HomeController;
