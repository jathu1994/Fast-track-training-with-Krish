function checkAnagram(name1, name2) {

    if (name1.length == name2.length) {

        //converting strings to char array and shorting alphabatically
        const name1Arr = Array.from(name1);
        const name2Arr = Array.from(name2);

        name1Arr.sort();
        name2Arr.sort();

        //iterating bith array and checking for any mismatch
        for (i = 0; i < name1Arr.length; i++) {

            if (name1Arr[i] != name2Arr[i]) {
                return "these words are not anagram";
            }

        }
        return "these words are anagram....";

    }
    else {
        return "these words are not anagram";
    }

}

console.log(checkAnagram("hearrt", "eartrh"));