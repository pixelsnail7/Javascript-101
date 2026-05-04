class Display {
    static display = document.getElementById('display');

    render(value) {
        Display.display.textContent = value;
    }

    backspace() {
        Display.display.textContent = Display.display.textContent.slice(0, -1);
    }

    clear() {
        Display.display.textContent = '';
    }
}

const display = new Display();

function calculate() {
    try {
        return eval(Display.display.textContent);
    }
    catch (error) {
        return 'Error';
    }
}

const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.id === 'clearBtn') {
            display.clear();
        } else if (e.target.id === 'backspaceBtn') {
            display.backspace();
        } else if (e.target.id === 'equalBtn') {
            display.render(calculate());
        } else {
            display.render(Display.display.textContent + e.target.dataset.value);
        }
    }
});