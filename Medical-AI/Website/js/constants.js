const prompts = [
    // 1st ask
    ["hi", "hey", "hello", "good morning", "good afternoon"],

    // 2nd ask
    ["I'm not feeling well today", "I want to get check on my health"],
   
    // 3rd ask
    [
      "me", "Me",
      "just me", "Just me",
      "I will answer for myself", 
      "myself", "Myself"
    ],

    // 4th ask
    [
    "Someone else", "someone else",
    "I will answer for my family" , 
    "I will answer for my friend" , 
    "I will answer for the other", 
    "I will answer for someone else"
  ],
  
    // 5th ask
    [
      "Male", "male",
      "Female", "female",
      "Non-binary", "non-binary",
      "Agender", "agender",
      "Intersex", "intersex"],
  
    // 6th ask
    [
      "I'm 24",
      "24", 
      "I'm 24 this year"],

    // 7th ask
    [
      "Headache", "headache",
      "I have a headache", "i have a headache",
      "Headache in the forehead", "headache in the forehead",  
      "Throbbing headache", "throbbing headache"],

    // 8th ask
    ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "a week"],

    // 9th ask
    [
      "Discomfort", "discomfort",
      "Mild", "mild",
      "Extremely", "extremely",
      "Severe", "severe",
      "Really hurt", "really hurt",
      "Painful", "painful",
      "Explode", "explode"],

    // 10th ask
    ["Not too much", "not too much"],

    // 11th ask
    ["Yes", "yes"],

    // 12th ask
    ["No", "no"],

    // 13th ask
    [
      "Call 911", "call 911",
      "Help me call 911", "help me call 911", 
      "Can you help me call 911", "can you help me call 911",
      "Please call 911", "please call 911"],

    // 14th ask
    [
      "Ok I will stay home and call my provider", "ok I will stay home and call my provider",
      "I will take a covid test", "i will take a covid test"],

    // 15th ask
    ["1234 5th Ave, phone number is 1234567890"],

    // 16th ask
    ["I'm ok", "I will check it by myself", "I can order by myself" ],

    // 17th ask
    ["Thank you bye bye" ],
]
  // Possible responses, in corresponding order
  
  const replies = [
    // 1st reply
    [
      "Hi Thuan, I'm Dr.Brian. It's my pleasure to have a conversation with you today. How are you feeling today?",
      "Hi Thuan, I'm Dr.Green. It's my pleasure to have a conversation with you today. How are you feeling today?"
    ],

    // 2nd reply
    [
      "You're in the right place. May I ask are you answering for yourself or someone else?"
    ],
    
     // 3rd reply
     [
        "Can you help us describe your gender to help us diagnose more accurately?"
      ],

      // 4th reply
     [
        "Can you help us describe their gender to help us diagnose more accurately?"
      ],

       // 5th reply
     [
      "How old are you?"
    ],

     // 6th reply
     [
      "Thank you for letting us know, Thuan. Now tell me what symptom make you feeling not well?"
    ],

    // 7th reply
    [
      "How long has your current headache been going on?"
    ],

    // 8th reply
    [
      "How severe is your headache?"
    ],

     // 9th reply
     [
      "It sounds serious. Did you lose consciousness for a moment or black out?"
    ],

     // 10th reply
     [
      "It sounds relief. Did you lose consciousness for a moment or black out?"
    ],

      // 11th reply
    [
      "In this case, your thunderclap headache may need an emergency medical support. Would you want me to contact 911 or recommend some clinic near your location?"
    ],

     // 12th reply
     [
      "In this case, if you recently feel chills combine with headache, we recommend asking a provide if you should be tested for coronavirus. You should stay home and hydrate yourself as much as possible, if this feels like an emergency, you should visit the nearest emergency room."
    ],

    // 13th reply
    [
      "Our bot is calling 911 for you, meanwhile can you indicate your address and telephone number?"
    ],

    // 14th reply
    [
      "Would you like to order a test kit or see the nearest clinic in your area?"
    ],

    // 15th reply
    [
      "Medical support is on the way. Would you like to do anything else?"
    ],
    
    // 16th reply
    [
      "Alright Thuan. Would you like to do anything else?"
    ],
    
     // 17th reply
     [
      "Thank you for chatting with us. See you soon, the doctor will check-in with you in shortly if we find any critical problem."
    ],
  ]
  
  // Random for any other user input
  
  const years = [
    "Thank you for letting us know, Thuan. Now tell me what symptom make you feeling not well?"
  ]

  const day = [
    "How severe is your headache?"
  ]

  
  
  const alternative = [
    "Keyword not found. Try again"
  ]
  // Whatever else you want :)
  
  const coronavirus = ["Would you like to order a test kit or see the nearest clinic in your area?"]