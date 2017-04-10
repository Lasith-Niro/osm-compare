'use strict';
module.exports = disputedBorderTagChanged;

function disputedBorderTagChanged(newVersion, oldVersion) {
  var result = {'result:disputed_border_tag_changed': false};

  if (!newVersion && !oldVersion) {
  // None of old version or new Version present
    return result;
  }
  if (newVersion && oldVersion) {
  // Both new Version and old Version are present, which indicates feature has been modified
  /*
    Comparing the tags
    Creating a result object like following:
    result['result:comparator_name'][parameter] = value;
  */
    if (oldVersion.properties && oldVersion.properties['disputed']) {
      if (oldVersion.properties['disputed'] !== null) {
        return {'result:disputed_border_tag_changed': true};
      }
    }

  }

  return result;
}
