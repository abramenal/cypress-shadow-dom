# cypress-shadow-dom

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/abramenal/cypress-shadow-dom/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/cypress-shadow-dom.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-shadow-dom) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

Extend Cypress commands with shadow DOM support

This package adds a custom [Cypress][cypress] command that allows you to make an abstraction on how exactly you upload files through you HTML controls and focus on testing the functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [shadowGet](#shadowGet)
  - [shadowFind](#shadowFind)
  - [shadowEq](#shadowEq)
  - [shadowFirst](#shadowFirst)
  - [shadowLast](#shadowLast)
  - [shadowContains](#shadowContains)
  - [shadowTrigger](#shadowTrigger)
  - [shadowClick](#shadowTrigger)
  - [shadowType](#shadowType)
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
cy.shadowGet('todo-list')
  .shadowFind('todo-list-item')
  .its('length')
  .should('eq', 4);
```

See more usage guidelines in [example](./example). It also contains all the available commands in their natural use case.

## API

Here's a set of available commands:

### shadowGet

Querying shadow DOM elements is made with:

```javascript
cy.shadowGet(selector);
```

- `{String} selector` – a single selector which usually represents root shadow DOM elements you want to start with

This command returns `shadowSubject` that is a valid subject to execute any command below.

### shadowFind

Additional querying within found shadow DOM elements:

```javascript
shadowSubject.shadowFind(selector);
```

- `{String} selector` – a single selector which helps to get nested shadow DOM element under the root element

Example:

```javascript
cy.shadowGet('todo-list').shadowFind('todo-form');
```

This command returns `shadowSubject` that is a valid subject to execute any command below.

### shadowEq

To take the nth element from found shadow DOM collection:

```javascript
shadowSubject.shadowEq(index);
```

- `{Number} index` – a positive or negative number within given collection range

### shadowFirst

To take the first element from found shadow DOM collection:

```javascript
shadowSubject.shadowFirst();
```

### shadowLast

To take the last element from found shadow DOM collection:

```javascript
shadowSubject.shadowLast();
```

### shadowContains

To validate some element's text content:

```javascript
shadowSubject.shadowContains(content);
```

- `{String} content` – a string containing any text for lookup

### shadowTrigger

To trigger any event:

```javascript
shadowSubject.shadowTrigger(eventName, eventOptions);
```

- `{String} eventName` – a string containing any text for lookup
- `{Object?} eventOptions` contains:
  - `{Boolean?} log`
  - `{Boolean?} force`
  - `{Boolean?} bubbles`
  - `{Boolean?} cancelable`
  - `{Number?} timeout`
  - `{Boolean?} composed`

### shadowClick

A shorthand to trigger a click event:

```javascript
shadowSubject.shadowClick(eventOptions);
```

- `{Object?} eventOptions` contains:
  - `{Boolean?} log`
  - `{Boolean?} force`
  - `{Boolean?} bubbles`
  - `{Boolean?} cancelable`
  - `{Number?} timeout`
  - `{Boolean?} composed`

### shadowType

Types some text content inside given shadow DOM input control:

```javascript
shadowSubject.shadowType(content);
```

- `{String} content` – a string containing any text

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://tstechnologies.com.vn/"><img src="https://avatars1.githubusercontent.com/u/37669424?v=4" width="100px;" alt="tst"/><br /><sub><b>tst</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/issues?q=author%3Asangmai350" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://joshuadelange.com"><img src="https://avatars3.githubusercontent.com/u/525349?v=4" width="100px;" alt="Joshua de Lange"/><br /><sub><b>Joshua de Lange</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/issues?q=author%3Ajoshuadelange" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT][mit]

[cypress]: https://cypress.io/
[npm]: https://www.npmjs.com/
[mit]: https://opensource.org/licenses/MIT
