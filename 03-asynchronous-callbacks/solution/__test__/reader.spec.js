const read = require('../lib/reader');

describe('Reader Module', () => {

  it('should callback with error for a non-existent file', (done) => {

    read(['missing.txt'], (err) => {

      expect(err).not.toBeNull();
      
      done();
      
    });
  });

  it('should callback with error for any non-existent file', (done) => {

    read([__dirname + '/data/apples.txt', 'missing.txt'], (err) => {

      expect(err).not.toBeNull();
      
      done();
    });
  });

  it('should callback with file contents of multiple files in order', (done) => {
  
    let paths = [];

    // NOTE: cucumber.txt has a lot of text in it so should load slower
    for (let item of ['cucumbers','apples','bananas']) {
      paths.push(__dirname + '/../data/' + item + '.txt');
    }

    let expected, actual;

    read(paths, (err, contents) => {

      expect(err).toBeNull();

      expected = true;

      actual = contents[0].toString().startsWith('cucumber');

      expect(actual).toBe(expected);

      expected = 'words about apples'; 
      
      actual = contents[1].toString();

      expect(actual).toBe(expected);

      expected = 'words about bananas'; 
      
      actual = contents[2].toString();

      expect(actual).toBe(expected);

      done();      
    });
  });


  xit('should callback with file contents of one file', (done) => {
  
    const expected = 'words about apples'; 

    read([__dirname + '/../data/apples.txt'], (err, contents) => {

      expect(err).toBeNull();

      const actual = contents[0].toString();

      expect(actual).toBe(expected);

      done();
      
    });
  });

});
