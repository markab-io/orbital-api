const { Sequelize } = require('sequelize');

const Postgresql = ({ config, onDBInit, onError, onDisconnect }) => {
  const sequelize = new Sequelize(`${config.get("db.host")}`) // Example for postgres
  try {
  await sequelize.authenticate();
  onDBInit()
  console.log('Connection has been established successfully.');
} catch (error) {
  onError(error)
  console.error('Unable to connect to the database:', error);
}
};

// Close the database connection when the node process terminates for whatever reason
process.on("SIGINT", function() {
  Sequelize.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

module.exports = Postgresql;
