

var nOne = [ "", "one ", "two ", "three ", "four ",
    "five ", "six ", "seven ", "eight ",
     "nine ", "ten ", "eleven ", "twelve ",
      "thirteen ", "fourteen ", "fifteen ",
       "sixteen ", "seventeen ", "eighteen ",
        "nineteen " ];

var nTen = [ "", "", "twenty ", "thirty ", "forty ",
"fifty ", "sixty ", "seventy ", "eighty ",
        "ninety " ];

function convertToWords(n, s)
{

    var arr = "";
    if(number > 19)
    {
        arr = nTen[parseInt(number / 10)] + nOne[number % 10];
    }
    else
    {
        arr += one[number];
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

    out += numToWords(parseInt(number / 10000000),
    "crore ");

    out += numToWords(parseInt((number / 100000) % 100),
    "lakh ");

    out += numToWords(parseInt((number / 1000) % 100),
    "thousand ");

    out += numToWords(parseInt((number / 100) % 10),
    "hundred ");

    if (number > 100 && number % 100 > 0) {
        out += "and ";
    }

    out += numToWords(parseInt(number % 100), "");

    return out;
}
