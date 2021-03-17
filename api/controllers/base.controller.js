const mapper = require('mapper.js');

class BaseController {
    constructor(EntityService, EntityDto) {
        this._entityService = EntityService;
        this._entityDto = EntityDto
    }

    async getAll(req, res) {
        let entities = await this._entityService.getAll();
      
        entities = entities.map(entity => mapper(entity, this._entityDto));

        return res.send({
            payload: entities
        });
    }
    //
    async get(req, res) {
        const { id } = req.params;
        let entity = await this._entityService.get(id);
        entity = mapper(this._entityDto, entity);
        
        return res.send({
            payload: entity
        });
    }
    //
    async create(req, res) {
        const { body } = req;
        const createEntity = await this._entityService.create(body);
        const entity = mapper(this._entityDto, createEntity);
        return res.status(201).send({
            payload: entity
        });
    }
    //
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updateEntity =  await this._entityService.update(id, body);
        const entity = mapper(this._entityDto, updateEntity);
        return res.status(204).send({
                payload: entity
            });
    }
    //
    async delete(req, res) {
        const { id } = req.params;
        await this._entityService.delete(id);
        return res.status(204).send({payload: "Entity delete"});
    }

}

module.exports = BaseController;