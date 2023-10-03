# HTML Sender Extension

A Chrome extension for easy web page HTML extraction and sharing.

The HTML Sender Extension is a Chrome extension that allows you to retrieve the HTML content of the currently open webpage and send it to a server via a POST request. This can be useful for various purposes, such as web scraping or data collection.

## Getting Started

These instructions will help you set up and use the HTML Sender Extension in your Chrome browser.

### Prerequisites

- Google Chrome: Make sure you have Google Chrome installed on your computer.

### Installation

1. Clone or download this repository to your local machine.

2. Open Google Chrome.

3. Navigate to `chrome://extensions/`.

4. Enable "Developer mode" in the top right corner of the page.

5. Click the "Load unpacked" button.

6. Select the directory where you have cloned or downloaded the extension files.

7. The HTML Sender Extension icon should now appear in your Chrome toolbar.

## Usage

1. Open a webpage in Google Chrome.

2. Click on the HTML Sender Extension icon in the Chrome toolbar.

3. In the popup window, click the "Send HTML" button.

4. The extension will retrieve the HTML content of the currently open webpage and send it to the server specified in the code.

5. Check the server logs to confirm that the HTML was received successfully.

## Configuration

In the `popup.js` file of the extension, you can configure the server URL to which the HTML content will be sent. Replace `'_SERVER_URL'` with the actual URL of your server.

```javascript
const serverURL = '_SERVER_URL';

