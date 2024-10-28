function submitForm() {
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('educationError').textContent = '';
    document.getElementById('applyToError').textContent = '';

    let isValid = true;

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const checkboxes = document.querySelectorAll('input[name="education"]:checked');
    const applyTo = document.getElementById('applyTo').value;

    // Validation checks
    if (!name) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    if (checkboxes.length === 0) {
        document.getElementById('educationError').textContent = 'Please select at least one education level.';
        document.getElementById('educationError').style.display = 'block';
        isValid = false;
    }

    if (!applyTo) {
        document.getElementById('applyToError').textContent = 'Please select where you want to apply.';
        document.getElementById('applyToError').style.display = 'block';
        isValid = false;
    }

    // If all validations pass, show the selected values
    if (isValid) {
        let selectedEducation = [];
        checkboxes.forEach((checkbox) => {
            selectedEducation.push(checkbox.value);
        });

        const result = `
            Name: ${name}
            Gender: ${gender.value}
            Education: ${selectedEducation.join(", ")}
            Apply To: ${applyTo}
        `;
        console.log(result); // Optionally, you can display this information in the console
    }
}
