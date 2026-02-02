//Example 1
let input="hello world"
let words=input.split(" ");
let lastWord=words[words.length-1];
console.log("length of lastword = "+lastWord.length)

//Example 2

let s = " fly me to the moon "
let words2=s.trim().split(" ")
let lastWord2=words2[words2.length-1]
console.log("length of lastword2 = "+lastWord2.length)

//Example 3
console.log("Lets check if the words are anagrams");
function anagramCheck(word1,word2){
    
word1=word1.replace(/\s/g,"").toLowerCase();
word2=word2.replace(/\s/g,"").toLowerCase();

if(word1.length !==word2.length){
    return false;
}
let sorted1=word1.split("").sort().join("");
let sorted2=word2.split("").sort().join("");

return sorted1==sorted2;
}
console.log(anagramCheck("listen","silent"));