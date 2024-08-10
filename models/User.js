const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//password check via bcrypt
class User extends Model {
    passwordCheck(password) {
        return bcrypt.compareSync(password, this.password)
    };
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    msg: "Your username must be between 5 and 15 characters.",
                    args: [5, 15],
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    msg: "Your password must be between 8 and 20 characters.",
                    args: [8, 20],
                },
            },
        },
    },
    
    //We are going to encrypt the password the user gives us via bcrypt hashing so it is secure and we don't just have a nonsecure table of passwords living in the db.
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            beforeUpdate: async (updatedUser) => {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser;
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },
);

module.exports = User;