const { attributes } = require('structure');

const User = attributes({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
    }

})(class User{
    getCompleteName(){
        this.name + " " + this.lastname;
    }
});

module.exports = User;