module.exports.appConfig = {
    /*
    *API connection configuration
    */
    apiConfig: {
        API_PORT: process.env.API_PORT || 8085
    },
    /**Postgres connection configuration */
    postgresdbConfig: {
        database: {
            name: process.env.POSTGRES_DB || 'postgres',
            username: process.env.POSTGRES_USER || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'example',
            options:
            {
                host: process.env.POSTGRES_DB_HOSTNAME || 'serverhost',
                dialect: 'postgres',
                operatorsAliases: false,
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000,
                    acquire: 30000
                },
                dialectOptions: {
                    ssl: process.env.POSTGRES_SSL_ENABLE || false
                }
            }
        }
    }
}