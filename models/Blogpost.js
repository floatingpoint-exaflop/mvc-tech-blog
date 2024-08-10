const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogpost extends Model {};

Blogpost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    msg: "Your blog post's title must be between 5 and 20 characters.",
                    args: [5, 20],
                },
            },
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    msg: "Your blog post must be between 10 and 300 characters.",
                    args: [10, 300],
                },
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost',
    },
);

module.exports = Blogpost;