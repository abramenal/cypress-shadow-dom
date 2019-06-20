# cypress-shadow-dom

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/abramenal/cypress-shadow-dom/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/cypress-shadow-dom.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-shadow-dom) [![All Contributors](https://img.shields.io/badge/all_contributors-21-yellow.svg)](#contributors)

Extend Cypress commands with shadow DOM support

This package adds a custom [Cypress][cypress] command that allows you to make an abstraction on how exactly you upload files through you HTML controls and focus on testing the functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributors](#contributors)
- [License](#license)

## Installation

The package is distributed via [npm][npm] should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev cypress-shadow-dom
```

## Usage

`cypress-shadow-dom` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-shadow-dom';
```

Here is a basic example:

```javascript
cy.document({ log: false })
  .shadowGet('todo-list todo-list-item')
  .its('length')
  .should('eq', 2);
```

See more usage guidelines in [example](./example).

## API

Here's a set of available commands:

### Lookup & traversal

To start querying shadow DOM elements you need to begin a chain with document then executing:

```javascript
cy.document().shadowGet(selector);
```

- `{String} selector` – a string containing specific selectors separated by spaces. It **requires** all the shadowed DOM nodes to be in selector. See more in [example](./example)

To find something specifically within found shadow DOM element:

```javascript
cySubject.shadowFind(selector);
```

- `{String} selector` – a string containing specific selectors separated by spaces. It **requires** all the shadowed DOM nodes to be in selector. See more in [example](./example)

To take the first element from found shadow DOM collection:

```javascript
cySubject.shadowFirst();
```

To take the last element from found shadow DOM collection:

```javascript
cySubject.shadowLast();
```

### Text content validation

To validate some element's text content:

```javascript
cySubhect.shadowContains(content);
```

- `{String} content` – a string containing any text for lookup. See more in [example](./example)

### Working with events

To trigger any event:

```javascript
cySubject.shadowTrigger(eventName, eventOptions);
```

- `{String} eventName` – a string containing any text for lookup. See more in [example](./example)

`{Object?} eventOptions` contains:

- `{Boolean?} log`
- `{Boolean?} force`
- `{Boolean?} bubbles`
- `{Boolean?} cancelable`
- `{Number?} timeout`
- `{Boolean?} composed`

A shorthand to trigger a click event:

```javascript
cySubject.shadowClick(eventOptions);
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

```

```
