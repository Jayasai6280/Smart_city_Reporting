// ===============================
// AUTO CALCULATE AGE FROM DOB
// ===============================
document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);

    if (!this.value) {
        document.getElementById('age').value = '';
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }

    document.getElementById('age').value = age;
});

// ===============================
// FORM SUBMISSION (DEMO MODE)
// ===============================
document.getElementById('issueForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show confirmation message
    document.getElementById('confirmation').innerText =
        "✅ Issue submitted successfully! (Demo mode – backend not connected)";

    // Optional: reset form after submit
    this.reset();
    document.getElementById('age').value = '';
});
