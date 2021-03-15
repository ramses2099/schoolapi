class UserController {
    constructor() {
        
    }
    
    sayHello(req, res){
        return res.send({message:"funciona"})
    }

}

module.exports = UserController;