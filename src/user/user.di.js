const models = require('../../db/models');
const UserDAO = require('./user.dao');
const UserValidator = require('./user.validator');
const UserService = require('./user.service');

class UserDI {
  constructor() {
    this.init();
  }

  init() {
    const userValidator = new UserValidator({});
    const userDAO = new UserDAO({
      db: models,
    });
    const userService = new UserService({
      dao: {
        user: userDAO,
      },
      validator: {
        user: userValidator,
      },
    });

    this.service = {
      user: userService,
    };
  }
}

module.exports = new UserDI();
