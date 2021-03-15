const User = require('../user');

module.exports = {
    toDomainEntity(user){
        const { name, lastname } = user;
        return new User({ name, lastname });
    }
}