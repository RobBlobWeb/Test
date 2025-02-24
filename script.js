function sendMessage() {
  let input = document.getElementById("messageInput");
  let chat = document.getElementById("chatWindow");
  let message = input.value.trim();
  let messageForCheck = message.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (message) {
    let encodedMessage = message.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
    chat.innerHTML += `<div class="message sent"><pre>${encodedMessage}</pre></div>`;
    input.value = "";
    chat.scrollTop = 0; // Snap to bottom (newest message)
    setTimeout(() => replyFromAlex(messageForCheck), 1000);
  }
}

function replyFromAlex(userMessage) {
  let chat = document.getElementById("chatWindow");
  let reply;

  console.log("User said (cleaned): " + userMessage);

  if (userMessage === "yes") {
    reply = "The secret is... there’s a hidden door nearby! Want to check it out? (say 'sure' or 'nah')";
  } else if (userMessage === "no") {
    reply = "Okay, your loss! Anything else on your mind?";
  } else if (userMessage === "sure") {
    reply = "Sweet, let’s go! It’s behind the old oak tree. What do you see there?";
  } else if (userMessage === "nah") {
    reply = "Fair enough. I’m kinda curious though—what’s stopping you?";
  } else if (userMessage === "hi" || userMessage === "hello") {
    reply = "Hey there! Something weird’s going on around here... want to dig into it? (yes/no)";
  } else if (userMessage === "what" || userMessage === "whatsup") {
    reply = "I keep hearing noises at night—like whispers. Creepy, right? Thoughts?";
  } else {
    reply = "Hey, cool! Want to hear a secret? Say 'yes' or 'no'.";
  }

  chat.innerHTML += `<div class="message">${reply}</div>`;
  chat.scrollTop = 0; // Snap to bottom after Alex replies
}

window.onload = function() {
  let chat = document.getElementById("chatWindow");
  chat.innerHTML = `<div class="message">Hi! Something strange is happening...</div>`;
  chat.scrollTop = 0; // Start at bottom
};
