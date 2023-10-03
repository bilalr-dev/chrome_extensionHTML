// Add an event listener to run code when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Get a reference to the 'sendBtn' element.
    const sendBtn = document.getElementById('sendBtn');
    // Add a click event listener to the 'sendBtn' element, which triggers the 'sendHTML' function.
    sendBtn.addEventListener('click', sendHTML);
  });
  
  // Define an asynchronous function to send HTML content to the server.
  async function sendHTML() {
    try {
      // Query for the currently active tab in the current window.
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      // Get the URL of the active tab.
      const linkURL = activeTab.url;
  
      // Fetch the HTML content from the URL of the active tab.
      const response = await fetch(linkURL);
      // Check if the response is OK (status 200).
      if (!response.ok) {
        throw new Error('Failed to fetch HTML.');
      }
  
      // Extract the HTML content as text.
      const html = await response.text();
      // Send the retrieved HTML content to the server.
      await sendToServer(html);
  
      // Log a success message when HTML is sent successfully.
      console.log('HTML sent successfully.');
    } catch (error) {
      // Handle any errors that occur during the process and log them.
      console.error('Error:', error);
    }
  }
  
  // Define an asynchronous function to send HTML content to the server.
  async function sendToServer(html) {
    try {
      // Define the server URL where the HTML content will be sent.
      const serverURL = '_SERVER_URL';
      // Send a POST request to the server with the HTML content in the request body.
      const response = await fetch(serverURL, {
        method: 'POST',
        body: html,
        headers: {
          'Content-Type': 'text/html',
        },
      });
  
      // Check if the response is OK (status 200).
      if (!response.ok) {
        throw new Error('Failed to send HTML.');
      }
    } catch (error) {
      // Handle any errors that occur during the process and log them.
      console.error('Error:', error);
    }
  }
  