/**
 * UniBeing - The Badge Award System
 * Original structure: LH (Luke)
 * Completed and expanded: RN (Rose)
 */

// ---- BADGE OBJECTS ----------------------------------------
const uniBadges = [
  {
    id: "badgeDay1",
    name: "First Day on UniBeing",
    icon: "🌱",
    description: "Log onto UniBeing for the first time.",
    milestone: "visit_1"
  },
  {
    id: "badgeDay7",
    name: "First Week on UniBeing",
    icon: "🔥",
    description: "Log onto UniBeing for seven consecutive days.",
    milestone: "streak_7"
  },
  {
    id: "badgeDay14",
    name: "Two Weeks on UniBeing",
    icon: "⭐",
    description: "Log onto UniBeing for fourteen consecutive days.",
    milestone: "streak_14"
  },
  {
    id: "badgeDay21",
    name: "Frequent Visitor",
    icon: "🏆",
    description: "Log onto UniBeing for 21 consecutive days.",
    milestone: "streak_21"
  },
  {
    id: "badgeMood1",
    name: "Mood Tracker",
    icon: "😊",
    description: "Log your mood for the first time.",
    milestone: "mood_1"
  },
  {
    id: "badgeMood7",
    name: "Mood Master",
    icon: "🌈",
    description: "Log your mood 7 times.",
    milestone: "mood_7"
  },
  {
    id: "badgeChat1",
    name: "First Chat",
    icon: "💬",
    description: "Send your first message to BeingBot.",
    milestone: "chat_1"
  },
  {
    id: "badgeChat5",
    name: "BeingBot Friend",
    icon: "🤖",
    description: "Chat with BeingBot 5 times.",
    milestone: "chat_5"
  },
  {
    id: "badgeExercise1",
    name: "Wellbeing Explorer",
    icon: "🧘",
    description: "Open a wellbeing exercise for the first time.",
    milestone: "exercise_1"
  },
  {
    id: "badgeExercise5",
    name: "Wellbeing Champion",
    icon: "💪",
    description: "Complete 5 wellbeing exercises.",
    milestone: "exercise_5"
  }
];

// ---- BOOLEANS (Luke's original structure ) ------------
let badgesUnlocked = false;
let unlockedDay1Badge   = false;
let unlockedDay7Badge   = false;
let unlockedDay14Badge  = false;
let unlockedDay21Badge  = false;
let hasVisitedSite      = false;

// ---- LOAD UNLOCKED BADGES FROM LOCALSTORAGE ---------------
function loadUnlockedBadges() {
  return JSON.parse(localStorage.getItem("unlockedBadges") || "[]");
}

function saveUnlockedBadges(unlocked) {
  localStorage.setItem("unlockedBadges", JSON.stringify(unlocked));
}

function isBadgeUnlocked(badgeId) {
  return loadUnlockedBadges().includes(badgeId);
}

// ---- AWARD A BADGE ----------------------------------------
function awardBadge(badgeId) {
  const unlocked = loadUnlockedBadges();
  if (unlocked.includes(badgeId)) return; // Already unlocked

  unlocked.push(badgeId);
  saveUnlockedBadges(unlocked);

  const badge = uniBadges.find(b => b.id === badgeId);
  if (badge) {
    showBadgeNotification(badge);
    renderBadges();
  }
}

