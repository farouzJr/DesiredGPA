function calculateGPA() {
    const targetGPA = parseFloat(document.getElementById("target-gpa").value);
    const nextTermCredits = parseFloat(document.getElementById("next-term-credits").value);
    const previousGPACreditsText = document.getElementById("previous-gpa-credits").value.trim();
    const previousGPACreditsArr = previousGPACreditsText.split("\n");
    let totalCredits = 0;
    let totalGradePoints = 0;
  
    for (let i = 0; i < previousGPACreditsArr.length; i++) {
      const termGPACreditsArr = previousGPACreditsArr[i].split(" ");
      const termGPA = parseFloat(termGPACreditsArr[0]);
      const termCredits = parseFloat(termGPACreditsArr[1]);
  
      if (isNaN(termGPA) || isNaN(termCredits)) {
        document.getElementById("result").innerHTML = "Error: Invalid input for previous GPA and credits.";
        return;
      }
  
      totalGradePoints += termGPA * termCredits;
      totalCredits += termCredits;
    }
  
    const currentGPA = totalGradePoints / totalCredits;
    const currentCredits = totalCredits + nextTermCredits;
    const targetGradePoints = targetGPA * currentCredits;
    const nextTermGradePoints = targetGradePoints - totalGradePoints;
    const nextTermGPA = nextTermGradePoints / nextTermCredits;
  
    if (nextTermGPA > 4.0) {
      document.getElementById("result").innerHTML = "Error: Cannot reach target GPA in the next term.";
      return;
    }
  
    const outputString = `To reach a GPA of ${targetGPA} with ${currentCredits} total credits, you need a GPA of ${nextTermGPA.toFixed(2)} in the next term (${nextTermCredits} credits).`;
  
    document.getElementById("result").innerHTML = outputString;
  }
  


// Get the unique visitor ID from localStorage, or create a new one if it doesn't exist
var visitorId = localStorage.getItem('visitorId');
if (!visitorId) {
  visitorId = Math.floor(Math.random() * 1000000000); // Generate a random ID
  localStorage.setItem('visitorId', visitorId);
}

// Get the list of all visitor IDs that have been stored in localStorage
var visitorIds = localStorage.getItem('visitorIds');
if (!visitorIds) {
  visitorIds = [];
} else {
  visitorIds = JSON.parse(visitorIds);
}

// Add the current visitor's ID to the list if it doesn't already exist
if (visitorIds.indexOf(visitorId) == -1) {
  visitorIds.push(visitorId);
  localStorage.setItem('visitorIds', JSON.stringify(visitorIds));
}

// Increment the total number of website visits
var visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
  visitCount = 0;
}
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Get the total number of unique visitors
var numVisitors = visitorIds.length;

// Display the results in the HTML document
document.getElementById('visitor-count').textContent = numVisitors;
document.getElementById('visit-count').textContent = visitCount;
