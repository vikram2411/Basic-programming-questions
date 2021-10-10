function areRotEq (str1, str2) {
    var shift = null;
    for(char of str1){
        if(!shift) shift = str2.indexOf(char);
        else if (shift != str2.indexOf(char)) return false
    }
    return true;
}
