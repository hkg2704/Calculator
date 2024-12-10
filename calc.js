const textbox = document.getElementById('textbox');
const buttons = document.querySelectorAll('button');

let currentInput = ''; 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'ac') {
            currentInput = '';
            textbox.value = '';
        }
        else if (button.id === 'del') {
            currentInput = currentInput.slice(0, -1);
            textbox.value = currentInput;
        }
        else if (button.id === 'eql') {
            try {
                currentInput = eval(currentInput).toString();
                textbox.value = currentInput;
            } catch (err) {
                textbox.value = 'Error';
                currentInput = '';
            }
        }
        else if (['+', '-', '*', '/'].includes(value)) {
    
            if (['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
                
                textbox.value = currentInput;
            } else {
                currentInput += value;
                textbox.value = currentInput;
            }
        }
        
        else {
            currentInput += value;
            textbox.value = currentInput;
        }

    });
});
