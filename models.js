const {Sequelize, Model, DataTypes} = require('sequelize')
const path = require('path')
const sequelize = process.env.NODE_ENV === 'test'
    ? new Sequelize('sqlite::memory:', null, null, {dialect: 'sqlite'})
    : new Sequelize({dialect: 'sqlite', storage: path.join(__dirname, 'data.db')})

// class Film {
//     constructor ({title, image, country, year, synopsis, release, director, mainAct, supportAct}) {
//         this.title = title
//         this.image = image
//         this.country = country
//         this.year = year
//         this.synopsis = synopsis
//         this.release = release
//         this.director = director
//         this.mainAct = mainAct
//         this.supportAct = supportAct
//     }
    
// }

class Film extends Model{}
Film.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    country: DataTypes.STRING,
    year: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    release: DataTypes.STRING,
}, {sequelize : sequelize})

class Castcrew extends Model{}
Castcrew.init({
    director: DataTypes.STRING,
    dirImange: DataTypes.STRING,
    cast1: DataTypes.STRING,
    cast1Image:DataTypes.STRING,
    cast2: DataTypes.STRING,
    cast2Image: DataTypes.STRING,
},{sequelize : sequelize})

Film.hasMany(Castcrew, {as: 'cast_crew'})
Castcrew.belongsTo(Film)

module.exports = {Film, Castcrew, Sequelize}
