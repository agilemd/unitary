const proto = {
  valueOf: function () {
    return this.value
  },
  is: function (unit) {
    return this.unit === (unit && unit.unit || unit)
  }
}

function unitary (unitName) {
  var Unit = function (val) {
    if (!(this instanceof Unit)) {
      return new Unit (val)
    }
    this.value = val
    this.unit = unitName
  }
  Unit.name = unitName
  Unit.unit = unitName
  Unit.prototype = proto
  return Unit
}

module.exports = unitary
