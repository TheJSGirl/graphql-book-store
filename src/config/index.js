const {
    APP_NAME,
    NODE_ENV,
    SRV_PORT,
    SRV_HOST,
    JWT_ALGORITHM,
    JWT_EXP,
    JWT_SECRET,
    DB_PROTOCOL,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

let credentials = '';

if(DB_USER && DB_PASSWORD) {
    credentials = `${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@`;
}

const BasicConfiguration  = {
    App:{
        NAME: APP_NAME || 'sample-service',
        PORT: SRV_PORT || 3001,
        HOST: SRV_HOST || 'localhost',
        ENV: NODE_ENV || 'development'
    },
    JwtSettings: {
        Algorithm: JWT_ALGORITHM || 'HS256',
        ExpiresIn: JWT_EXP || '1d',
    },
    MongoDBSettings: {
        url: `${DB_PROTOCOL}://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}:${DB_PORT}/${DB_NAME}` || 'mongodb://localhost/bbd-auth-bak',
        host: DB_HOST || 'mongodb://localhost/user-service'
    },
    HashSettings: {
        SaltRounds: 3,
    },
    jwt: {
        jwt_sceret: JWT_SECRET, 
        jwt_exp: JWT_EXP
    
    }
};

module.exports = Object.freeze(BasicConfiguration);



