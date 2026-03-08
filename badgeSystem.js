/**
 * UniBeing - The Badge Award System
 */

// Booleans for checking badges
let badgesUnlocked = false;
let unlockedDay1Badge = false;
let unlockedDay7Badge = false;
let unlockedDay14Badge = false;
let unlockedDay21Badge = false;

let hasVisitedSite = false;

function streakCheck()
{

}

function awardBadge()
{
    if (!hasVisitedSite)
    {
        let numOfVisits = localStorage.getItem("numOfVisits");

            if (!numOfVisits)
            {
                numOfVisits = 0;
            }
        numOfVisits += 1;
        hasVisitedSite = true;

        localStorage.setItem("numOfVisits", numOfVisits);

        if (numOfVisits >= 1) // Ready to award the Day1 Badge
        {
            if (Image.disabled)
            {    
                document.querySelector("badgeDay1").disabled = false;
                unlockedDay1Badge = true;
            }
        }
    }
}