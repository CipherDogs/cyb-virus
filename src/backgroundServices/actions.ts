(global as any).browser = require('webextension-polyfill');

const browser = (global as any).browser;

module.exports = {
  setBadgeText: data => browser.browserAction.setBadgeText(data),
  onMessage: (request, sender, sendResponse) => browser.runtime.onMessage.addListener(request, sender, sendResponse),
  sendTabMessage: (tabId, data) => browser.tabs.sendMessage(tabId, data),
  sendPopupMessage: data => browser.runtime.sendMessage(data),
  getCurrentTab: () => new Promise((resolve, reject) => browser.tabs.query({ active: true, currentWindow: true }, tabs => resolve(tabs[0]))),
};
