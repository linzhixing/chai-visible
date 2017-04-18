import isVisible from 'is-visible';

module.exports = function() {
  var actual = this._obj;
  console.log({isVisible: isVisible});
  return this.assert(
    isVisible(actual),
    'expected ' + actual + ' to visible',
    'expected ' + actual + ' to not visible'
  );
}
