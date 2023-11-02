const { Bag } = require('../models')

module.exports = {
    // get all bags
    async index(req, res) {
        try {
            const bags = await Bag.findAll()
            res.send(bags)
        } catch (err) {
            res.status(500).send({
                error: 'The bags information was incorrect'
            })
        }
    },

    // create bag
    async create(req, res) {
        try {
            const bag = await Bag.create(req.body)
            res.send(bag.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create bag incorrect'
            })
        }
    },

    // edit bag
    async put(req, res) {
        try {
            await Bag.update(req.body, {
                where: {
                    id: req.params.bagId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update bag incorrect'
            })
        }
    },

    // delete bag
    async remove(req, res) {
        try {
            const bag = await Bag.findOne({
                where: {
                    id: req.params.bagId
                }
            })
            if (!bag) {
                return res.status(403).send({
                    error: 'The bag information was incorrect'
                })
            }
            await bag.destroy()
            res.send(bag)
        } catch (err) {
            res.status(500).send({
                error: 'The bag information was incorrect'
            })
        }
    },

    // get bag by id
    async show(req, res) {
        try {
            const bag = await Bag.findByPk(req.params.bagId)
            res.send(bag)
        } catch (err) {
            res.status(500).send({
                error: 'The bag information was incorrect'
            })
        }
    },
}
