const mapper = require('automapper-js');

class UserService{

    constructor({UserBusiness}){
        this._userBusiness = UserBusiness;
    }

    async getUsers(){
        const users = await this._userBusiness.getUsers();
        return users;
    }
    //
    async getUser(id){
        const user = await this._userBusiness.getUser(id);
        return user;
    }
    //
    async createUser(user){
        const createUser = await this._userBusiness.createUser(user);
        return createUser;
    }
    //
    async updateUser(id, user) {       
        const updateUser = await this._userBusiness.updateUser(id,user);
        return updateUser;
    }
    //
    async deleteUser(id) {       
        const deleteUser = await this._userBusiness.deleteUser(id);
        return deleteUser;
    }

}

module.exports = UserService;