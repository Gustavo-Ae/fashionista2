require('dotenv').config()

const pgPromise = require('pg-promise')()

const database = pgPromise({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    max: 20
})

module.exports = database;