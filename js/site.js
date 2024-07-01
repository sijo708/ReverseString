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
        input: escapeHTML(userMessage),
        reversedInput: escapeHTML(reversed)
    };

    displayMessage(stringObject);
}

function reverseString(inputString) {
    let result = '';

    // loop through the string from the end towards the beginning
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

function escapeHTML(inputString) {
    return inputString.replace(/[&<>'"]/g, function(match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case "'": return '&#39;';
            case '"': return '&quot;';
        }
    });
}
