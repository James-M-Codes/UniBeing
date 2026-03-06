// ================================================================
// UniBeing - Guided Wellbeing Exercises
// ================================================================

const wellbeingExercises = [

  // ---- BREATHING EXERCISES ------------------------------------
  {
    id: "breathing-444",
    category: "breathing",
    title: "4-4-4 Breathing",
    emoji: "🌬️",
    duration: "3 minutes",
    description: "A simple breathing technique to calm your nervous system quickly.",
    steps: [
      "Find a comfortable position — sitting or lying down.",
      "Close your eyes and relax your shoulders.",
      "Breathe IN slowly through your nose for 4 counts.",
      "HOLD your breath for 4 counts.",
      "Breathe OUT slowly through your mouth for 4 counts.",
      "Repeat this cycle 4-6 times.",
      "Notice how your body feels calmer with each breath."
    ],
    tip: "If 4 counts feels too long, start with 3 and build up gradually."
  },

  {
    id: "breathing-box",
    category: "breathing",
    title: "Box Breathing",
    emoji: "⬜",
    duration: "5 minutes",
    description: "Used by athletes and military professionals to reduce stress and improve focus.",
    steps: [
      "Sit upright in a comfortable chair with your feet flat on the floor.",
      "Breathe OUT completely to start.",
      "Breathe IN through your nose for 4 counts.",
      "HOLD your breath for 4 counts.",
      "Breathe OUT through your mouth for 4 counts.",
      "HOLD again for 4 counts.",
      "This completes one box — repeat 4-6 times.",
      "Imagine tracing the sides of a box as you breathe."
    ],
    tip: "Visualise drawing a square — each side is one breath phase. This makes it easier to focus."
  },

  {
    id: "breathing-55",
    category: "breathing",
    title: "5-5 Breathing",
    emoji: "💨",
    duration: "3 minutes",
    description: "A gentle, rhythmic breathing exercise to slow your heart rate and ease anxiety.",
    steps: [
      "Sit or lie in a comfortable position.",
      "Place one hand on your chest and one on your belly.",
      "Breathe IN slowly through your nose for 5 counts.",
      "Feel your belly rise — not your chest.",
      "Breathe OUT slowly through your mouth for 5 counts.",
      "Feel your belly fall as you exhale.",
      "Repeat for 3-5 minutes.",
      "Focus only on the sensation of your breath."
    ],
    tip: "Breathing from your belly (diaphragmatic breathing) is more calming than chest breathing."
  },

  // ---- GROUNDING EXERCISES ------------------------------------
  {
    id: "grounding-54321",
    category: "grounding",
    title: "5-4-3-2-1 Grounding",
    emoji: "🌿",
    duration: "5 minutes",
    description: "A powerful technique to bring you back to the present moment when feeling anxious or overwhelmed.",
    steps: [
      "Take a slow deep breath to begin.",
      "Look around and name 5 things you can SEE.",
      "Notice 4 things you can physically TOUCH — feel their texture.",
      "Listen carefully and identify 3 things you can HEAR.",
      "Find 2 things you can SMELL — or recall two favourite scents.",
      "Notice 1 thing you can TASTE — or take a sip of water.",
      "Take another slow deep breath.",
      "Notice how much more present and grounded you feel."
    ],
    tip: "Say each item out loud if you can — it makes the technique even more effective."
  },

  // ---- QUICK ACTIVITIES --------------------------------------
  {
    id: "activity-gratitude",
    category: "activity",
    title: "Gratitude Practise",
    emoji: "🙏",
    duration: "5 minutes",
    description: "Research shows that practising gratitude regularly can significantly improve mood and wellbeing.",
    steps: [
      "Find a quiet moment and grab a pen and paper (or your phone).",
      "Take three slow deep breaths to settle your mind.",
      "Write down 3 things you are grateful for today.",
      "They can be big or small — a warm bed, a kind message, good coffee!",
      "For each one, write WHY you are grateful for it.",
      "Read back what you've written and let it sink in.",
      "Notice any shift in how you feel.",
      "Try to make this a daily habit — morning or evening works well."
    ],
    tip: "On difficult days, even writing 'I am grateful for breathing' counts. Start small."
  },

  {
    id: "activity-relaxation",
    category: "activity",
    title: "Progressive Muscle Relaxation",
    emoji: "🧘",
    duration: "10 minutes",
    description: "Release physical tension stored in your body by systematically tensing and relaxing muscle groups.",
    steps: [
      "Lie down or sit in a comfortable position.",
      "Close your eyes and take 3 deep breaths.",
      "Start with your FEET — tense them tightly for 5 seconds, then release.",
      "Move to your CALVES — tense for 5 seconds, then release.",
      "THIGHS — tense for 5 seconds, then release.",
      "STOMACH — pull it in tightly for 5 seconds, then release.",
      "HANDS — make tight fists for 5 seconds, then release.",
      "ARMS — tense your biceps for 5 seconds, then release.",
      "SHOULDERS — raise them to your ears for 5 seconds, then release.",
      "FACE — scrunch all your facial muscles for 5 seconds, then release.",
      "Take 3 final deep breaths and enjoy the feeling of full relaxation."
    ],
    tip: "Notice the contrast between tension and relaxation — that's where the relief comes from."
  },


  // ---- MINDFULNESS EXERCISES ----------------------------------
  {
    id: "mindfulness-body-scan",
    category: "mindfulness",
    title: "Body Scan Mindfulness",
    emoji: "🧠",
    duration: "10 minutes",
    description: "A gentle mindfulness practice to reconnect with your body and release tension.",
    steps: [
      "Lie down or sit comfortably with your eyes closed.",
      "Take 3 slow deep breaths to settle in.",
      "Bring your attention to the top of your head — just notice any sensations.",
      "Slowly move your awareness down to your forehead, jaw and neck.",
      "Continue down through your shoulders, chest and belly.",
      "Move through your arms, hands and fingers.",
      "Bring attention to your lower back, hips and thighs.",
      "Finally scan down through your knees, calves, feet and toes.",
      "Take a final deep breath and gently open your eyes."
    ],
    tip: "You do not need to change anything — just observe. Noticing is enough."
  },

  {
    id: "mindfulness-senses",
    category: "mindfulness",
    title: "Mindful Senses",
    emoji: "👁️",
    duration: "5 minutes",
    description: "Use your senses to anchor yourself fully in the present moment.",
    steps: [
      "Sit comfortably and take a few slow breaths.",
      "Focus entirely on what you can SEE — really look at colours, shapes and light.",
      "Close your eyes and focus on what you can HEAR — near and far sounds.",
      "Notice what you can FEEL — the weight of your body, temperature, textures.",
      "Notice any SMELLS in the air around you.",
      "Notice any TASTE in your mouth.",
      "Take a deep breath and slowly open your eyes.",
      "Appreciate this moment exactly as it is."
    ],
    tip: "Try this outdoors for an even richer experience — nature is incredibly grounding."
  },

  {
    id: "mindfulness-eating",
    category: "mindfulness",
    title: "Mindful Eating",
    emoji: "🍎",
    duration: "5 minutes",
    description: "Slow down and fully experience eating — a great way to practise presence in daily life.",
    steps: [
      "Choose a small piece of food — a raisin, a biscuit or a piece of fruit.",
      "Look at it carefully — notice its colour, shape and texture.",
      "Smell it slowly and notice what you observe.",
      "Place it in your mouth without chewing — just feel it.",
      "Slowly begin to chew, noticing every taste and sensation.",
      "Swallow mindfully and notice the aftertaste.",
      "Reflect — how different did that feel compared to eating on autopilot?"
    ],
    tip: "You can apply this to any meal. Even one mindful bite per meal makes a difference."
  },

  {
    id: "mindfulness-walking",
    category: "mindfulness",
    title: "Mindful Walking",
    emoji: "🚶",
    duration: "10 minutes",
    description: "Transform an ordinary walk into a calming mindfulness practice.",
    steps: [
      "Find a quiet space to walk — indoors or outdoors.",
      "Begin walking at a slower pace than usual.",
      "Notice the sensation of your feet touching the ground with each step.",
      "Feel the movement in your legs, hips and arms.",
      "Notice your breath — is it in sync with your steps?",
      "Look around and observe your surroundings without judgement.",
      "If your mind wanders, gently bring it back to the feeling of walking.",
      "After 10 minutes, pause and take 3 deep breaths."
    ],
    tip: "Leave your phone in your pocket. This time is just for you."
  },

  {
    id: "mindfulness-observation",
    category: "mindfulness",
    title: "Mindful Object Observation",
    emoji: "🔍",
    duration: "5 minutes",
    description: "Sharpen your focus and calm your mind by fully observing a single object.",
    steps: [
      "Pick up any object near you — a pen, a mug, a leaf.",
      "Hold it in your hands and look at it as if you have never seen it before.",
      "Notice its colour, shape, weight and texture.",
      "Turn it over and explore every angle.",
      "Close your eyes and feel it — notice every bump and surface.",
      "Open your eyes and look once more.",
      "Take a deep breath and set it down.",
      "Notice how focused and present you feel right now."
    ],
    tip: "This works surprisingly well when your mind feels scattered and overwhelmed."
  },

  // ---- GROUNDING EXERCISES (additional) -----------------------
  {
    id: "grounding-cold-water",
    category: "grounding",
    title: "Cold Water Grounding",
    emoji: "💧",
    duration: "2 minutes",
    description: "Use cold water to quickly calm your nervous system during moments of panic or distress.",
    steps: [
      "Go to a sink or grab a cold drink.",
      "Run cold water over your wrists and forearms for 30 seconds.",
      "Alternatively, splash cold water gently on your face.",
      "As you do this, focus entirely on the sensation of the cold.",
      "Take slow deep breaths while you feel the temperature.",
      "Notice how your heart rate begins to slow.",
      "Pat dry and take 3 final deep breaths."
    ],
    tip: "This works because cold water activates your body's dive reflex, which naturally slows your heart rate."
  },

  {
    id: "grounding-feet",
    category: "grounding",
    title: "Feet on the Ground",
    emoji: "👣",
    duration: "3 minutes",
    description: "A simple grounding technique using the physical sensation of your feet to anchor you.",
    steps: [
      "Sit in a chair with both feet flat on the floor.",
      "Take a slow deep breath in and out.",
      "Press your feet firmly into the floor and notice the pressure.",
      "Feel the texture of the floor through your shoes or socks.",
      "Wiggle your toes slowly and notice the sensation.",
      "Press down again and imagine roots growing from your feet into the ground.",
      "Take 3 more deep breaths while staying focused on your feet.",
      "Slowly look up and around the room."
    ],
    tip: "If you can, remove your shoes and feel the floor directly — it is even more effective."
  },

  {
    id: "grounding-safe-place",
    category: "grounding",
    title: "Safe Place Visualisation",
    emoji: "🏡",
    duration: "5 minutes",
    description: "Use your imagination to create a mental safe space you can return to whenever you need calm.",
    steps: [
      "Close your eyes and take 3 slow deep breaths.",
      "Imagine a place where you feel completely safe and at peace — real or imaginary.",
      "Picture the colours, shapes and light in this place.",
      "Notice any sounds — birds, water, wind, silence.",
      "Feel the temperature — is it warm or cool?",
      "Breathe in and imagine the smells of this place.",
      "Stay here for as long as you need.",
      "When ready, slowly count from 5 to 1 and open your eyes."
    ],
    tip: "The more detail you add, the more real it feels. Return here whenever you need a moment of peace."
  },

  // ---- JOURNALLING EXERCISES ----------------------------------
  {
    id: "journal-brain-dump",
    category: "journalling",
    title: "Brain Dump",
    emoji: "📝",
    duration: "10 minutes",
    description: "Clear mental clutter by writing down everything on your mind without filter or judgement.",
    steps: [
      "Grab a pen and paper or open a notes app.",
      "Set a timer for 10 minutes.",
      "Write down absolutely everything that is in your head — worries, tasks, thoughts, feelings.",
      "Do not edit, correct or judge anything you write.",
      "Keep writing until the timer goes off.",
      "Read back what you have written.",
      "Highlight anything that needs action — circle or star it.",
      "Everything else? Let it go — it is out of your head now."
    ],
    tip: "Do not worry about spelling or making sense. This is for your eyes only."
  },

  {
    id: "journal-mood-check",
    category: "journalling",
    title: "Daily Mood Check-In",
    emoji: "📓",
    duration: "5 minutes",
    description: "A structured daily journalling habit to track your emotional wellbeing over time.",
    steps: [
      "Open your journal or notes app.",
      "Write today's date.",
      "Rate your mood from 1-10 and write one word to describe it.",
      "Write one thing that happened today that affected your mood.",
      "Write one thing you are grateful for today.",
      "Write one thing you are looking forward to tomorrow.",
      "Close your journal and take a deep breath."
    ],
    tip: "Doing this at the same time each day — morning or bedtime — builds a powerful habit."
  },

  {
    id: "journal-letter",
    category: "journalling",
    title: "Letter to Yourself",
    emoji: "✉️",
    duration: "15 minutes",
    description: "Write a compassionate letter to yourself — a powerful exercise for self-kindness and perspective.",
    steps: [
      "Find a quiet, comfortable space.",
      "Begin with Dear [your name],",
      "Write about something you have been struggling with recently.",
      "Now imagine a kind, wise friend reading this — what would they say to you?",
      "Write that response with warmth and without judgement.",
      "Acknowledge the effort you have been making.",
      "End with one encouraging sentence for the days ahead.",
      "Seal it away or read it whenever you need a reminder of your worth."
    ],
    tip: "We are often kinder to others than ourselves. This exercise helps close that gap."
  },

  {
    id: "journal-wins",
    category: "journalling",
    title: "Three Wins Journal",
    emoji: "🏆",
    duration: "5 minutes",
    description: "Build confidence and positive momentum by recording your daily wins — big or small.",
    steps: [
      "At the end of each day, open your journal.",
      "Write down 3 things you achieved or did well today.",
      "They can be tiny — getting out of bed, replying to an email, eating a meal.",
      "For each win, write why it mattered.",
      "Read them back and let yourself feel proud.",
      "Notice any patterns in what makes you feel accomplished.",
      "Set one small intention for tomorrow."
    ],
    tip: "On really hard days, surviving is a win. Write that down."
  },

  {
    id: "journal-values",
    category: "journalling",
    title: "Values Reflection",
    emoji: "💡",
    duration: "15 minutes",
    description: "Reconnect with what truly matters to you — a grounding exercise for when life feels unclear.",
    steps: [
      "Find a quiet moment with your journal.",
      "Write down 5 things that matter most to you in life.",
      "For each one, write why it matters.",
      "Now reflect — are you living in line with these values right now?",
      "Write one area where you feel aligned.",
      "Write one area where you feel out of alignment.",
      "Write one small thing you could do this week to move closer to your values.",
      "Close with one sentence about the person you want to be."
    ],
    tip: "Values change over time — revisit this exercise every few months."
  },

  // ---- STRETCHING EXERCISES -----------------------------------
  {
    id: "stretch-neck",
    category: "stretching",
    title: "Neck & Shoulder Release",
    emoji: "🤸",
    duration: "5 minutes",
    description: "Release the tension that builds up in your neck and shoulders from sitting at a desk.",
    steps: [
      "Sit upright in your chair with feet flat on the floor.",
      "Slowly drop your right ear towards your right shoulder — hold for 20 seconds.",
      "Gently return to centre and repeat on the left side.",
      "Slowly roll your head in a half circle from left to right — avoid rolling backwards.",
      "Roll both shoulders backwards 5 times, then forwards 5 times.",
      "Reach your right arm across your chest and hold for 20 seconds — repeat left.",
      "Interlace your fingers and stretch your arms above your head.",
      "Take a deep breath and release."
    ],
    tip: "Do this every hour if you work at a screen — it prevents long-term tension headaches."
  },

  {
    id: "stretch-back",
    category: "stretching",
    title: "Seated Back Stretch",
    emoji: "🪑",
    duration: "5 minutes",
    description: "Relieve lower back pain and stiffness — perfect for students spending long hours studying.",
    steps: [
      "Sit on the edge of your chair with feet flat on the floor.",
      "Place both hands on your knees.",
      "Arch your back gently and look upward — hold for 5 seconds.",
      "Then round your back, tucking your chin to your chest — hold for 5 seconds.",
      "Repeat this cat-cow motion 5 times.",
      "Place your right hand on your left knee and gently twist to the left — hold 20 seconds.",
      "Repeat on the other side.",
      "Sit tall, take a deep breath and release."
    ],
    tip: "Keep movements slow and gentle — never push through pain."
  },

  {
    id: "stretch-full-body",
    category: "stretching",
    title: "Morning Wake-Up Stretch",
    emoji: "☀️",
    duration: "5 minutes",
    description: "Start your day with a gentle full-body stretch to wake up your muscles and boost energy.",
    steps: [
      "Stand up straight with feet hip-width apart.",
      "Reach both arms above your head and stretch as tall as you can — hold 10 seconds.",
      "Slowly fold forward, letting your arms hang — hold 20 seconds.",
      "Stand back up slowly and roll your shoulders back.",
      "Step your feet wide and gently lunge to the right, bending your right knee — hold 15 seconds.",
      "Repeat on the left side.",
      "Return to standing, shake out your arms and legs.",
      "Take 3 deep breaths and smile — you are ready for the day!"
    ],
    tip: "Even 2-3 minutes of movement in the morning sets a positive tone for the whole day."
  },

  {
    id: "stretch-wrist",
    category: "stretching",
    title: "Wrist & Hand Stretch",
    emoji: "🖐️",
    duration: "3 minutes",
    description: "Essential for students who type a lot — prevent wrist strain and tension.",
    steps: [
      "Extend your right arm in front of you, palm facing up.",
      "Use your left hand to gently pull your fingers back towards you — hold 15 seconds.",
      "Flip your palm down and gently press your fingers downward — hold 15 seconds.",
      "Repeat on the left hand.",
      "Make fists with both hands, then spread your fingers wide — repeat 5 times.",
      "Rotate both wrists in circles — 5 times clockwise, 5 times anti-clockwise.",
      "Shake out your hands gently to finish."
    ],
    tip: "Do this before and after long typing sessions to prevent repetitive strain injury."
  },

  {
    id: "stretch-desk-reset",
    category: "stretching",
    title: "Desk Reset Stretch",
    emoji: "💻",
    duration: "3 minutes",
    description: "A quick full-body reset you can do at your desk without leaving your seat.",
    steps: [
      "Sit tall and take one deep breath in and out.",
      "Roll your ankles 5 times in each direction.",
      "Tense your thighs and glutes for 5 seconds, then release.",
      "Roll your shoulders back 5 times slowly.",
      "Gently tilt your head left, right, forward — avoid rolling backwards.",
      "Interlace fingers and stretch arms overhead for 10 seconds.",
      "Twist gently to the right, then to the left — hold 10 seconds each.",
      "Take a final deep breath, sit tall and reset your posture."
    ],
    tip: "Set a reminder every 45 minutes to do this — your body will thank you!"
  }

];

// wellbeingExercises array is available globally

// ---- APPENDED EXERCISES ----