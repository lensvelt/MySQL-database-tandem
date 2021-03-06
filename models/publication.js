var bookshelf = require('../config.js');
require('./user.js');
require('./article.js');

var Publication = bookshelf.Model.extend({
  tableName: 'publications',

  // a (custom) publication belongs to one user
  // user: function() {
  //   return this.belongsTo('User');
  // },

  // a publication has many articles
  articles: function() {
    return this.hasMany('Article');
  }
});

module.exports = bookshelf.model('Publication', Publication);
