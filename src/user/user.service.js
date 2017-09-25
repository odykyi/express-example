
class UserService {
  constructor(di) {
    this.di = di;
    console.log('--UserService----------');
  }

  create() {
    return this.di.dao.user.create.create();
  }
}

module.exports = UserService;
