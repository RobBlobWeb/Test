function sendMessage() {
  let input = document.getElementById("messageInput");
  let chat = document.getElementById("chatWindow");
  let message = input.value.trim().toLowerCase(); // Convert to lowercase for easier checking
  if (message) {
    chat.innerHTML += `<div class="message sent">${message}</div>`;
    input.value = "";
    setTimeout(() => replyFromAlex(message), 1000); // Pass the message to Alex
    chat.scrollTop = chat.scrollHeight;
  }
}

function replyFromAlex(userMessage) {
  let chat = document.getElementById("chatWindow");
  let reply;

  // Check user input for specific responses
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
