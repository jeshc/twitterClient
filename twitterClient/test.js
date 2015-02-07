var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'yI9BGnbzED9wCCwhKAMg6hvq7',
  consumer_secret: 'tvktoSRkTo7tLZvKikkd3twFEMMtwUa3zl89Q0LnDp1aM3e9zY',
  access_token_key: '107723649-ZglD5kVOGrSvjHwtXyqP5WGK6yP065XW40dUxFfZ',
  access_token_secret: '6i3pGABtfq5ra4B6XunjRkeRNhO6kc2hKkcV4Q831Iv2Y'
});


client.get('favorites/list', function(error, params, response){

    if(error) throw error;

    console.log(params);  // The favorites.

    //console.log(response);  // Raw response object.
    var tweet = JSON.parse(response);
    console.log('Nombre:'+tweet.name);

});

