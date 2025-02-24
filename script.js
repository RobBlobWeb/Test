function sendMessage() {
  let input = document.getElementById("messageInput");
  let chat = document.getElementById("chatWindow");
  let message = input.value.trim();
  let messageForCheck = message.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (message) {
    let encodedMessage = message.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
    chat.innerHTML += `<div class="message sent"><pre>${encodedMessage}</pre></div>`;
    input.value = "";
    snapToLatestMessage(chat); // Snap to latest
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
  snapToLatestMessage(chat); // Snap to latest after Alex replies
}

function snapToLatestMessage(chat) {
  let messages = chat.getElementsByClassName("message");
  if (messages.length > 0) {
    let latestMessage = messages[messages.length - 1]; // Last message
    let inputBar = document.querySelector(".input-bar");
    let inputBarHeight = inputBar.offsetHeight;
    let chatBottom = chat.scrollHeight - chat.clientHeight;
    let latestMessagePosition = latestMessage.offsetTop - chat.offsetTop;

    // Scroll so the latest message sits just above the input bar
    chat.scrollTop = latestMessagePosition - (chat.clientHeight - inputBarHeight);
    if (chat.scrollTop < 0) chat.scrollTop = 0; // Prevent overscroll
  }
}

window.onload = function() {
  let chat = document.getElementById("chatWindow");
  chat.innerHTML = `<div class="message">Hi! Something strange is happening...</div>`;
  snapToLatestMessage(chat); // Initial snap
};
