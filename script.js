$(document).ready(function() { //waits for html to load before we run this code
    var quotelist = ["I'll be back", "Bishop, hey man!", "Spunkmeyer where the hell are you?", "Hasta la vista, baby", "That thing bounces like a caddy! I love it!", "Hold my beer, imma try somethin'. ", "I like you Sully, that's why I'm going to kill you last", "Womack!", "Get to the choppa!", "I need ya clothes, ya boots and ya motorcycle", "DILLON!", "Right? WRONG.", "Stick around", "You'll have to excuse my friend, he's DEAD tired", "What you been feeding this thing? Blondes.", "Jesus you we're gonna kill that guy! Of course, I'm a terminator.", "Consider it a divorce", "It's not a tumor!", "Stop cheering me UP!", "I'm detective John Kimble", "Want to be a farmer? Here's a couple of achers", "May I see your invitation please? Sure, here's my invitation", "MAC!!!", "It's TURBO TIME!", "Take your toy back to the carpet...take it BACK!", "Who is your daddy and what does he do?"];
    //create function to output a random number
    function myRandom(myMin, myMax) {
            return Math.floor(
            Math.random() * (myMax - myMin + 1)
            ) + myMin;
    }
    //add click event to mylastattempt div   
    $('#myLastAttempt').click(function() { 

        //get the random number
        k = myRandom(0,quotelist.length-1)

        //get the random quote
        var j = quotelist[k];

        //put quote into html
        $(".wtfMate").html(j);
    });
}); //document ready close


