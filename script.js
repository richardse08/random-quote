$(document).ready(function() { // Waits for html to load before we run this code
    
    
    
    // Initialize quote list
    var quotelist = ["I'll be back", "Hasta la vista, baby", "Get to the choppa!", "I need ya clothes, ya boots and ya motorcycle", "DILLON!", "Right? Wrong.", "Stick around", "You'll have to excuse my friend, he's dead tired", "Jesus you we're gonna kill that guy! Of course, I'm a terminator.", "Consider it a divorce", "It's not a tumor!", "Stop cheering me UP!", "I'm detective John Kimble", "Want to be a farmer? Here's a couple of achers", "May I see your invitation please? Sure, here's my invitation", "Mac!!!", "It's Turbo Time!", "Take your toy back to the carpet...take it BACK!", "Who is your daddy and what does he do?"];
    
    var randPosition = [];
    var randQuote = [];
    
    // Create function to create random number
    function randNum(myMin, myMax) {
            return Math.floor(
            Math.random() * (myMax - myMin + 1)
            ) + myMin;
    }
    
    // Add click event to quote button 
    $('#quoteButton').click(function() {
        
        // Get the random number
        randPosition = randNum(0, quotelist.length-1);
        
        // Get the random quote
        var randQuote = quotelist[randPosition];

        // Put quote into html
        $("#quoteText").html(randQuote);
        
    });
    
    
    
    
}); // Document ready close


