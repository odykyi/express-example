const DI = require('../dependencyInjection');

class UserService {
  constructor(DI){
    this.DI = DI;
    console.log('ONCECEE_________')
     // return this;
    // DI.get('UserDAO');
  }


  init() {
    console.log(')))))1))))', this)
    // console.log(')))))2))))', Object.keys(this))
    // console.log(')))))3))))', Object.keys(this.DI))
    // console.log('))))))4)))', typeof this.DI)
    console.log(')))))5))))', this.DI instanceof Map)
    this.DI.get('UserService');
  }
}

module.exports = UserService;
