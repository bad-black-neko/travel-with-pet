'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Pet.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    rabies_vaccination_date: DataTypes.DATEONLY,
    general_vaccination_date: DataTypes.DATEONLY,
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};