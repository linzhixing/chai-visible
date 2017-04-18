import isVisible from 'is-visible';

module.exports = function() {
  var actual = this._obj;
  return this.assert(
    isVisible(actual),
    'expected ' + actual + ' to visible',
    'expected ' + actual + ' to not visible'
  );
}
