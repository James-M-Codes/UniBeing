// ============================================================
// gdpr.js — UniBeing GDPR Compliance
// Data Notice, User Consent & Right to Erasure
// ============================================================

// ---- DATA NOTICE TEXT -------------------------------------
const gdprNoticeText = `
  UniBeing stores the following data locally on your device only:
  • Your mood history (last 7 entries)
  • Your dyslexia mode preference
  • Your wellbeing streak and visit count
  • Your badge progress

  This data is stored in your browser's localStorage and is never 
  sent to any server. You can delete all your data at any time 
  using the Reset button below.
`;

// ---- SHOW GDPR NOTICE ON FIRST VISIT ----------------------
function showGdprNotice() {
  if (localStorage.getItem('gdprAccepted') === 'true') return;

  const overlay = document.createElement('div');
  overlay.id = 'gdpr-overlay';
  overlay.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    border-top: 3px solid #4ab8c1;
    padding: 1.5em 2em;
    box-shadow: 0 -4px 18px rgba(0,0,0,0.12);
    font-family: 'Nunito', Arial, sans-serif;
    font-size: 0.9em;
    color: #2d3748;
    z-index: 9998;
    max-width: 800px;
    margin: 0 auto;
  `;

  overlay.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:1em;flex-wrap:wrap;">
      <div style="flex:1;min-width:200px;">
        <strong style="color:#2e8f97;font-size:1em;">🔒 Your Data & Privacy</strong>
        <p style="margin:0.5em 0 0 0;line-height:1.6;">
          UniBeing stores your mood history, streak, badges and preferences 
          <strong>locally on your device only</strong> — nothing is ever sent to a server. 
          You can delete all your data at any time.
        </p>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.5em;min-width:160px;">
        <button id="gdpr-accept" style="
          background: linear-gradient(135deg, #4ab8c1, #5b9bd5);
          color: white;
          border: none;
          border-radius: 20px;
          padding: 0.5em 1.2em;
          font-family: 'Nunito', Arial, sans-serif;
          font-weight: 700;
          font-size: 0.9em;
          cursor: pointer;
        ">Got it 👍</button>
        <button id="gdpr-reset" style="
          background: white;
          color: #e05050;
          border: 2px solid #e05050;
          border-radius: 20px;
          padding: 0.5em 1.2em;
          font-family: 'Nunito', Arial, sans-serif;
          font-weight: 700;
          font-size: 0.9em;
          cursor: pointer;
        ">🗑️ Clear My Data</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('gdpr-accept').addEventListener('click', function () {
    localStorage.setItem('gdprAccepted', 'true');
    overlay.style.transition = 'opacity 0.4s';
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 400);
  });

  document.getElementById('gdpr-reset').addEventListener('click', function () {
    if (confirm('Are you sure you want to delete all your UniBeing data? This cannot be undone.')) {
      clearAllUserData();
      localStorage.setItem('gdprAccepted', 'true');
      overlay.remove();
      alert('All your data has been deleted. 💙');
    }
  });
}

// ---- CLEAR ALL USER DATA (Right to Erasure) ---------------
function clearAllUserData() {
  localStorage.removeItem('moodHistory');
  localStorage.removeItem('dyslexiaMode');
  localStorage.removeItem('currentStreak');
  localStorage.removeItem('lastVisitDate');
  localStorage.removeItem('numOfVisits');
  localStorage.removeItem('unlockedBadges');
  localStorage.removeItem('chatCount');
  localStorage.removeItem('exerciseCount');
  localStorage.removeItem('gdprAccepted');
  localStorage.removeItem('userLevel');
  localStorage.removeItem('userPoints');
  localStorage.removeItem('progressBar');
  console.log('UniBeing: All user data cleared ✅');
}

// ---- INITIALISE ON PAGE LOAD ------------------------------
document.addEventListener('DOMContentLoaded', function () {
  showGdprNotice();
  console.log('UniBeing: GDPR module initialised ✅');
});