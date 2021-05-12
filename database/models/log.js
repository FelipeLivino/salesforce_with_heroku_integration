'use strict';
const { DataTypes  } = require('sequelize');
const sequelize = require("../sequelize");


const Log = sequelize.define("log", {
  mid: DataTypes.STRING,
    dataextensionname: DataTypes.STRING,
    bufield: DataTypes.STRING,
    isrecall: DataTypes.STRING,
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    htmltext: DataTypes.STRING,
    contactidentifier: DataTypes.STRING,
    parameters: DataTypes.STRING,
    response: DataTypes.STRING,
    responsecode: DataTypes.STRING
});


const init = async () => {
  await Log.sync();
};

init();

module.exports = Log;