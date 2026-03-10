Streaks.js

//-------improving data storage-------------
const DEFAULT_USER_DATA = {
    streak: 0,
    lastVisit: null,
    points: 0,
    level: 1,
};
function getUserData() {
    const dataStr = localStorage.getItem('uniBeingData');
    if (!rawData) {
        localStorage.setItem('uniBeingData', JSON.stringify(DEFAULT_USER_DATA));
        return {...DEFAULT_USER_DATA};
    }
    try {
        const parsedData = JSON.parse(rawData);
        return{
            streak: Number.isInteger(parsedData.streak) && parsedData.streak >= 0? parsedData.streak :0,
            lastVisit: typeof parsedData.lastVisit === "string" || parsedData.lastVisit === null
                ? parsedData.lastVisit : null,
            points: Number.isInteger(parsedData.points) && parsedData.points >= 0 ? parsedData.points : 0,
            level: Number.isInteger(parsedData.level) && parsedData.level >= 1 ? parsedData.level : 1
        };
    }catch (error) {
        localStorage.setItem('uniBeingData', JSON.stringify(DEFAULT_USER_DATA));
        return {...DEFAULT_USER_DATA};
    }
}
function saveUserData(data) {
    localStorage.setItem('uniBeingData', JSON.stringify(data));
}


//-----Date Comparison Logic---------------------------------------
function toLocalISODate(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
function diffDaysLocal(aStr, bStr) {
    const [ay,am,ad] = aStr.split('-').map(Number);
    const [by,bm,bd] = bStr.split('-').map(Number);
    const a = new Date(ay, am - 1, ad);
    const b = new Date(by, bm - 1, bd);
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((b - a) / msPerDay);
}
//-----testing it works---------------------------------------
//console.log(toLocalISODate());
//console.log(diffDaysLocal("2026-03-09", "2026-03-10"));

//------track last visit--------------------------------
function saveLastVisit() {
    const today = toLocalISODate();
    localStorage.setItem('lastVisit', today);
}
function getLastVisit() {
    return localStorage.getItem('lastVisit');
}

//--------calculate streak--------------------------------
function updateStreak() {
    const today = toLocalISODate();
    const lastVisit = getLastVisit();
    let streak = parseInt(localStorage.getItem("streak"), 10) || 0;
    if (!lastVisit) {
        streak = 1;
    } else {
        const difference = diffDaysLocal(lastVisit, today);
        if (difference === 0) {
        } else if (difference === 1) {
            streak += 1;
        } else if (difference > 1) {
            streak = 1;
        }
    }
    localStorage.setItem("streak", streak);
    saveLastVisit();
    return streak;
}
function getCurrentStreak() {
    return parseInt(localStorage.getItem("streak"), 10) || 0;
}

//----------test data persists----------------------
document.addEventListener("DOMContentLoaded", function(){
    const streak = updateStreak();
    console.log("Page loaded");
    console.log("Last Visit:", getLastVisit());
    console.log("Current Streak:", streak);
});

