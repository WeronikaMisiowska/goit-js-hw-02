const message1 = "Latest technology news";


function checkForSpam(message1) {
    const lowerCaseMessage1 = message1.toLowerCase();
    if (lowerCaseMessage1.includes("spam") || lowerCaseMessage1.includes("sale")) {
        return true;
    }
    else {
        return false;
    }
}


