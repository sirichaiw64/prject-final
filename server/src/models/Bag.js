module.exports = (sequelize, DataTypes) => {
    const Bag = sequelize.define('Bag', {
        brand: DataTypes.STRING,
        color: DataTypes.STRING,
        price: DataTypes.INTEGER,
        type: DataTypes.STRING,
        image: DataTypes.STRING // รูปภาพ
    });
    return Bag;
}
