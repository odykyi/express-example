const DI = require('../dependencyInjection')


class UserService {
  constructor(){
    console.log('11111 h1ello UserService ')

    // DI.get('UserDAO');
  }

  init(){

    console.log(')))))))))', Object.keys(DI))
    console.log(')))))))))', typeof DI)
    console.log(')))))))))', DI instanceof Map)
    DI.get('UserDAO');
  }
}

module.exports = UserService;
