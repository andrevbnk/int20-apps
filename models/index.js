const User = require('./User');
const Advert = require('./Advert');
const Photo = require('./Photo');

User.hasMany(Advert);

Advert.belongsToMany(User, {
    foreignKey: {
        name: 'user_id'
    }
});

Advert.hasMany(Photo);
Photo.belongsToMany(Advert, {
    foreignKey: {
        name: 'advert_id'
    }
});

module.exports = {
    User,
    Advert,
    Photo
};