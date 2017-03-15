// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by affiliates.js.
import { name as packageName } from "meteor/danmendes:affiliates";

// Write your tests here!
// Here is an example.
Tinytest.add('affiliates - example', function (test) {
  test.equal(packageName, "affiliates");
});
