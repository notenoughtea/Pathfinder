'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Reference, Photos, Reviews}) {
      this.hasMany(Reference, {foreignKey: "user_id"})
      this.hasMany(Photos, {foreignKey: "user_id"})
      this.hasMany(Reviews, {foreignKey: "user_id"})
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
