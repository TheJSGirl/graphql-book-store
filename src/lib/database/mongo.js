const mongoose = require('mongoose');
const { MongoDBSettings } = require('./../../config');

mongoose.Promise = global.Promise;

function connect() {
    mongoose.connect(MongoDBSettings.url,  { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
        logger.info(`mongodb running @ ${MongoDBSettings.url}`);
    }).on('error', e => {
        logger.error(e);
    });
}

module.exports = {
    connect
};
