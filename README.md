[![CircleCI](https://circleci.com/gh/linzhixing/chai-visible.svg?style=svg)](https://circleci.com/gh/linzhixing/chai-visible)

# chai-visible
[Chai](http://chaijs.com/) plugin with [is-visible](https://www.npmjs.com/package/is-visible)

# Usage
`chai.Assertion.addProperty('visible', require('chai-visible'));`  

then  

`expect(your-dom).to.be.visible`  
`expect(your-dom).to.be.not.visible`
