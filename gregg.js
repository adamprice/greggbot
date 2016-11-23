var gregg_response = ["I love your little tongue balls.",
                      "That's the Jurassic Park of scotch eggs.",
                      "It's like knit your own yoghurt.",
                      "Oh yeah, baby! Yeah, baby! Call me Mr. Wafer.",
                      "That's like a hug from a great big mushroom!",
                      "Mmmm, get amongst it!",
                      "We've got ourselves a broth off!",
                      "Are you into open water swimming?",
                      "It's not burnt, it's just enthusiastically crisp.",
                      "Everything is moist.",
                      "I cannot wait to get my lips and my spoon round Dale's dessert",
                      "The whole thing is a slippery loveliness!",
                      "That's like a chocolate tide crashing onto a beach.",
                      "This is sending a text straight to my belly, and it's going: EAT ME!",
                      "Looks to me like a dissected brain!",
                      "It's just an Aladdin's cave of pudding delights!",
                      "It looks infinitely munchable.",
                      "You've got so much booze in there it's making you look attractive.",
                      "It's like a sun tanned zebra.",
                      "If you tell a chap he's having a sticky toffee, you are duty bound to provide such.",
                      "I love a bit of goo.",
                      "Buttery biscuit base.",
                      "Adam, what the hell is audiences data?"]

var http = require('http');

function handleRequest(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
      "response_type": "in_channel",
      "text": gregg_response[Math.floor(Math.random() * gregg_response.length)]
    }));
}

var server = http.createServer(handleRequest);

server.listen(8585, function() {
    console.log("Greggbot has started.");
});
