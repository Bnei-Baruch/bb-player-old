
loader.register('tests/bb-player_tests', function(require) {
require('bb-player/core');

module("bb-player");

test("App is defined", function () {
  ok(typeof App !== 'undefined', "App is undefined");
});

});
