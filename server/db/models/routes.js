'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Reference, Photos, Reviews}) {
      this.hasMany(Reference, {foreignKey: "routes_id"})
      this.hasMany(Photos, {foreignKey: "routes_id"})
      this.hasMany(Reviews, {foreignKey: "routes_id"})
    }
  };
  Routes.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficalty: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};
