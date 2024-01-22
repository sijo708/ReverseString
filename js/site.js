function getValues() {
    let userMessage = document.getElementById('message').value;

    if (userMessage.length < 2) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Woops!',
            text: 'Please enter at least 2 characters to reverse'
        });

        return;
    }

    let reversed = reverseString(userMessage);

    let stringObject = {
        input: userMessage,
        reversedInput: reversed
    };

    displayMessage(stringObject);
}

function reverseString(inputString) {
    let result = '';

    // loop through the array from the end towards the beginning
    for (let index = inputString.length - 1; index >= 0; index--) {
        result += inputString[index];
    }

    return result;
}

function displayMessage(stringObject) {
    // put our message in the HTML
    document.getElementById('result').innerHTML =
        `You entered: ${stringObject.input}. Your message reversed is: ${stringObject.reversedInput}`;

    document.getElementById('alert').classList.remove('invisible');
}
