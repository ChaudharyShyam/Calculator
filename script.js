document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const historyDisplay = document.getElementById('history');
    const buttons = document.getElementById('buttons');
    const buttonSound = document.getElementById('buttonSound');
    let history = '';

    buttons.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const buttonText = e.target.textContent;
            buttonSound.currentTime = 0;
            buttonSound.play();

            if (buttonText === 'C') {
                display.textContent = '0';
                history = '';
                historyDisplay.textContent = ''; 
            } else if (buttonText === '=') {
                try {
                    const result = eval(display.textContent);
                    history = `${display.textContent} = ${result}\n${history}`;
                    historyDisplay.textContent = history;
                    display.textContent = result;
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else if (buttonText === 'Back') {
                if (display.textContent.length > 1) {
                    display.textContent = display.textContent.slice(0, -1);
                } else {
                    display.textContent = '0';
                }
            } else {
                display.textContent =
                    display.textContent === '0' ? buttonText : display.textContent + buttonText;
            }
        }
    });
});