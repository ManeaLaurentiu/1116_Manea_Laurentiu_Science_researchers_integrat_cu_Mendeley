import { Sequelize } from "sequelize";
import { sequelizeConfigProps } from "../config.js";
import { sequelizeOperationsAPI } from "./operations-api.js";

//realizare conexiune la BD
const sequelizeConnection = new Sequelize(
    "science_research", 
    "root", 
    "Asdqwe1234", 
    sequelizeConfigProps
);

export const Articles = sequelizeConnection.define("Articles", {
    ArticleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Publication: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    DocumentURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
});


export const Libraries = sequelizeConnection.define("Libraries", {
    LibraryId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });


  Libraries.hasMany(Articles, {
    foreignKey: "LibraryId",
    onDelete: "CASCADE", 
    onUpdate: "RESTRICT",
    foreignKeyConstraint: true,
  });

sequelizeOperationsAPI.init(sequelizeConnection);

export {sequelizeConnection};