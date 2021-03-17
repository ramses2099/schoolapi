const mapper = require('automapper-js');

class BaseBusiness {

    constructor(EntityBusiness, entityToMap) {
        this._entityBusiness = EntityBusiness;
        this._entityToMap = entityToMap;
    }

    async getAll() {
        const entities = await this._entityBusiness.getAll();           
        return entities.map(entity => mapper(this._entityToMap, entity.toJSON()));
    }
    //
    async get(id) {
        const entity = await this._entityBusiness.get(id);
        return mapper(this._entityToMap, entity.toJSON());
    }
    //
    async create(entity) {
        entity = mapper(this._entityToMap, entity);
        const createEntity = await this._entityBusiness.create(entity);
        return mapper(this._entityToMap, createEntity.toJSON());
    }
    //
    async update(id, entity) {
        entity.id = id;
        entity = mapper(this._entityToMap, entity);
        const updateEntity = await this._entityBusiness.update(id, entity);
        return mapper(this._entityToMap, updateEntity);
    }
    //
    async delete(id) {
        return await this._entityBusiness.delete(id);
    }

}

module.exports = BaseBusiness;