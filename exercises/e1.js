// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.

/**
 * ====================================================
 * Create a function to work as follows:
 * The function name is 'logMessage' strictly.
 * The function logs a message in the console.
 * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
 */

const logMessage = function () {
  console.log("Hello, World!");
};

logMessage();

/**
 * =============================================================
 * Create a function that works as follows:
 * The function name is 'logMyMessage' strictly.
 * The function logs a specific message in the console.
 * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
 */

const logMyMessage = function (m) {
  console.log(m);
};

let message = "I logged my first message!";

logMyMessage(message);

/**
 * ===============================================================
 * Create a  function that works as follows:
 * The function name is 'logMessageWithMyName' strictly.
 * The function logs a message of 'My name is <name>!'.
 * The name is a string value passed as an argument
 * logMessageWithMyName('Andrey') => 'My name is Andrey!'
 */

const logMessageWithMyName = function (n) {
  console.log("My name is " + n + "!");
};

let name = "Andrey";

logMessageWithMyName(name);

/**
 * ==============================================================
 * Create a function that works as follows:
 * the function name is 'logMyInfo' strictly.
 * The function of logs a message of 'My name is <name>, I am <age> years old!'.
 * The name is a string value passed as an argument.
 * The age is a number value passed as an argument.
 * logMyInfo('Andrey', 18) => 'My name is Andrey. I am 18 years old!'
 */

const logMyInfo = function (n, a) {
  console.log("My name is " + n + ". I am " + a + " years old!");
};

let age = 18;

logMyInfo(name, age);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyData: logMyInfo || undefined,
};

export { f };
