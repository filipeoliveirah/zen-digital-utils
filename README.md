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
# Using npm
npm install zen-digital-utils

# Using yarn
yarn add zen-digital-utils

# Using pnpm
pnpm add zen-digital-utils
```

## Usage

## Brazilian States
## Access standardized data for all Brazilian states with type safety.

```javascript
import { brazilianStates } from 'zen-digital-utils'

// Type definition
interface BrazilianState {
  value: string;  // Two-letter state code
  label: string;  // Full state name
}

// Access all Brazilian states
console.log(brazilianStates)
// [{ value: 'AC', label: 'Acre' }, { value: 'AL', label: 'Alagoas' }, ...]

// Find a specific state
const saoPaulo = brazilianStates.find(state => state.value === 'SP');

// Use in a select component
function StateSelector() {
  return (
    <select>
      {brazilianStates.map(state => (
        <option key={state.value} value={state.value}>{state.label}</option>
      ))}
    </select>
  )
}
```


## Format text Utilities
## Utilities to format and manipulate text.

```javascript
import { capitalize, capitalizeText, slugify, truncate, formatTextOnly } from 'zen-digital-utils'

// Capitalize first letter
capitalize('hello world') // 'Hello world'

// Capitalize each word
capitalizeText('hello world') // 'Hello World'

// Convert to URL-friendly slug
slugify('Hello World!') // 'hello-world'

// Truncate text with ellipsis
truncate('This is a long text', 10) // 'This is a...'

// Remove all non-letter characters
formatTextOnly('Hello123') // 'Hello'
```


## Date and Time
## Utilities to work with dates and times.

```javascript
import { formatDate, getDaysBetween, isWeekend, formattedDate } from 'zen-digital-utils'

// Format date with pattern
formatDate(new Date(), 'YYYY-MM-DD') // '2025-03-25'

// Format date string from YYYY-MM-DD to DD/MM/YYYY
formattedDate('2025-03-25') // '25/03/2025'

// Get number of days between dates
const date1 = new Date('2025-03-20');
const date2 = new Date('2025-03-25');
getDaysBetween(date1, date2) // 5

// Check if date is weekend
isWeekend(new Date('2025-03-29')) // true (it's a Saturday)
```


## Object Helpers

```javascript
import { deepMerge, pick, omit } from 'zen-digital-utils'

// Deep merge objects
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
deepMerge(obj1, obj2)
// { a: 1, b: { c: 2, d: 3 }, e: 4 }

// Pick specific properties
const user = { id: 1, name: 'John', password: 'secret' };
pick(user, ['id', 'name']) 
// { id: 1, name: 'John' }

// Omit specific properties
omit(user, ['password']) 
// { id: 1, name: 'John' }
```

## Array Utilities

```javascript
import { chunk, unique, sortBy, groupBy, flatten, intersection, difference, shuffle, partition } from 'zen-digital-utils'

// Split array into chunks
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]

// Remove duplicates
unique([1, 2, 2, 3]) // [1, 2, 3]

// Sort array of objects by property
const users = [
  { id: 1, name: 'Zoe' },
  { id: 2, name: 'Adam' }
];
sortBy(users, 'name') // [{ id: 2, name: 'Adam' }, { id: 1, name: 'Zoe' }]

// Group array of objects by property
const people = [
  { age: 30, name: 'Alice' },
  { age: 25, name: 'Bob' },
  { age: 30, name: 'Charlie' }
];
groupBy(people, 'age') 
// { '25': [{ age: 25, name: 'Bob' }], '30': [{ age: 30, name: 'Alice' }, { age: 30, name: 'Charlie' }] }

// Flatten a nested array structure
flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]

// Find common elements across arrays
intersection([1, 2, 3], [2, 3, 4], [2, 3, 5]) // [2, 3]

// Get elements from first array not in second array
difference([1, 2, 3, 4], [2, 4]) // [1, 3]

// Randomly shuffle array elements
shuffle([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)

// Divide array into two groups based on a condition
const numbers = [1, 2, 3, 4, 5];
partition(numbers, num => num % 2 === 0) // [[2, 4], [1, 3, 5]]
```

## Currency Formatters
## Utilities to format and handle currency values.

```javascript
import { 
    formatCurrency, 
    formatWithCurrencySymbol, 
    formatInternationalCurrency,
    formatCurrencyWithoutSymbol,
    formatAccountingCurrency,
    toCents 
} from 'zen-digital-utils'

// Basic Brazilian currency formatting
formatCurrency(1234.56) // 'R$ 1.234,56'

// Custom currency symbol
formatWithCurrencySymbol(1234.56, '$') // '$ 1.234,56'
formatWithCurrencySymbol(1234.56, '€') // '€ 1.234,56'

// International currency formatting
formatInternationalCurrency(1234.56, 'en-US', 'USD') // '$1,234.56'
formatInternationalCurrency(1234.56, 'de-DE', 'EUR') // '1.234,56 €'
formatInternationalCurrency(1234.56, 'ja-JP', 'JPY') // '￥1,235'

// Format without currency symbol
formatCurrencyWithoutSymbol(1234.56) // '1.234,56'

// Accounting format (negative values in parentheses)
formatAccountingCurrency(1234.56)  // 'R$ 1.234,56'
formatAccountingCurrency(-1234.56) // '(R$ 1.234,56)'

// Convert to cents
toCents('R$ 1.234,56') // 123456
toCents(1234.56)       // 123456
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact us at support@zendigital.app
