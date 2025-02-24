function sendMessage() {
  let input = document.getElementById("messageInput");
  let chat = document.getElementById("chatWindow");
  let message = input.value.trim().toLowerCase(); // Get input, trim spaces, lowercase it
  if (message) {
    chat.innerHTML += `<div class="message sent">${message}</div>`; // Show your message
    input.value = ""; // Clear input
    chat.scrollTop = chat.scrollHeight; // Scroll to bottom
    setTimeout(() => replyFromAlex(message), 1000); // Pass message to Alex after delay
  }
}

function replyFromAlex(userMessage) {
  let chat = document.getElementById("chatWindow");
  let reply;

  // Log the input for debugging (visible in browser console)
  console.log("User said: " + userMessage);

  // Check the user's exact input
  if (userMessage === "yes") {
    reply = "The secret is... there’s a hidden door nearby!";
  } else if (userMessage === "no") {
    reply = "Okay, your loss!";
  } else {
    reply = "Hey, cool! Want to hear a secret? Say 'yes' or 'no'.";
  }

  chat.innerHTML += `<div class="message">${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}

// Start with a greeting
window.onload = () => {
  let chat = document.getElementById("chatWindow");
  chat.innerHTML = `<div class="message">Hi! Something strange is happening...</div>`;
};
