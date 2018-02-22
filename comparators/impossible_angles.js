'use strict';
const impossibleAngle = require('../lib/impossible_angle');

module.exports = impossibleAngleMotorableHighways;
/*
  check impossible angles in highways
*/
function impossibleAngleMotorableHighways(newVersion) {

  return (motorableHighway(newVersion) && impossibleAngle(newVersion));
}

const highwayValues = new Set([
  'motorway',
  'motorway_link',
  'trunk',
  'trunk_link',
  'primary',
  'primary_link',
  'secondary',
  'secondary_link',
  'tertiary',
  'tertiary_link',
  'residentail',
  'unclassified',
  'service',
  'living_street'
]);

function isMotorableHighway(tags) {
  return highwayValues.has(tags.highway);
}
function motorableHighway(newVersion, oldVersion) {
  if ((newVersion && isMotorableHighway(newVersion.properties)) || (oldVersion && isMotorableHighway(oldVersion.properties))) return {'result:impossible_angle': true};
  return false;
}
