let tasks = [];

function openTaskManager() {
    const task = prompt("Enter a new task");
    if (task) {
        tasks.push(task); // fixed this line
        displayTasks();
    }
}

function displayTasks() {
    const output = document.getElementById("output");
    output.innerHTML = "<h3>Tasks:</h3>";
    tasks.forEach((t, i) => {
        output.innerHTML += `i + 1.{t}<br>`;
    });
}

function openCalculator() {
    const num1 = parseFloat(prompt("Enter first number: "));
    const op = prompt("Enter operator (+, -, *, /): ");
    const num2 = parseFloat(prompt("Enter second number: "));

    let result;
    switch (op) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Error : Division by zero"; break;
        default: result = "Invalid operator";
    }

    document.getElementById("output").innerHTML = `<h3>Result:</h3>${result}`;
}

function clearScreen() {
    document.getElementById("output").innerHTML = "";
}
