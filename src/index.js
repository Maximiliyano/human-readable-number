var nOne = [ "", "one ", "two ", "three ", "four ",
    "five ", "six ", "seven ", "eight ",
     "nine ", "ten ", "eleven ", "twelve ",
      "thirteen ", "fourteen ", "fifteen ",
       "sixteen ", "seventeen ", "eighteen ",
        "nineteen " ];

var nTen = [ "", "", "twenty ", "thirty ", "forty ",
"fifty ", "sixty ", "seventy ", "eighty ",
        "ninety " ];

function convertToWords(number, s)
{

    var arr = "";
    if(number > 19)
    {
        arr = nTen[parseInt(number / 10)] + nOne[number % 10];
    }
    else
    {
        arr += nOne[number];
    }
    if (number != 0) 
    {
        arr += s;
    }

    return arr;
}

module.exports = function toReadable (number) 
{
    var out = "";

    out += convertToWords(parseInt(number / 10000000),
    "crore");

    out += convertToWords(parseInt((number / 100000) % 100),
    "lakh");

    out += convertToWords(parseInt((number / 1000) % 100),
    "thousand");

    out += convertToWords(parseInt((number / 100) % 10),
    "hundred");

    out += convertToWords(parseInt(number % 100), "");

    return out;
}