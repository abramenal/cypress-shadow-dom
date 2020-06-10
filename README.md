# (deprecated) cypress-shadow-dom

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/abramenal/cypress-shadow-dom/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/cypress-shadow-dom.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-shadow-dom) [![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

Extend Cypress commands with shadow DOM support

This package adds a custom [Cypress][cypress] command that allows you to make an abstraction on how exactly you upload files through you HTML controls and focus on testing the functionality.

Project reached its dead end because of [recent feature introduced by @43081j][https://github.com/cypress-io/cypress/pull/7469]
(and reference issue [cypress/issues/144][https://github.com/cypress-io/cypress/issues/144]).

Please consider using this experimental built-in feature as well as submitting issues and code contributions there.

Warmest thanks for all the contributors that helped this project evolve!

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
cy.shadowGet(selector, options);
```

- `{String} selector` – a single selector which usually represents root shadow DOM elements you want to start with

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

This command returns `shadowSubject` that is a valid subject to execute any command below.

### shadowFind

Additional querying within found shadow DOM elements:

```javascript
shadowSubject.shadowFind(selector, options);
```

- `{String} selector` – a single selector which helps to get nested shadow DOM element under the root element

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

Example:

```javascript
cy.shadowGet('todo-list').shadowFind('todo-form');
```

This command returns `shadowSubject` that is a valid subject to execute any command below.

In order to set a custom timeout for dynamically loaded elements that appear later than 4 seconds after render, use custom timeout:

```javascript
cy.shadowGet('todo-list').shadowFind('todo-form', { timeout: 8500 });
```

### shadowEq

To take the nth element from found shadow DOM collection:

```javascript
shadowSubject.shadowEq(index, options);
```

- `{Number} index` – a positive or negative number within given collection range

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

### shadowFirst

To take the first element from found shadow DOM collection:

```javascript
shadowSubject.shadowFirst(options);
```

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

So, simply:

```javascript
cy.shadowGet('todo-list')
  .shadowFind('todo-form')
  .shadowFirst();
```

### shadowLast

To take the last element from found shadow DOM collection:

```javascript
shadowSubject.shadowLast(options);
```

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

### shadowContains

To validate some element's text content:

```javascript
shadowSubject.shadowContains(content, options);
```

- `{String} content` – a string containing any text for lookup

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} timeout` – (optional) time, in milliseconds, to wait until most DOM based commands are considered timed out (defaults to 4000)

### shadowTrigger

To trigger any event:

```javascript
shadowSubject.shadowTrigger(eventName, options);
```

- `{String} eventName` – a string containing any text for lookup

- `{Object?} options` – (optional) contains following properties:

  - `{Boolean?} force`
  - `{Boolean?} bubbles`
  - `{Boolean?} cancelable`
  - `{Boolean?} composed`

### shadowClick

A shorthand to trigger a click event:

```javascript
shadowSubject.shadowClick(options);
```

- `{Object?} options` – (optional) contains following properties:

  - `{Boolean?} force`
  - `{Boolean?} bubbles`
  - `{Boolean?} cancelable`
  - `{Boolean?} composed`

### shadowType

Types some text content inside given shadow DOM input control:

```javascript
shadowSubject.shadowType(content, options);
```

- `{String} content` – a string containing any text

- `{Object?} options` – (optional) contains following properties:

  - `{Number?} delay` – (optional) time, in milliseconds, between adding each letter/char (defaults to 10)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tstechnologies.com.vn/"><img src="https://avatars1.githubusercontent.com/u/37669424?v=4" width="100px;" alt=""/><br /><sub><b>tst</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/issues?q=author%3Asangmai350" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://joshuadelange.com"><img src="https://avatars3.githubusercontent.com/u/525349?v=4" width="100px;" alt=""/><br /><sub><b>Joshua de Lange</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/issues?q=author%3Ajoshuadelange" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/culas"><img src="https://avatars0.githubusercontent.com/u/8446762?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Schnüriger</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/commits?author=culas" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/mandric"><img src="https://avatars0.githubusercontent.com/u/25641?v=4" width="100px;" alt=""/><br /><sub><b>Milan Andric</b></sub></a><br /><a href="https://github.com/abramenal/cypress-shadow-dom/commits?author=mandric" title="Documentation">📖</a> <a href="#ideas-mandric" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/DesignByOnyx"><img src="https://avatars0.githubusercontent.com/u/514040?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Wheale</b></sub></a><br /><a href="#ideas-DesignByOnyx" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/abramenal/cypress-shadow-dom/commits?author=DesignByOnyx" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT][mit]

[cypress]: https://cypress.io/
[npm]: https://www.npmjs.com/
[mit]: https://opensource.org/licenses/MIT
