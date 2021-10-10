const str = "The quick brown fox jumps over a lazy dog"; 
const vowels = str.match(/[aeiou]/gi); 
const consonants = str.match(/[^aeiou]/gi);   
vowels.concat([''],consonants).forEach(k => { console.log(k); } );
