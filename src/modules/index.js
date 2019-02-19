const users = require('./users/routes');

module.exports = async (app) => {
    app.use('/users',users);
};