const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



function decimalToRomanNumeral() {
    let num = parseInt(input.value);
    


    if (isNaN(num)) {
    
        output.textContent= "Please enter a valid number";
        output.style.display = "block";
        return;
    } else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.style.display = "block";
        return;
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.style.display = "block";
        return;
    }

    output.textContent = "";

    const map = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    

    for (const [value, symbol] of map) {
        while (num >= value) {
            output.textContent += symbol;
            num -= value;
        }
        if (num === 0) break;
    }

    output.style.display = "block";
    output.textContent;
    
    
}

convertBtn.addEventListener("click", decimalToRomanNumeral);
