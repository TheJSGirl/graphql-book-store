const {PORT, NODE_ENV} = process.env;

const appConfig = {
    node_env = NODE_ENV || 'development',
    port : PORT || 3000

}

module.exports = appConfig;