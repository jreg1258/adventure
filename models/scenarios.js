module.exports = function(sequelize, DataTypes) {
    var Scenarios = sequelize.define("Scenarios", {
      // Giving the Author model a name of type STRING
      scenario: DataTypes.STRING,
      choiceA: DataTypes.INTEGER,
      choiceB: DataTypes.INTEGER
    });

    return Author;
  };