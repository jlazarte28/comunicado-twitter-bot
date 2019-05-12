console.log("Bot is booting up...");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//const madridUser = []; //Get Madrid Twitter ID




// var stream = T.stream('user');

// stream.on('tweet', tweetEvent)

// function tweetEvent(eventMsg) {
//     console.log(eventMsg);

// }

// let retweetComunicadoOficial = async function() {
//     try {
//       const { data } = await Twitter.get("users/show", {
//         user_id: madridUser
//       });
//       const status = data.status;

//       const

//       // make sure tweet isn't in reply to another user
//     //   if (status.in_reply_to_status_id == null) {
//     //     const response = await Twitter.post("statuses/retweet/:id", {
//     //       id: status.id_str
//     //     });
//     //     if (response) {
//     //       console.log("Successfully retweeted");
//     //     }
//     //   }
//     } catch (err) {
//       // catch all log if the search/retweet could not be executed
//       console.error("Err:", err);
//     }
//   };
  
//   retweetComunicadoOficial();

//   setInterval(function() {
//     http.get("https://twitterbot-retweet.herokuapp.com/");
//   }, 86400000); // checks app every 24 hours


// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
//   })