# form-gen-tool

*Dynamically create HTML forms*

## Setup 

### Dependencies

* node
* npm

### Installation

* Clone this repo:
git@github.com:cayouetten/form-gen-tool.git

## Test

* cd form-gen-tool
* node ./src/index.js

### Getting started

* npm install

## Usage

Enter array of input data objects and render an HTML formatted form
* Supports types: label, text, email, password, submit
* Supports attributes: name, id, class, value, required

## Demo

var inputArray = [{type:'email', name='user-email', id='user-email', class='user-email', value:'Your Email', required:'yes'}]

*outputs:
<input type='email' name='user-email' id='user-email' class='user-email' value:'Your Email' required/>

## Pull requests

Your feedback is welcome!
 
* Fork repo
* Commit feature update
* Send pull request with description of code

## Copyright and attribution

Copyright (c) 2017 Nicole Cayouette
