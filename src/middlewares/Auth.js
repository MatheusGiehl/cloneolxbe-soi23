const User = require('../models/User');

module.exports = {
    private: async (req, res, next) => {
        
        if(!req.query.token) {
            res.json({notallowed: true});
            return;
        }
        let token = '';
        if (req.query.token) {
            token = req.query.token;
        }
        if (req.body.token) {
            token = req.body.token;
        }
        if (token === '') {
            res.json;
        }
        next();
    }
};