// ---- SHOW BADGE UNLOCKED NOTIFICATION ---------------------
function showBadgeNotification(badge) {
  // Remove any existing notification
  const existing = document.getElementById("badge-notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.id = "badge-notification";
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #4ab8c1, #5b9bd5);
    color: white;
    padding: 1em 1.5em;
    border-radius: 16px;
    box-shadow: 0 4px 18px rgba(74,184,193,0.4);
    font-family: 'Nunito', Arial, sans-serif;
    font-weight: 700;
    font-size: 0.95em;
    z-index: 9999;
    animation: slideIn 0.4s ease;
    max-width: 280px;
  `;
  const iconHtml = badgeImages[badge.id]
    ? `<img src="${badgeImages[badge.id]}" alt="${badge.name}" style="width:48px;height:48px;border-radius:50%;" onerror="this.style.display='none'">`
    : `<div style="font-size:1.8em;margin-bottom:0.3em;">${badge.icon}</div>`;
  notification.innerHTML = `
    ${iconHtml}
    <div style="margin-top:0.3em;">🏅 Badge Unlocked!</div>
    <div style="font-weight:400;font-size:0.9em;margin-top:0.2em;">${badge.name}</div>
  `;

  // Add slide-in animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(120%); opacity: 0; }
      to   { transform: translateX(0);    opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(notification);

  // Auto dismiss after 4 seconds
  setTimeout(() => {
    notification.style.transition = "opacity 0.5s";
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 500);
  }, 4000);
}

// ---- RENDER BADGES IN ASIDE PANEL -------------------------
// Luke's badge image map
const badgeImages = {
  badgeDay1:  "images/Day1Badge.png",
  badgeDay7:  "images/Day7Badge.png",
  badgeDay14: "images/Day14Badge.png",
  badgeDay21: "images/Day21Badge.png"
};

function renderBadges() {
  const badgeDisplay = document.getElementById("badge-display");
  if (!badgeDisplay) return;

  const unlocked = loadUnlockedBadges();

  if (unlocked.length === 0) {
    badgeDisplay.innerHTML = "<p style='font-size:0.9em;color:#888;font-family:Nunito,Arial,sans-serif;'>Keep using UniBeing to earn badges! 🏅</p>";
    return;
  }

  badgeDisplay.innerHTML = unlocked.map(id => {
    const badge = uniBadges.find(b => b.id === id);
    if (!badge) return '';
    // Use Luke's badge images
    if (badgeImages[id]) {
      return `<span title="${badge.name}: ${badge.description}" style="display:inline-block;margin:0.3em;cursor:help;">
        <img src="${badgeImages[id]}" alt="${badge.name}" style="width:48px;height:48px;border-radius:50%;" onerror="this.style.display='none';this.nextSibling.style.display='inline';">
        <span style="display:none;font-size:1.8em;">${badge.icon}</span>
      </span>`;
    }
    return `<span title="${badge.name}: ${badge.description}" style="display:inline-block;font-size:1.8em;margin:0.2em;cursor:help;">${badge.icon}</span>`;
  }).join('');
}

// ---- MILESTONE CHECKS -------------------------------------

// Check visit milestones (Luke's original logic - fixed and expanded)
function checkVisitMilestone() {
  if (!hasVisitedSite) {
    let numOfVisits = parseInt(localStorage.getItem("numOfVisits") || "0");
    numOfVisits += 1;
    hasVisitedSite = true;
    localStorage.setItem("numOfVisits", numOfVisits);

    if (numOfVisits >= 1) {
      awardBadge("badgeDay1");
      unlockedDay1Badge = true;
    }
  }
}

// Check streak milestones
function checkStreakMilestone(streakDays) {
  if (streakDays >= 7)  { awardBadge("badgeDay7");  unlockedDay7Badge  = true; }
  if (streakDays >= 14) { awardBadge("badgeDay14"); unlockedDay14Badge = true; }
  if (streakDays >= 21) { awardBadge("badgeDay21"); unlockedDay21Badge = true; }
}

// Check mood log milestones
function checkMoodMilestone() {
  const history = JSON.parse(localStorage.getItem("moodHistory") || "[]");
  if (history.length >= 1) awardBadge("badgeMood1");
  if (history.length >= 7) awardBadge("badgeMood7");
}

// Check BeingBot chat milestones
function checkChatMilestone() {
  let chatCount = parseInt(localStorage.getItem("chatCount") || "0");
  chatCount += 1;
  localStorage.setItem("chatCount", chatCount);
  if (chatCount >= 1) awardBadge("badgeChat1");
  if (chatCount >= 5) awardBadge("badgeChat5");
}

// Check exercise milestones
function checkExerciseMilestone() {
  let exerciseCount = parseInt(localStorage.getItem("exerciseCount") || "0");
  exerciseCount += 1;
  localStorage.setItem("exerciseCount", exerciseCount);
  if (exerciseCount >= 1) awardBadge("badgeExercise1");
  if (exerciseCount >= 5) awardBadge("badgeExercise5");
}

// ---- STREAK CHECK  --
function streakCheck() {
  const streak = parseInt(localStorage.getItem("currentStreak") || "0");
  checkStreakMilestone(streak);
}

// ---- INITIALISE ON PAGE LOAD ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  checkVisitMilestone();
  checkMoodMilestone();
  streakCheck();
  renderBadges();
});