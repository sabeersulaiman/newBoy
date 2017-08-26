module.exports = {
    site: {
        url: process.env.MAIN_URL,
        location: process.env.MAIN_LOCATION
    },
    cdn: {
        url: process.env.CDN_URL,
        location: process.env.CDN_LOCATION
    },
    storage: {
        url: process.env.STORAGE_URL,
        location: process.env.STORAGE_LOCATION
    },
    plivo: {
        authId: process.env.PLIVO_AUTH_ID,
        authToken: process.env.PLIVO_AUTH_SECRET
    },
    api: {
        keyFront: process.env.API_KEY_FRONT,
        keyBackend: process.env.API_KEY_BACK
    }
};