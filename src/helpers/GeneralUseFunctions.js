export const NormalizeTitle = (string) => {

    string = string.replace('-', ' ');
    string = string.replace('mens', 'men');

    // Split the string into an array of words
    var words = string.split(' ');

    // Iterate over each word in the array
    for (var i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        var firstLetter = words[i].charAt(0).toUpperCase();
        
        // Convert the rest of the word to lowercase
        var restOfWord = words[i].slice(1).toLowerCase();

        // Combine the capitalized first letter and lowercase rest of the word
        words[i] = firstLetter + restOfWord;
    }

    // Join the modified array back into a single string
    var capitalizedStr = words.join(' ');

    return capitalizedStr;
}

export const NormalizeParagraph = (string) => {
    
    string = string.replace(/([A-z0-9]):([A-z0-9])/g, '$1: $2');
    string = string.replace(/ : | :/g, ': ');
    string = string.replace(/ , | ,/g, ', ');

    return string;
}