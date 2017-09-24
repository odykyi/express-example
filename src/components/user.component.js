const UserDAO = require('./users/user.dao');
const UserService = require('./users/user.service');

class UserComponent {
  constructor() {
    return {
      dao: [UserDAO],
      services: [UserService(this.dao)],
      validators: [],
    };
  }
}

module.exports = new UserComponent();
