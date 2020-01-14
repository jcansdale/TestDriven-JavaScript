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

async function asyncFunction() {
    for(let x = 0; x < 10; x++) {
        console.log(x);
        await sleep(100);
    }
}

async function asyncFunctionWithReturn() {
    await sleep(2000);
    return "async return";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}