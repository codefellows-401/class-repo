'use strict';

let myDogs = {
  gary: function() {
    console.log('Gary');
  },

  charlotte: function() {
    console.log('Charlotte');
  },

  names: function(callback) {
    callback.call();
  },

  badPattern: function() {
    let that = this;
    this.names( function() {
      that.gary();
      that.charlotte();
    });
  },

  goodPattern: function() {
    this.names( function() {
      this.gary();
      this.charlotte();
    }.bind(this));
  },
};

// myDogs.badPattern();
myDogs.goodPattern();
