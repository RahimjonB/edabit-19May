//1. Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(num) {
	let letter = 'r';
	return "Bu" + letter.repeat(num)+"p";
}

//2. Create a function that will put the first argument, a character, between every word in the second argument, a string.
function add(char, str) {
	return str.replace(/\s/g, char);
}

//3. Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
	return str.split('').join(' ');
}

//4. Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, n) {
	let mass= str.split("");
	let lc = mass[mass.length-1];
	let repit = lc.repeat(n);
	mass[mass.length-1] = repit;
	return mass.join("");
}

//5. Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.
function createID(firstname, lastname) {
    return firstname.charAt(0).toLowerCase() + lastname.substring(0, 1).toUpperCase()+ lastname.substring(1, 3).toLowerCase();
}

//6. Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.
function height(side) {
    const heightInMillimeters = ((side * Math.sqrt(3) * 10) / 2).toFixed(1);
    return `${heightInMillimeters} mm`;
  }

//7. Create a class that takes the following four arguments for a particular football player:
// name
// age
// height
// weight
class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
  
    getAge() {
      return `${this.name} is age ${this.age}`;
    }
  
    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }
  
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

//8. Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.
function isBoiling(temp) {
    let value = parseInt(temp.slice(0, -1)); 
    let unit = temp.slice(-1); 
    if (unit === 'F') {
      value = (value - 32) * 5 / 9;
    }
    return value >= 100; 
  }

//9. A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.
function toScottishScreaming(str) {
    str = str.toUpperCase(); 
    str = str.replace(/[AEIOU]/gi, 'E');
    return str;
  }

//10. Create a function that flips M's to W's (all uppercase).
function wumbo(str) {
    return str.replace(/M/g, 'W');
  }

//11. Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
function matchLastItem(arr) {
    let lastItem = arr[arr.length - 1];
    let concatenated = arr.slice(0, arr.length - 1).join('');
    return lastItem === concatenated;
  }

//12. Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
function reverseAndNot(i) {
    let reversed = i.toString().split('').reverse().join('');
    let concatenated = reversed + i.toString();
    return parseInt(concatenated);
  }

//13. Given a string of numbers separated by a comma and space, return the product of the numbers.
function multiplyNums(nums) {
    let numbers = nums.split(', ').map(parseFloat);
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }

//14. Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
function counterpartCharCode(char) {
    let code = char.charCodeAt(0);
    if (!isNaN(parseInt(char))) {
      return code;
    }
    if (char === char.toUpperCase()) {
      return char.toLowerCase().charCodeAt(0);
    }
    return char.toUpperCase().charCodeAt(0);
  }

//15. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
function makeTitle(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0).toUpperCase();
      words[i] = firstChar + words[i].slice(1);
    }
    return words.join(' ');
  }

//16. An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
function isIsogram(str) {
    str = str.toLowerCase();
    let letterCount = {};
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (letterCount[char]) {
        return false;
      }
      letterCount[char] = true;
    }
    return true;
  }

//17. Create a function that takes a word and returns true if the word has two consecutive identical letters.
function doubleLetters(word) {
    for (let i = 0; i < word.length - 1; i++) {
      if (word.charAt(i) === word.charAt(i + 1)) {
        return true;}}
    return false;
  }

//18. Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
function firstPlace(road) {
    if (road.length === 0) {
      return "No road available";
    }
    let cars = road.match(/[A-Z]/g);
    if (cars === null || cars.length === 0) {
      return "No car available";
    }
    return cars[cars.length - 1];
  }

//19. Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    let modified = str.replace(/[abc]/gi, '');
    if (modified === str) {
      return null;
    }
    return modified;
  }

//20. Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
function maskify(str) {
    let maskstr = "#".repeat(Math.max(str.length - 4, 0)) + str.slice(-4);
    return maskstr;
  }
