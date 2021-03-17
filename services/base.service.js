class BaseService{
    constructor(EnityBusiness) {
        this._entityBusiness = EnityBusiness;
    }

    async getAll(){
        const entities = await this._entityBusiness.getAll();
        return entities;
    }

    async get(id){
        const entity = await this._entityBusiness.get(id);
        return entity;
    }

    async create(enity){
        const createEntity = await this._entityBusiness.create(entity);
        return createEntity;
    }

    async update(id, enity){
        const updatedEntity = await this._entityBusiness.update(id,entity);
        return updatedEntity;
    }

    async delete(id){
        const deletedEntity = await this._entityBusiness.delete(id,entity);
        return deletedEntity;
    }

}

module.exports = BaseService;