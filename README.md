# keytimerotator

get valid key from array of keys with limit requests with period

## Usage

`````javascript

var Keytimerotator = require('keytimerotator');

var schedule = "0 * * * * *";

var keys = [
  {
    key: 'rtfdgkjfdgkj',
    limit: 1
  },
  {
    key: 'hdkjfdsfgnkjdgf',
    limit: 3
  }
];

var keytimerotator = new Keytimerotator(keys, schedule);
var workKey = keytimerotator.getKey();     //after shedule get key from begin keys

`````


## Install

> npm install keytimerotator [--save]


## API

### getKey()

return key