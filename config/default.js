module.exports = {
    jwt: {
        tokenKeyAdmin: process.env.TOKEN_KEY_ADMIN,
        tokenKey: process.env.TOKEN_KEY
    },
    db: {
        provider: "mongodb",
        connection: process.env.DATABASE_CONNECTION_STRING
    },
    log: "debug"
};