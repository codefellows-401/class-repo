'use strict';

const List = require('./list.js');

describe('Testing the list module', () => {

  const loadArray = [4, 1, 7, 3, 9, 12];
  const testingList = () => {
    let newList = new List();
    for(let i = 0; i < loadArray.length; i++) {
      newList.push(loadArray[i]);
    }
    return newList;
  };

  describe('Testing the initial state of the instance', () => {
    let startList = new List();

    it('should have a length of zero', () => {
      expect(startList.length).toBe(0);
    });

    it('should be an instance of the List class', () => {
      expect(startList).toBeInstanceOf(List);
    });
  });

  describe('Testing the push method', () => {
    it('should add a new element to the list', () => {
      let pushList = testingList();
      
      let newItem = 42;
      pushList.push(newItem);

      expect(pushList[pushList.length - 1]).toEqual(newItem);
    });

    it('should increase the length by one for each element that is pushed into the list', () => {
      let pushList = testingList();
      
      let lengthBefore = pushList.length;

      pushList.push(53);
      
      expect(pushList.length).toBe(lengthBefore + 1);
    });

    it('should throw an error if the value is omitted', () => {
      let pushList = testingList();

      expect( () => pushList.push() ).toThrow();
    });
  });

  describe('Testing the pop method', () => {
    it('should remove and return the last element from the list', () => {
      let popList = testingList();
      let last = popList[popList.length - 1];
      let popped = popList.pop();
      expect(popped).toBe(last);
    });

    it('should reduce the length of the list by one', () => {
      let popList = testingList();
      let lengthBefore = popList.length;
      popList.pop();
      let lengthAfter = popList.length;

      expect(lengthAfter).toBeLessThan(lengthBefore);
      expect(lengthAfter).toBe(lengthBefore - 1);
    });

    it('should throw an error if an argument is passed in', () => {
      let popList = testingList();
      expect( () => popList.pop(7) ).toThrow();
    });
    
    it('should throw an error if the list is empty', () => {
      let emptyList = new List();
      expect( () => emptyList.pop() ).toThrow();
    });
  });

  describe('Testing the map method', () => {
    it('should apply the callback function to every item in the list', () => {
      let mapList = testingList();
      let mapped = mapList.map(num => num * 4);

      expect(mapped.length).toBe(mapList.length);
      expect(mapped).not.toEqual(mapList);
    });

    it('should throw an error if a callback is omitted', () => {
      let mapList = testingList();

      expect( () => mapList.map() ).toThrow();
    });
    
    it('should throw an error if the list is empty', () => {
      let emptyList = new List();
      
      expect( () => emptyList.map() ).toThrow();
    });
  });

  describe('Testing the filter method', () => {
    it('should return a new array containing only the elements that meet the condition', () => {
      let filterList = testingList();
      let filtered = filterList.filter(num => num > 4);

      expect(filtered.length).toBeLessThanOrEqual(filterList.length);
      expect(filtered).not.toEqual(filterList);
    });

    it('should throw an error if the callback is omitted', () => {
      let filterList = testingList();

      expect( () => filterList.filter() ).toThrow();
    });

    it('should throw an error if the list is empty', () => {
      let emptyList = new List();
      
      expect( () => emptyList.filter() ).toThrow();
    });
  });

  describe('Testing the reduce method', () => {
    it('should return a single element that is returned after the callback is invoked on each element', () => {
      let reduceList = testingList();

      let reduced = reduceList.reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);

      let expected = loadArray.reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);

      expect(reduced).toBe(expected);
    });

    it('should throw an error if the initial state is omitted', () => {
      let reduceList = testingList();

      let reduced = () => reduceList.reduce((accumulator, current) => {
        return accumulator + current;
      });

      expect(reduced).toThrow();
    });

    it('should throw an error if the callback is omitted', () => {
      let reduceList = testingList();

      expect( () => reduceList.reduce() ).toThrow();
    });

    it('should throw an error if the list is empty', () => {
      let emptyList = new List();
      
      expect( () => emptyList.reduce() ).toThrow();
    });
  });

  describe('Testing the slice method', () => {
    it('should return the subset of values', () => {
      let slicedList = testingList();

      let lengthBefore = slicedList.length;
      let sliced = slicedList.slice(1, 3);
    
      let expected = new List();
      expected.push(1);
      expected.push(7);

      expect(sliced.length).toEqual(expected.length);
      expect(sliced.length).toBeLessThan(lengthBefore);
      expect(sliced).toEqual(expected);
    });

    it('should utilize the length of the array as the end value if the end is omitted', () => {
      let slicedList = testingList();

      let lengthBefore = slicedList.length;
      let sliced = slicedList.slice(3);

      let expected = new List();
      expected.push(3);
      expected.push(9);
      expected.push(12);

      expect(sliced.length).toEqual(expected.length);
      expect(sliced.length).toBeLessThan(lengthBefore);
      expect(sliced).toEqual(expected);
    });

    it('should throw an error if the start index is omitted', () => {
      let slicedList = testingList();

      expect( () => slicedList.slice(null, 4) ).toThrow();
    });
    
    it('should throw an error if the list is empty', () => {
      let emptyList = new List();
  
      expect( () => emptyList.slice(null, 4) ).toThrow();
    });
  });
});
