// Example targets for TestDriven for VS Code

function functionDeclaration()
{
    console.log("I am a function declaration");
}

const functionExpression = function()
{
    console.log("I am a function expression");
}

const arrowFunction = () =>
{
    console.log("I am an arrow function");
}

const newFunction = new Function(
    "console.log('I am a new function');"
);

function functionWithReturn()
{
    return 777;
}
