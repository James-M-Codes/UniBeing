// ============================================================
// security.js — UniBeing Web App Security
// XSS Prevention & Input Sanitisation
// ============================================================

// ---- 1. INPUT SANITISATION ---------------------------------
// Escapes all HTML special characters from user input
// Prevents XSS attacks via the BeingBot chat input

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .replace(/`/g, '&#x60;')
    .replace(/=/g, '&#x3D;');
}

// ---- 2. INPUT LENGTH LIMIT ---------------------------------
// Prevents excessively long inputs that could be used
// to attempt buffer overflow or denial-of-service attacks

const MAX_INPUT_LENGTH = 300;

function enforceInputLimit() {
  const inputField = document.getElementById('user-input');
  if (!inputField) return;
  inputField.setAttribute('maxlength', MAX_INPUT_LENGTH);
  inputField.addEventListener('input', function () {
    if (this.value.length > MAX_INPUT_LENGTH) {
      this.value = this.value.substring(0, MAX_INPUT_LENGTH);
    }
  });
}

// ---- 3. LOCALSTORAGE SANITISATION --------------------------
// Validates data read from localStorage before rendering
// Prevents stored XSS attacks via manipulated localStorage values

function sanitizeLocalStorageData(data) {
  if (Array.isArray(data)) {
    return data.map(item => {
      if (typeof item === 'object' && item !== null) {
        const clean = {};
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            clean[sanitizeInput(key)] = sanitizeInput(String(item[key]));
          }
        }
        return clean;
      }
      return sanitizeInput(String(item));
    });
  }
  return sanitizeInput(String(data));
}

// ---- 4. SAFE localStorage READ -----------------------------
// A safe wrapper for reading localStorage that validates
// JSON and handles malformed data without crashing the app

function safeLocalStorageGet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (e) {
    console.warn('UniBeing Security: Invalid localStorage data for key:', key);
    localStorage.removeItem(key); // Clear corrupted/malicious data
    return null;
  }
}

// ---- 5. RATE LIMITING --------------------------------------
// Prevents spam and brute-force style attacks on the chatbot
// Limits user to 20 messages per minute

const rateLimiter = (function () {
  const timestamps = [];
  const LIMIT = 20;       // max messages
  const WINDOW = 60000;   // per 60 seconds

  return {
    isAllowed: function () {
      const now = Date.now();
      // Remove timestamps older than the window
      while (timestamps.length && timestamps[0] < now - WINDOW) {
        timestamps.shift();
      }
      if (timestamps.length >= LIMIT) {
        return false;
      }
      timestamps.push(now);
      return true;
    }
  };
})();

// ---- 6. INITIALISE ON DOM READY ----------------------------
document.addEventListener('DOMContentLoaded', function () {
  enforceInputLimit();
  console.log('UniBeing: Security layer initialised ✅');
});