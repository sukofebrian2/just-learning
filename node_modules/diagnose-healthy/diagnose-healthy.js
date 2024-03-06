const readline = require('readline-sync');

// Daftar gejala penyakit
const symptoms = {
    flu: ['cough', 'fever', 'runny nose'],
    cold: ['sneezing', 'sore throat', 'runny nose'],
    allergies: ['sneezing', 'itchy eyes', 'runny nose'],
};

function diagnose() {
    console.log('Welcome to Symptom Checker!');
    console.log('Please select one of the following symptoms:');
    console.log('1. Cough');
    console.log('2. Fever');
    console.log('3. Runny nose');
    console.log('4. Sneezing');
    console.log('5. Sore throat');
    console.log('6. Itchy eyes');

    const selectedSymptoms = [];
    for (let i = 1; i <= 3; i++) {
        const symptomIndex = parseInt(readline.question(`Enter symptom ${i}: `));
        switch (symptomIndex) {
            case 1:
                selectedSymptoms.push('cough');
                break;
            case 2:
                selectedSymptoms.push('fever');
                break;
            case 3:
                selectedSymptoms.push('runny nose');
                break;
            case 4:
                selectedSymptoms.push('sneezing');
                break;
            case 5:
                selectedSymptoms.push('sore throat');
                break;
            case 6:
                selectedSymptoms.push('itchy eyes');
                break;
            default:
                console.log('Invalid input. Please enter a number between 1 and 6.');
                i--;
                break;
        }
    }

    console.log('\nBased on the symptoms you provided, you may have:');
    Object.keys(symptoms).forEach(disease => {
        if (selectedSymptoms.every(symptom => symptoms[disease].includes(symptom))) {
            console.log(`- ${disease}`);
        }
    });
}

diagnose();
