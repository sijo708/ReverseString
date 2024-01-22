function getValues() {
    let userMessage = document.getElementById('message').value;

    let reversed = reverseString(userMessage)

    displayMessage(reversed);

}

function reverseString(inputString){
    // turn thestring to array
    let characters = inputString.split('');
    let result = [];

    // loop through the array from te end towards the beginning
    for(let index = characters.length - 1; index >= 0; index = index - 1){
        let letter = characters[index];
        // put each letter into a new array
        result.push(letter);
    }

    // trun the new array back into a string
    let resultAsString = result.join('');

    // return the string
    return resultAsString;
}

function displayMessage(reversedString){
    // put our message in the HTML
    document.getElementById('result').innerHTML = `Your message reversed is: ${reversedString}`;

    document.getElementById('alert').classList.remove('invisible');

}