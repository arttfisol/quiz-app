export default {
  COLOR: {
    BACKGROUND: '#fff4e6',
    ANSWER: {
      IDLE: 'white',
      CORRECT: '#96ceb4',
      INCORRECT: '#ff6f69'
    },
    QUESTION: {
      IDLE: 'white'
    },
    SHADOW: '#171717',
    PROGRESS_BAR: '#6497b1',
    BUTTON: 'white',
    LEADERBOARD: {
      BOARD: 'white',
      NAME: '#f7f7f7',
      SCORE: '#e7eff6'
    }
  },
  TIMER: {
    AFTER_SELECT_ANSWER: 600,
    PROGRESS_BAR: 1000,
    ONE_FADEOUT: 500,
    ZERO_FADEOUT: 200,
    ONE_FADEIN: 600,
    ZERO_FADEIN: 100
  },
  QUESTIONS: [
    {
      question: 'What is TypeScript?',
      answers: [
        { title: 'A superset of JavaScript', isCorrect: true },
        { title: 'A programming language similar to Python', isCorrect: false },
        { title: 'A frontend framework', isCorrect: false },
        { title: 'A database management system', isCorrect: false }
      ]
    },
    {
      question: 'Which keyword is used to declare variables in TypeScript?',
      answers: [
        { title: 'var', isCorrect: false },
        { title: 'let', isCorrect: true },
        { title: 'const', isCorrect: false },
        { title: 'def', isCorrect: false }
      ]
    },
    {
      question: 'What does the `void` keyword represent in TypeScript?',
      answers: [
        { title: 'It indicates an empty object.', isCorrect: false },
        { title: 'It represents an absence of type.', isCorrect: true },
        { title: 'It specifies a function that does not return anything.', isCorrect: false },
        { title: 'It denotes a type of undefined.', isCorrect: false }
      ]
    },
    {
      question: 'How do you define an array type in TypeScript?',
      answers: [
        { title: 'let arr: array;', isCorrect: false },
        { title: 'let arr: Array;', isCorrect: false },
        { title: 'let arr: [];', isCorrect: false },
        { title: 'let arr: Array<elementType>;', isCorrect: true }
      ]
    },
    {
      question: 'What is the purpose of the `interface` keyword in TypeScript?',
      answers: [
        { title: 'To declare a new class', isCorrect: false },
        { title: 'To define a type structure', isCorrect: true },
        { title: 'To import modules', isCorrect: false },
        { title: 'To declare a global variable', isCorrect: false }
      ]
    },
    {
      question: 'Which symbol is used for type assertion in TypeScript?',
      answers: [
        { title: '::', isCorrect: false },
        { title: 'as', isCorrect: true },
        { title: ':', isCorrect: false },
        { title: '<>', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `unknown` type in TypeScript?',
      answers: [
        { title: 'It represents a variable whose type is unknown.', isCorrect: true },
        { title: 'It signifies an unused variable.', isCorrect: false },
        { title: 'It denotes a boolean value.', isCorrect: false },
        { title: 'It specifies a null value.', isCorrect: false }
      ]
    },
    {
      question: 'In TypeScript, how do you define an optional property in an interface?',
      answers: [
        { title: 'propertyName?: type;', isCorrect: true },
        { title: 'propertyName: type | undefined;', isCorrect: false },
        { title: 'propertyName!: type;', isCorrect: false },
        { title: 'propertyName: type?;', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `readonly` modifier in TypeScript?',
      answers: [
        { title: 'It allows modification of a variable.', isCorrect: false },
        { title: 'It specifies that a property can only be assigned once.', isCorrect: true },
        { title: 'It denotes a constant variable.', isCorrect: false },
        { title: 'It signifies a private property.', isCorrect: false }
      ]
    },
    {
      question: 'In TypeScript, what does the `extends` keyword do?',
      answers: [
        { title: 'To implement inheritance between classes', isCorrect: true },
        { title: 'To concatenate strings', isCorrect: false },
        { title: 'To import external modules', isCorrect: false },
        { title: 'To declare type unions', isCorrect: false }
      ]
    },
    {
      question: 'Which TypeScript feature allows you to combine multiple types into one?',
      answers: [
        { title: 'Type casting', isCorrect: false },
        { title: 'Type assertion', isCorrect: false },
        { title: 'Union types', isCorrect: true },
        { title: 'Intersection types', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `in` operator in TypeScript?',
      answers: [
        { title: 'To check if a property exists in an object', isCorrect: true },
        { title: "To iterate over an object's properties", isCorrect: false },
        { title: 'To perform string interpolation', isCorrect: false },
        { title: 'To check if an array contains a certain value', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `private` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: true },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: false },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which TypeScript feature allows you to specify multiple types for a variable?',
      answers: [
        { title: 'Type inference', isCorrect: false },
        { title: 'Union types', isCorrect: true },
        { title: 'Intersection types', isCorrect: false },
        { title: 'Type assertions', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `default` keyword in TypeScript?',
      answers: [
        { title: 'To define a default value for a function parameter', isCorrect: false },
        { title: 'To specify the default export of a module', isCorrect: true },
        { title: 'To handle default case in a switch statement', isCorrect: false },
        { title: 'To declare a default value for a variable', isCorrect: false }
      ]
    },
    {
      question: 'What does the `readonly` modifier do when applied to an array in TypeScript?',
      answers: [
        { title: 'It prevents the array from being modified.', isCorrect: true },
        { title: 'It allows the array to be modified.', isCorrect: false },
        { title: 'It ensures that only the first element of the array can be modified.', isCorrect: false },
        { title: "It allows read-only access to the array's elements.", isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to catch errors in TypeScript?',
      answers: [
        { title: 'try', isCorrect: false },
        { title: 'catch', isCorrect: true },
        { title: 'throw', isCorrect: false },
        { title: 'finally', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `this` keyword in TypeScript?',
      answers: [
        { title: 'To refer to the current instance of a class', isCorrect: true },
        { title: 'To create a new instance of a class', isCorrect: false },
        { title: 'To refer to the parent class', isCorrect: false },
        { title: 'To access static members of a class', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to exit a function and specify a return value in TypeScript?',
      answers: [
        { title: 'return', isCorrect: true },
        { title: 'exit', isCorrect: false },
        { title: 'break', isCorrect: false },
        { title: 'continue', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `--strictNullChecks` flag in TypeScript?',
      answers: [
        { title: 'It enables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It disables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It allows null to be assigned to any variable.', isCorrect: false },
        { title: 'It disallows null and undefined from being assigned to any variable.', isCorrect: true }
      ]
    },
    {
      question: 'What is the purpose of the `in` operator in TypeScript?',
      answers: [
        { title: 'To check if a property exists in an object', isCorrect: true },
        { title: "To iterate over an object's properties", isCorrect: false },
        { title: 'To perform string interpolation', isCorrect: false },
        { title: 'To check if an array contains a certain value', isCorrect: false }
      ]
    },
    {
      question: 'What is the output of `typeof NaN` in TypeScript?',
      answers: [
        { title: '"number"', isCorrect: true },
        { title: '"undefined"', isCorrect: false },
        { title: '"NaN"', isCorrect: false },
        { title: '"string"', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `readonly` modifier in TypeScript?',
      answers: [
        { title: 'It allows modification of a variable.', isCorrect: false },
        { title: 'It specifies that a property can only be assigned once.', isCorrect: true },
        { title: 'It denotes a constant variable.', isCorrect: false },
        { title: 'It signifies a private property.', isCorrect: false }
      ]
    },
    {
      question: 'In TypeScript, how do you define an array?',
      answers: [
        { title: 'let arr: [];', isCorrect: false },
        { title: 'let arr: Array;', isCorrect: false },
        { title: 'let arr: Array<elementType>;', isCorrect: true },
        { title: 'let arr: Array<any>;', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which TypeScript feature allows you to specify multiple types for a variable?',
      answers: [
        { title: 'Type inference', isCorrect: false },
        { title: 'Union types', isCorrect: true },
        { title: 'Intersection types', isCorrect: false },
        { title: 'Type assertions', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `default` keyword in TypeScript?',
      answers: [
        { title: 'To define a default value for a function parameter', isCorrect: false },
        { title: 'To specify the default export of a module', isCorrect: true },
        { title: 'To handle default case in a switch statement', isCorrect: false },
        { title: 'To declare a default value for a variable', isCorrect: false }
      ]
    },
    {
      question: 'What does the `readonly` modifier do when applied to an array in TypeScript?',
      answers: [
        { title: 'It prevents the array from being modified.', isCorrect: true },
        { title: 'It allows the array to be modified.', isCorrect: false },
        { title: 'It ensures that only the first element of the array can be modified.', isCorrect: false },
        { title: "It allows read-only access to the array's elements.", isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to catch errors in TypeScript?',
      answers: [
        { title: 'try', isCorrect: false },
        { title: 'catch', isCorrect: true },
        { title: 'throw', isCorrect: false },
        { title: 'finally', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `this` keyword in TypeScript?',
      answers: [
        { title: 'To refer to the current instance of a class', isCorrect: true },
        { title: 'To create a new instance of a class', isCorrect: false },
        { title: 'To refer to the parent class', isCorrect: false },
        { title: 'To access static members of a class', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to exit a function and specify a return value in TypeScript?',
      answers: [
        { title: 'return', isCorrect: true },
        { title: 'exit', isCorrect: false },
        { title: 'break', isCorrect: false },
        { title: 'continue', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `--strictNullChecks` flag in TypeScript?',
      answers: [
        { title: 'It enables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It disables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It allows null to be assigned to any variable.', isCorrect: false },
        { title: 'It disallows null and undefined from being assigned to any variable.', isCorrect: true }
      ]
    },
    {
      question: 'What is the purpose of the `in` operator in TypeScript?',
      answers: [
        { title: 'To check if a property exists in an object', isCorrect: true },
        { title: "To iterate over an object's properties", isCorrect: false },
        { title: 'To perform string interpolation', isCorrect: false },
        { title: 'To check if an array contains a certain value', isCorrect: false }
      ]
    },
    {
      question: 'What is the output of `typeof NaN` in TypeScript?',
      answers: [
        { title: '"number"', isCorrect: true },
        { title: '"undefined"', isCorrect: false },
        { title: '"NaN"', isCorrect: false },
        { title: '"string"', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `readonly` modifier in TypeScript?',
      answers: [
        { title: 'It allows modification of a variable.', isCorrect: false },
        { title: 'It specifies that a property can only be assigned once.', isCorrect: true },
        { title: 'It denotes a constant variable.', isCorrect: false },
        { title: 'It signifies a private property.', isCorrect: false }
      ]
    },
    {
      question: 'In TypeScript, how do you define an array?',
      answers: [
        { title: 'let arr: [];', isCorrect: false },
        { title: 'let arr: Array;', isCorrect: false },
        { title: 'let arr: Array<elementType>;', isCorrect: true },
        { title: 'let arr: Array<any>;', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which TypeScript feature allows you to specify multiple types for a variable?',
      answers: [
        { title: 'Type inference', isCorrect: false },
        { title: 'Union types', isCorrect: true },
        { title: 'Intersection types', isCorrect: false },
        { title: 'Type assertions', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `default` keyword in TypeScript?',
      answers: [
        { title: 'To define a default value for a function parameter', isCorrect: false },
        { title: 'To specify the default export of a module', isCorrect: true },
        { title: 'To handle default case in a switch statement', isCorrect: false },
        { title: 'To declare a default value for a variable', isCorrect: false }
      ]
    },
    {
      question: 'What does the `readonly` modifier do when applied to an array in TypeScript?',
      answers: [
        { title: 'It prevents the array from being modified.', isCorrect: true },
        { title: 'It allows the array to be modified.', isCorrect: false },
        { title: 'It ensures that only the first element of the array can be modified.', isCorrect: false },
        { title: "It allows read-only access to the array's elements.", isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to catch errors in TypeScript?',
      answers: [
        { title: 'try', isCorrect: false },
        { title: 'catch', isCorrect: true },
        { title: 'throw', isCorrect: false },
        { title: 'finally', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `this` keyword in TypeScript?',
      answers: [
        { title: 'To refer to the current instance of a class', isCorrect: true },
        { title: 'To create a new instance of a class', isCorrect: false },
        { title: 'To refer to the parent class', isCorrect: false },
        { title: 'To access static members of a class', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to exit a function and specify a return value in TypeScript?',
      answers: [
        { title: 'return', isCorrect: true },
        { title: 'exit', isCorrect: false },
        { title: 'break', isCorrect: false },
        { title: 'continue', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `--strictNullChecks` flag in TypeScript?',
      answers: [
        { title: 'It enables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It disables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It allows null to be assigned to any variable.', isCorrect: false },
        { title: 'It disallows null and undefined from being assigned to any variable.', isCorrect: true }
      ]
    },
    {
      question: 'What is the purpose of the `in` operator in TypeScript?',
      answers: [
        { title: 'To check if a property exists in an object', isCorrect: true },
        { title: "To iterate over an object's properties", isCorrect: false },
        { title: 'To perform string interpolation', isCorrect: false },
        { title: 'To check if an array contains a certain value', isCorrect: false }
      ]
    },
    {
      question: 'What is the output of `typeof NaN` in TypeScript?',
      answers: [
        { title: '"number"', isCorrect: true },
        { title: '"undefined"', isCorrect: false },
        { title: '"NaN"', isCorrect: false },
        { title: '"string"', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `readonly` modifier in TypeScript?',
      answers: [
        { title: 'It allows modification of a variable.', isCorrect: false },
        { title: 'It specifies that a property can only be assigned once.', isCorrect: true },
        { title: 'It denotes a constant variable.', isCorrect: false },
        { title: 'It signifies a private property.', isCorrect: false }
      ]
    },
    {
      question: 'In TypeScript, how do you define an array?',
      answers: [
        { title: 'let arr: [];', isCorrect: false },
        { title: 'let arr: Array;', isCorrect: false },
        { title: 'let arr: Array<elementType>;', isCorrect: true },
        { title: 'let arr: Array<any>;', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which TypeScript feature allows you to specify multiple types for a variable?',
      answers: [
        { title: 'Type inference', isCorrect: false },
        { title: 'Union types', isCorrect: true },
        { title: 'Intersection types', isCorrect: false },
        { title: 'Type assertions', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `default` keyword in TypeScript?',
      answers: [
        { title: 'To define a default value for a function parameter', isCorrect: false },
        { title: 'To specify the default export of a module', isCorrect: true },
        { title: 'To handle default case in a switch statement', isCorrect: false },
        { title: 'To declare a default value for a variable', isCorrect: false }
      ]
    },
    {
      question: 'What does the `readonly` modifier do when applied to an array in TypeScript?',
      answers: [
        { title: 'It prevents the array from being modified.', isCorrect: true },
        { title: 'It allows the array to be modified.', isCorrect: false },
        { title: 'It ensures that only the first element of the array can be modified.', isCorrect: false },
        { title: "It allows read-only access to the array's elements.", isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `protected` access modifier in TypeScript?',
      answers: [
        { title: 'To restrict access to a property or method to within its class', isCorrect: false },
        { title: 'To make a property or method accessible from outside its class', isCorrect: false },
        { title: 'To make a property or method accessible from subclasses', isCorrect: true },
        { title: 'To make a property or method accessible globally', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to catch errors in TypeScript?',
      answers: [
        { title: 'try', isCorrect: false },
        { title: 'catch', isCorrect: true },
        { title: 'throw', isCorrect: false },
        { title: 'finally', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `this` keyword in TypeScript?',
      answers: [
        { title: 'To refer to the current instance of a class', isCorrect: true },
        { title: 'To create a new instance of a class', isCorrect: false },
        { title: 'To refer to the parent class', isCorrect: false },
        { title: 'To access static members of a class', isCorrect: false }
      ]
    },
    {
      question: 'Which statement is used to exit a function and specify a return value in TypeScript?',
      answers: [
        { title: 'return', isCorrect: true },
        { title: 'exit', isCorrect: false },
        { title: 'break', isCorrect: false },
        { title: 'continue', isCorrect: false }
      ]
    },
    {
      question: 'What is the purpose of the `--strictNullChecks` flag in TypeScript?',
      answers: [
        { title: 'It enables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It disables strict null checks for optional parameters.', isCorrect: false },
        { title: 'It allows null to be assigned to any variable.', isCorrect: false },
        { title: 'It disallows null and undefined from being assigned to any variable.', isCorrect: true }
      ]
    },
    {
      question: 'What is the purpose of the `in` operator in TypeScript?',
      answers: [
        { title: 'To check if a property exists in an object', isCorrect: true },
        { title: "To iterate over an object's properties", isCorrect: false },
        { title: 'To perform string interpolation', isCorrect: false },
        { title: 'To check if an array contains a certain value', isCorrect: false }
      ]
    },
    {
      question: 'What is the output of `typeof NaN` in TypeScript?',
      answers: [
        { title: '"number"', isCorrect: true },
        { title: '"undefined"', isCorrect: false },
        { title: '"NaN"', isCorrect: false },
        { title: '"string"', isCorrect: false }
      ]
    }
  ]
}
