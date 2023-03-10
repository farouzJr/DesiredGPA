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
  
