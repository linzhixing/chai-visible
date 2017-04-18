import isVisible from 'is-visible';

module.exports = function() {
  const actual = this._obj;
  return this.assert(
    isVisible(actual),
    'expected ' + actual + ' to be visible',
    'expected ' + actual + ' to be not visible'
  );
}
