document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const liquorConsumption = parseInt(document.getElementById('liquorConsumption').value);
    const smokingFrequency = parseInt(document.getElementById('smokingFrequency').value);
    const hypertension = document.getElementById('hypertension').checked;
    const diabetes = document.getElementById('diabetes').checked;
    const heartDisease = document.getElementById('heartDisease').checked;
    const asthma = document.getElementById('asthma').checked;
    const highCholesterol = document.getElementById('highCholesterol').checked;
    const kidneyDisease = document.getElementById('kidneyDisease').checked;
    const liverDisease = document.getElementById('liverDisease').checked;

    // Calculate health score (example calculation)
    let healthScore = 100;

    // Adjust health score based on gender and age
    if (gender === 'male') {
        healthScore -= (age >= 18 && age <= 40) ? 0 : (age < 18 ? 5 : 10);
    } else if (gender === 'female') {
        healthScore -= (age >= 18 && age <= 40) ? 5 : (age < 18 ? 10 : 15);
    } else {
        healthScore -= (age >= 18 && age <= 40) ? 2 : (age < 18 ? 7 : 12);
    }

    // Adjust health score based on BMI, liquor consumption, and smoking frequency
    healthScore -= Math.max((bmi > 25) ? ((bmi - 25) * 2) : 0, 0);
    healthScore -= Math.max((liquorConsumption > 14) ? ((liquorConsumption - 14) * 1) : 0, 0);
    healthScore -= Math.max((smokingFrequency > 10) ? ((smokingFrequency - 10) * 2) : 0, 0);

    // Adjust health score based on health conditions
    if (hypertension) {
        healthScore -= 5;
    }
    if (diabetes) {
        healthScore -= 5;
    }
    if (heartDisease) {
        healthScore -= 5;
    }
    if (asthma) {
        healthScore -= 5;
    }
    if (highCholesterol) {
        healthScore -= 5;
    }
    if (kidneyDisease) {
        healthScore -= 15;
    }
    if (liverDisease) {
        healthScore -= 15;
    }

    // Ensure health score is not less than 0
    healthScore = Math.max(healthScore, 0);

    // Display health score
    const healthScoreElement = document.getElementById('healthScore');
    healthScoreElement.textContent = `Your Health Score is: ${healthScore}`;
    document.getElementById('results').style.display = 'block';

    // Update health meter
    const healthMeter = document.getElementById('healthMeter');
    healthMeter.value = healthScore;

    // Update meter color based on health score ranges
    if (healthScore <= 35) {
        healthMeter.color = 'red';
    } else if (healthScore <= 65) {
        healthMeter.color = 'yellow';
    } else if (healthScore <= 90) {
        healthMeter.color = 'green';
    } else {
        healthMeter.color = 'pink';
    }
});
