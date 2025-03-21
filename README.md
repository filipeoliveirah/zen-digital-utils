# Zen Utils

Zen Utils is a collection of utility functions to simplify and enhance your development workflow. This project aims to provide reusable and efficient utilities for common tasks.

## Features

- **String Manipulation**: Functions for common string operations.
- **Array Utilities**: Methods to handle array transformations and operations.
- **Date and Time**: Utilities to work with dates and times.
- **Object Helpers**: Functions to manipulate and query objects.

## Installation

To install Zen Utils, use npm:

```bash
npm install zen-utils

```

## Public changes on npm
```bash
pnpm publish --access public
```

## Usage

Here is an example of how to use Zen Utils in your project:

```javascript
const { capitalize, flattenArray } = require('zen-utils');

// Example usage
const str = capitalize('hello world');
const flatArray = flattenArray([1, [2, 3], [4, [5]]]);

console.log(str); // Output: Hello world
console.log(flatArray); // Output: [1, 2, 3, 4, 5]
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact us at support@zendigital.app
