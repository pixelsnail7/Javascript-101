const container = document.getElementById('container');
const variableInput = document.getElementById('variableInput');

const keyWords = new Set([
  // Current keywords
  "break", "case", "catch", "class", "const", "continue", "debugger",
  "default", "delete", "do", "else", "export", "extends", "finally",
  "for", "function", "if", "import", "in", "instanceof", "new",
  "return", "super", "switch", "this", "throw", "try", "typeof",
  "var", "void", "while", "with", "yield", "await", "static",

  // Future reserved keywords
  "enum", "implements", "interface", "let", "package",
  "private", "protected", "public",

  // Strict mode reserved keywords
  "arguments", "eval"
]);


function isValid(name = "") {
    // check valid input 
    if (typeof name !== 'string' && name.length < 0 && name.length > 1024)  return false;
    // check valid variable name
    if (/[ \t]/.test(name)) return false; // contains space or tab
    if (/^[0-9]/.test(name)) return false; // starts with number
    if (/[^a-zA-Z0-9_$]/.test(name)) return false; // contains special character
    if (keyWords.has(name)) return false;
    return true;
}

function checkVariableValidity() {
    const value = variableInput.value;
    if (isValid(value)) {
        container.style.boxShadow = "2px 2px 8px 0 #4CAF5070";
        variableInput.style.border = '4px solid #4CAF50';
    } else {
        container.style.boxShadow = "2px 2px 8px 0 #f4433670";
        variableInput.style.border = '4px solid #f44336';
    }
}
checkVariableValidity(); // initial check

variableInput.addEventListener('input', checkVariableValidity);