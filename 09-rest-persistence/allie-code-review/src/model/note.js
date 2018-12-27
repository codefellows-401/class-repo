'use strict';

const uuid = require('uuid/v4');

class Note {
  constructor(title='Please update the title', content='Please update the content') {
    this.id = uuid();
    this.timestamp = new Date();
    this.title = title;
    this.content = content;
  }
}

module.exports = Note;
