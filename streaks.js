//--------------improving data storage-------------
const DEFAULT_USER_DATA = {
    streak: 0,
    lastVisit: null,
    points: 0,
    level: 1,
};
function getUserData() {
    const rawData = safeLocalStorageGet('uniBeingData');
    if (!rawData) {
        localStorage.setItem('uniBeingData', JSON.stringify(DEFAULT_USER_DATA));
        return { ...DEFAULT_USER_DATA };
    }
    try {
        const parsedData = JSON.parse(rawData);
        return {
            streak: Number.isInteger(parsedData.streak) && parsedData.streak >= 0 ? parsedData.streak : 0,
            lastVisit:
                typeof parsedData.lastVisit === "string" || parsedData.lastVisit === null
                    ? parsedData.lastVisit
                    : null,
            points: Number.isInteger(parsedData.points) && parsedData.points >= 0
                ? parsedData.points
                : 0,

            level: Number.isInteger(parsedData.level) && parsedData.level >= 1
                ? parsedData.level
                : 1
        };
    } catch (error) {
        localStorage.setItem('uniBeingData', JSON.stringify(DEFAULT_USER_DATA));
        return { ...DEFAULT_USER_DATA };
    }
}

function saveUserData(data) {
    localStorage.setItem('uniBeingData', JSON.stringify(data));
    return data;
}

//-----------------data comparison logic-----------------
function toLocalISODate(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function diffDaysLocal(aStr, bStr) {
    const [ay, am, ad] = aStr.split('-').map(Number);
    const [by, bm, bd] = bStr.split('-').map(Number);

    const a = new Date(ay, am - 1, ad);
    const b = new Date(by, bm - 1, bd);

    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((b - a) / msPerDay);
}

//--------------------calculating streak-------------------
function updateStreak() {
    const today = toLocalISODate();
    const userData = getUserData();

    if (!userData.lastVisit) {
        userData.streak = 1;
        userData.points += 5;
    } else {
        const difference = diffDaysLocal(userData.lastVisit, today);
        if (difference === 0) {
        }
        else if (difference === 1) {
            userData.streak += 1;
            userData.points += 20;
            saveUserData()
        }
        else if (difference > 1) {
            userData.streak = 1;
        }
    }
    userData.lastVisit = today;
    userData.level = calculateLevel(userData.points);
    saveUserData(userData);
    //return userData.streak;
}

function getCurrentStreak() {
    return getUserData().streak;
}
function displayStreak() {
    const streakElement = document.getElementById("streak-display");
    if (!streakElement) return;
    const streak = getCurrentStreak();
    streakElement.textContent =
        `Current streak: ${streak} day${streak === 1 ? "" : "s"} 🔥`;
}
document.addEventListener("DOMContentLoaded", function () {
    const streak = updateStreak();
    displayStreak();
    if (typeof displayLevel === "function") {
        displayLevel();
    }
    console.log("Page loaded");
    console.log("User Data:", getUserData());
    console.log("Current Streak:", streak);
});