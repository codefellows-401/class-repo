'use strict';

const List = require('../../lib/list.js');

describe('Testing the List class', () => {
  it('should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  });

  it('should add a new element to the List', () => {
    let pushList = new List();
    pushList.push(6);
    pushList.push(8);
    pushList.push(1);
    pushList.push(3);
    console.log(pushList);
    expect(pushList.length).toBe(4);
  });

  it('should iterate over the array and run the callback for each element', () => {
    let mapList = new List();
    mapList.push(5);
    mapList.push(4);
    mapList.push(9);
    mapList.push(16);

    let actual = mapList.map(num => num * 2);
    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
  });

})
