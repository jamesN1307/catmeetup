const User = require("./User");
const Cat = require("./Cat");
const Event = require("./Event");

User.hasMany(Cat);
Cat.belongsTo(User)
User.hasMany(Event);
Event.belongsTo(User)


module.exports = {
    User,
    Cat,
    Event
}