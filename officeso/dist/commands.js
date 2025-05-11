/******/ (function() { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/commands/commands.ts ***!
  \**********************************/
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global Office */
Office.onReady(function () {
  // If needed, Office.js is ready to be called.
});
/**
 * Shows a notification when the add-in command is executed.
 * @param event
 */
function action(event) {
  var _a;
  var message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };
  // Show a notification message.
  (_a = Office.context.mailbox.item) === null || _a === void 0 ? void 0 : _a.notificationMessages.replaceAsync("ActionPerformanceNotification", message);
  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}
// Register the function with Office.
Office.actions.associate("action", action);
/******/ })()
;
//# sourceMappingURL=commands.js.map