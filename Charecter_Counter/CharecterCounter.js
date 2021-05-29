function countCharecters(sentance) {

    //it matches all spaces and replace is with empty string
    var modifiedSentance = sentance.replace(/[ ()]/g, "");

    //it matches all spaces and special charecters and replace is with empty string
    // var modifiedSentance = sentance.replace(/[^a-zA-Z()]/g, ""); 

    console.log(modifiedSentance);

    var charecterCounter = new Map()
    // checks charester already present or not in the map and increment value or create new key value pairs accordingly
    for (var i = 0; i < modifiedSentance.length; i++) {

        if (charecterCounter.has(modifiedSentance.charAt(i))) {
            var count = charecterCounter.get(modifiedSentance.charAt(i));

            count++;

            charecterCounter.set(modifiedSentance.charAt(i), count);
        } else {

            charecterCounter.set(modifiedSentance.charAt(i), 1);
        }


    }

    return charecterCounter;

}

module.exports={
    countCharecters

}

