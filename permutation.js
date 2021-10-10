function permut(string) {

    if (string.length < 2) return string;
    
    var permutations = [];

    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        console.log(`char`, char);

        // skip duplicates
        if (string.indexOf(char) !== i) continue;

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
        
        console.log(`remaining string:`, remainingString);

        for (var subPermutation of permut(remainingString)) {
          permutations.push(char + subPermutation)
        }
    }
    console.log(permutations);
    return permutations;
}

var myString = "121";
permutations = permut(myString);
