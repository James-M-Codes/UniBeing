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
    title: "Gratitude Practice",
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
  }

];

// wellbeingExercises array is available globally
