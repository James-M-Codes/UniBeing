Progression.js
//------------progression system-------------
function calculateLevel(points){
    if (points >= 1000) {
        return 5;
    } else if (points >= 500) {
        return 4;
    } else if (points >= 250) {
        return 3;
    } else if (points >= 100) {
        return 2;
    } else {
        return 1;
    }
}
function addPoints(amount) {
    const userData = getUserData();
    if (!Number.isInteger(amount) || amount <= 0) {
        console.error("Invalid points value:");
        return userData.points;
    }
    userData.points += amount;
    userData.level = calculateLevel(userData.points);
    saveUserData(userData);
    return userData.points;
}
function getCurrentLevel() {
    return getUserData().level;
}
function getCurrentPoints() {
    return getUserData().points;
}
//-----------display level in header------------------
//add container for level display in html <div id="levelDisplay"></div>
//for now not sure where to put
function displayLevel() {
    const userData = getUserData();
    const levelElement = document.getElementById('levelDisplay');
    if (!levelElement) return;
    levelElement.textContent = `Level: ${userData.level} |${userData.points} XP`;

}
//-------------show progress bar--------------------
//add this under level display <div class="progress-container"><div id="progress-bar" <div id="progress-text"></div></div>
function getLevelThreshold(level) {
    if (level === 1) return { min: 0, max: 100 };
    if (level === 2) return { min: 100, max: 250 };
    if (level === 3) return { min: 250, max: 500 };
    if (level === 4) return { min: 500, max: 1000 };
    return {min: 1000, max: 1000};
}
function updateProgressBar() {
    const userData = getUserData();
    const {min, max} = getLevelThreshold(userData.level);
    const progress = userData.points - min;
    const totalNeeded = max - min;
    const percent = totalNeeded > 0 ? (progress / totalNeeded) * 100 : 100;
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('progress-text');
    if (bar) bar.style.width = percent + "%";
    if (text && userData.level < 5) {
        text.textContent = `${userData.points} / ${max} XP`;
    }
    if (text && userData.level === 5) {
        text.textContent = `Max Level Reached`;
    }
}
//----------------reset function for testing----------------
function resetUserData() {
    localStorage.removeItem('uniBeingData');
    console.log("User data reset.");
    location.reload();
}
// we can add a temp reset button in html if wanted
//<button onclick='resetUserData()">Reset progress</button>"

