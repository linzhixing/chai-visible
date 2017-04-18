var chai = require('chai');
var expect = chai.expect;
chai.Assertion.addProperty('visible', require('../lib/index.js'));
var testId = 'test';

describe('to.be.visible', function() {
  beforeEach(function(){
    var div = document.createElement('div');
    div.id = testId;
    document.body.appendChild(div);
  });

  afterEach(function(){
    document.body.innerHTML = "";
  })

  it('works correctly', function() {
    expect(document.getElementById(testId)).to.be.visible;
  });

  it('to.be.not.visible works correctly', function() {
    document.getElementById(testId).style.display = 'none';
    expect(document.getElementById(testId)).to.be.not.visible;
  });
});
