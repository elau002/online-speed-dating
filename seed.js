var db = require('./App/Database/config.js');
var user = require('./App/Database/models/userModel.js');

db.collections.users.drop( function() {
  console.log('collection was dropped');
});



for (var i = 0; i < 5; i++) { 

  user.create({username: i, password: i, userinfo: 'a', name: 'b', age: i, location: 'c'}, function(err) {
    if (err) { console.error(err); }
  });
}

