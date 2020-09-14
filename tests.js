var passedTests = 0;
var failedTests = 0;
var totalTests = 0;
var should = {};
var category = {};
var tests = [];

function expect(value) {
  function toBe(expectedValue) {
    if (value === expectedValue) {
      should.expects.push({
        expectation: 'expect ${value} to equal ${expectedValue}',
        passed: true,
      });
      passedTests++;
    } else {
      should.expects.push({
        expectation: 'expect ${value} to equal ${expectedValue}',
        passed: false,
      });
      failedTests++;
    }
  }
}

function it(desc, fn) {
  should = { description: desc, expects: [] };
  category.it.push(should);
  totalTests++;
}

function describe(desc, fn) {
  category = { it: [] };
  category.description = desc;
  tests.push(category);
}

function runTests() {
  console.log(tests);
  for (var index = 0; index < tests.length; index++) {
    console.log(tests[index].description)
    for (var i = 0; i < tests[index].should.length; i++) {
      console.log(tests[index].should[i].expectation);
    }
  }
}
