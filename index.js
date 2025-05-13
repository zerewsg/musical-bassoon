

// ссылка с первым заданием не открывается




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ошибка: деление на ноль!";
    }
    return a / b;
}

function calculator() {
    let operation = prompt("Выберите операцию:\n1. Сложение (+)\n2. Вычитание (-)\n3. Умножение (*)\n4. Деление (/)");
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let result;

    switch (operation) {
        case "1":
        case "+":
            result = add(num1, num2);
            break;
        case "2":
        case "-":
            result = subtract(num1, num2);
            break;
        case "3":
        case "*":
            result = multiply(num1, num2);
            break;
        case "4":
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Неверная операция!";
    }

    alert("Результат: " + result);
}

calculator();