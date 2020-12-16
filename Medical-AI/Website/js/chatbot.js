document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });
  
  function output(input) {
    let product;
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
    // But solves problem of entering something like 'hi1'
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you")
      .replace(/im/g, "I'm")
      .replace(/i have/g, "I have");
  
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];

    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];

    } else if (text.match(/(day|days)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = day[Math.floor(Math.random() * day.length)];

    } else {
      // If all else fails: random alternative
      product = years[Math.floor(Math.random() * years.length)];
    }
  
    // Update DOM
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<img src="assets/profile.png" class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "assets/bot.png";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay to seem "real"
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 3000
    )
  
  }

  // Heart Rate
  var app = {

    timerStarted: 'false',
    startTime: 0,
    countingTime: 0,
    beatCount: 0,
    timerInterval: '',
  
    init: function() {
  
      window.addEventListener("DOMContentLoaded", app.setUpHandlers, false);
  
    },
  
    setUpHandlers: function() { // comment about function
  
      window.addEventListener("", app.countBeats, false);
      document.getElementById("tapper").addEventListener("click", app.countBeats);
      document.getElementById("reset").addEventListener("click", app.resetMonitor);
      document.getElementById("stop").addEventListener("click", app.stopMonitor);
  
    },
  
    stopMonitor: function() {
      app.timerStarted = 'false';
      clearInterval(app.timerInterval);
    },
  
    resetMonitor: function() {
  
      app.timerStarted = 'false';
      clearInterval(app.timerInterval);
      document.getElementById('bpsNum').innerHTML = '0';
      document.getElementById("millisecondNum").innerHTML = '0';
      app.countingTime = 0;
      app.beatCount = 0;
  
    },
  
    countBeats: function(event) {
  
      // account for tap or key
      var keyPressed = (event !== undefined) ? event.which : null;
  
      // ignore command and tab because it's annoying when switching between programs
      if (keyPressed !== 91 && keyPressed !== 9) {
  
        app.heartPulse();
        app.beatCount++;
  
        if (app.timerStarted === 'false') {
          app.timerStarted = 'true';
          app.startTime = Date.now();
          app.timerInterval = setInterval(app.countUp, 100);
          document.getElementById('bpsNum').innerHTML = 'First ';
        } else {
  
          document.getElementById('bpsNum').innerHTML = Math.floor((app.beatCount * 60) / app.countingTime);
        }
      }
    },
  
    heartPulse: function() {
      document.getElementById('heart').className = "beat";
      setTimeout(function() {
        document.getElementById('heart').classList.remove("beat");
      }, 100);
    },
  
    countUp: function() {
      var elapsedTime = Date.now() - app.startTime;
      app.countingTime = (elapsedTime / 1000).toFixed(3);
      document.getElementById("millisecondNum").innerHTML = app.countingTime;
    },
  
  };
  
  (function() {
    "use strict";
    app.init();
  })();