function countCharectersAndSpace(sentance) {

    var modifiedSentance = sentance.replace(/[^a-zA-Z]/g, ""); 

    // var modifiedSentance = sentance; 


    var charecterCounter = new Map();
    // checks charester already present or not in the map and increment value or create new key value pairs accordingly
    for (var i = 0; i < modifiedSentance.length; i++) {

        if (modifiedSentance.charAt(i) == " ") {
            var spaceCount = 0;
            while (modifiedSentance.charAt(i) == " ") {
                spaceCount++;
                i++;
            }
            if (charecterCounter.has("sp" + spaceCount)) {
                var count = charecterCounter.get("sp" + spaceCount);
                count++;
                charecterCounter.set("sp" + spaceCount, count);
            } else {
                charecterCounter.set("sp" + spaceCount, 1);
            }
            if (i == modifiedSentance.length) {
                break;
            }
        }
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

module.exports = {
    countCharectersAndSpace

}

