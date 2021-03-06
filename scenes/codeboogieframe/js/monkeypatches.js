/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.monkeypatches');

goog.require('goog.dom.vendor');


/**
 * Returns the JS vendor prefix used in CSS properties. Different vendors
 * use different methods of changing the case of the property names.
 *
 * PATCH: To coexist with web-animations-js polyfill in Safari, the prefixes
 *    must match them by starting lowercase.
 *
 * @return {?string} The JS vendor prefix or null if there is none.
 * @suppress {duplicate}
 */
goog.dom.vendor.getVendorJsPrefix = function() {
  if (goog.userAgent.WEBKIT) {
    return 'webkit';
  } else if (goog.userAgent.GECKO) {
    return 'moz';
  } else if (goog.userAgent.IE) {
    return 'ms';
  } else if (goog.userAgent.OPERA) {
    return 'O';
  }

  return null;
};
