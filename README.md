# form-gen-tool

*Dynamically create HTML forms*

## Setup 

### Dependencies

* node
* npm

### Installation

* Clone this repo: git@github.com:cayouetten/form-gen-tool.git

## Test

`cd form-gen-tool`
`node ./src/index.js`

## Getting started

`npm install`

### Usage

Enter array of input data objects and render an HTML formatted form
Supports types and attributes as follows:
1. label
  * name
  * for
  * id
  * class
  * value
  * required
2. text
  * name
  * id
  * class
  * value
  * required
3. email
  * name
  * id
  * class
  * value
  * required
4. password
  * name
  * id
  * class
  * value
  * required
5. submit
  * name
  * id
  * class
  * value

### Example

```javascript
var inputArray = [{type:'email', name='user-email', id='user-email', class='user-email', value:'Your Email', required:'yes'}]
```

outputs
```html
<input type='email' name='user-email' id='user-email' class='user-email' value:'Your Email' required/>
```

## Style Guide

DWA Style Guide - extends AirBnB Style Guide
	
* ESLint
	- https://github.com/standard/eslint-config-standard

* mocha
	- https://mochajs.org/#installation

### Testing
Install dependencies and then run

```
mocha
```
	
## Pull requests

Your feedback is welcome!
 
* Fork repo
* Commit feature update
* Send pull request with description of code

## Copyright and attribution

Copyright (c) 2017 Nicole Cayouette
