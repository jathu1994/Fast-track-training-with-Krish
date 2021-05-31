function reversNumber(number) {
    let reversedNumber = 0;
    while(number > 0)

    {
        //modulus by 10 will give same last digit
        //multiply the result by 10 will make position correct for next addition
        reversedNumber = reversedNumber * 10 + number % 10;
        //division and floring will result in removing the last degit
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

module.exports={
    reversNumber
}