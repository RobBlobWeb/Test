function sendMessage() {
  let input = document.getElementById("messageInput");
  let chat = document.getElementById("chatWindow");
  let message = input.value.trim();
  if (message) {
    chat.innerHTML += `<div class="message sent">${message}</div>`;
    input.value = "";
    setTimeout(replyFromAlex, 1000); // Alex replies after a delay
    chat.scrollTop = chat.scrollHeight; // Scroll to bottom
  }
}

function replyFromAlex() {
  let chat = document.getElementById("chatWindow");
  let message = "Hey, cool! Want to hear a secret? Say 'yes' or 'no'.";
  chat.innerHTML += `<div class="message">${message}</div>`;
  chat.scrollTop = chat.scrollHeight;

  // Check for game input
  let lastSent = document.querySelector(".sent:last-child");
  if (lastSent && lastSent.textContent.toLowerCase() === "yes") {
    setTimeout(() => {
      chat.innerHTML += `<div class="message">The secret is... there’s a hidden door nearby!</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 2000);
  } else if (lastSent && lastSent.textContent.toLowerCase() === "no") {
    setTimeout(() => {
      chat.innerHTML += `<div class="message">Okay, your loss!</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 2000);
  }
}

// Start with a greeting
window.onload = () => {
  let chat = document.getElementById("chatWindow");
  chat.innerHTML = `<div class="message">Hi! Something strange is happening...</div>`;
};
