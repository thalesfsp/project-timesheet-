angular.module("partials", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<md-content layout-padding>\n  <md-progress-linear ng-if=\"showLoader\" class=\"md-warn\" md-mode=\"buffer\" value=\"{{determinateValue}}\" md-buffer-value=\"{{determinateValue2}}\"></md-progress-linear>\n\n  <!-- Error element -->\n  <md-whiteframe class=\"md-whiteframe-z1\" ng-show=\"error\" layout layout-align=\"center center\">\n    <span>{{error}}</span>\n  </md-whiteframe>\n\n  <!-- User form -->\n  <form name=\"userForm\" ng-submit=\"submit()\" novalidate>\n    <md-input-container flex>\n      <label>Email</label>\n      <input\n        name=\"userEmail\"\n        type=\"email\"\n        required=\"\"\n        ng-model=\"user.email\"\n        ng-pattern=\"/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$/i\">\n\n      <div class=\"error\" ng-messages=\"userForm.userEmail.$error\">\n        <div ng-show=\"userForm.userEmail.$error.pattern\">Invalid email format. Expected: a@b.com</div>\n      </div>\n    </md-input-container>\n\n    <md-input-container flex>\n      <label>Time</label>\n      <input\n        name=\"userSubmissionTime\"\n        type=\"text\"\n        required=\"\"\n        ng-model=\"user.submissionTime\"\n        ng-pattern=\"/^([0-9][0-9]):([0-5][0-9])?$/\">\n\n      <div class=\"error\" ng-messages=\"userForm.userSubmissionTime.$error\">\n        <div ng-show=\"userForm.userSubmissionTime.$error.pattern\">Invalid time format. Expected: XX:YY</div>\n      </div>\n    </md-input-container>\n\n    <md-input-container flex>\n      <label>Message (optional)</label>\n      <textarea ng-model=\"user.message\" columns=\"1\" md-maxlength=\"200\"></textarea>\n    </md-input-container>\n\n    <p>What type of work is this for?</p>\n    <md-radio-group ng-model=\"user.typeOfWork\">\n      <md-radio-button value=\"visualEffect\" class=\"md-primary\">Time working on visual effects for movie</md-radio-button>\n      <md-radio-button value=\"mentoring\">Time spent reviewing the work of a junior artist</md-radio-button>\n    </md-radio-group>\n  </form>\n</md-content>\n\n<!-- Custom sub-view footer -->\n<footer>\n  <div class=\"control control-left\">\n    <md-button class=\"md-raised\" ng-click=\"clearFields()\">Clear</md-button>\n  </div>\n  <div class=\"control control-middle\"></div>\n  <div class=\"control control-right\">\n    <md-button class=\"md-raised\" ng-click=\"submit()\">Next</md-button>\n  </div>\n</footer>\n");
$templateCache.put("success.html","<!-- Main view -->\n<div class=\"g--half g--centered success-screen\">\n  <img class=\"done\" src=\"images/icons/ic_done_48px.svg\">\n  <p>Thank you {{user.email}}!</p>\n  <p>You have logged {{user.submissionTimeParsed | date : \'HH\'}} <strong>hour(s)</strong> and {{user.submissionTimeParsed | date : \'mm\'}} <strong>minute(s)</strong></p>\n</div>\n\n<!-- Custom sub-view footer -->\n<footer>\n  <div class=\"control control-left\">\n    <md-button class=\"md-raised\" ng-click=\"goTo(\'/\')\">Back</md-button>\n  </div>\n  <div class=\"control control-middle\"></div>\n  <div class=\"control control-right\">\n    <md-button class=\"md-raised\" ng-click=\"restart()\">Start Again</md-button>\n  </div>\n</footer>\n");}]);