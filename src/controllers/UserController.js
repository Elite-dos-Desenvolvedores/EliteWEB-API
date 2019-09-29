const { User } = require('../models');

module.exports = {

    async index(req, res) {

        User.findAll()
        .then(users => {
            return res.json(users);
        });
        
    },

    async show(req, res) {

        User.findOne({ where: { id : req.params.id }})
        .then(user => {
            return res.json(user);
        });
        
    },

    async store(req, res) {
        
    },

    async update(req, res) {

    },

    async delete(req, res) {

    }

}