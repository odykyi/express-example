const UserDAO = require('./user.dao');

class UserService {
  constructor() {
    this.userDAO = new UserDAO();
  }

  create() {
    this.userDAO.create();
  }
}

module.exports = UserService;
