module.exports = (sequelize, DataTypes) => {
    const todolist = sequelize.define("todolist", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },


    });
    return todolist;
};