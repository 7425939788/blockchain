module.exports = {
    HOST: "localhost",
    USER: "shamil",
    PASSWORD: "Shamil@8891",
    DB: "EVotingDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };