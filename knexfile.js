const devConfig = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'jedi',
    password: 'MarDirac',
    database: 'ProjectDevjobs'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
};

module.exports = {
  development: devConfig,
  production: {}
}
