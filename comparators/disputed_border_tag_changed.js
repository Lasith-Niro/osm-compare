'use strict';
module.exports = disputedBorderTagChanged;

function disputedBorderTagChanged(newVersion, oldVersion) {
  if (newVersion.deleted && !oldVersion) {
    // None of old version or new Version present
    return false;
  }
  if (!newVersion.deleted && oldVersion) {
    // Both new Version and old Version are present, which indicates feature has been modified
    /*
    Comparing the tags
    Creating a result object like following:
    result['result:comparator_name'][parameter] = value;
  */
    if (oldVersion.properties && oldVersion.properties['disputed']) {
      if (oldVersion.properties['disputed'] !== null) {
        return {
          message: 'Disputed border tag changed',
          'result:disputed_border_tag_changed': true
        };
      }
    }
  }

  return false;
}
