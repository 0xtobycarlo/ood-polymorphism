class AssertionList {
  constructor(assertions) {
    this.assertions = assertions;
  }

  checkAll() {
    return this.assertions.every((assertion) => assertion.isEqualOrIncludes());
  }
}

module.exports = AssertionList;
