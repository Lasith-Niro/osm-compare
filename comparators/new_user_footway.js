'use strict';

const newUser = require('./new_user');
const impossibleAngles = require('../lib/impossible_angle');
const selfIntersecting = require('../lib/self_intersecting');

// check if the user is new user
// check if the feature is actually a footway and it is version 1
// check if the footway has imposible angle
// check if the footway is selfintersecting

function isFootway(newVersion) {
  if (
    newVersion.properties &&
    newVersion.properties.highway === 'footway' &&
    newVersion.properties['osm:version'] === 1
  ) {
    return true;
  }
  return false;
}

function isBadFootway(newVersion) {
  return isFootway(newVersion) &&
    (impossibleAngles(newVersion) || selfIntersecting(newVersion));
}

const newUserFootway = (newVersion, oldVersion) => {
  if (newUser(newVersion, oldVersion) && isBadFootway(newVersion)) {
    return {'result:new_user_footway': true};
  }
  return false;
};

module.exports = newUserFootway;
