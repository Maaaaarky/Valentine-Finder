function validateForm() {
    var civilStatusInputs = document.querySelectorAll('input[name="civil-status"]');
    var isChecked = false;
    civilStatusInputs.forEach(function(input) {
        if (input.checked) {
            isChecked = true;
        }
    });
    if (!isChecked) {
        alert('Please select a civil status.');
        return false;
    }

    var partnerCivilStatusCheckboxes = document.querySelectorAll('input[name="partner\'s-civil-status"]:checked');
    if (partnerCivilStatusCheckboxes.length === 0) {
        alert('Please select at least one partner\'s civil status.');
        return false;
    }

    var partnerCivilStatusValues = [];
    partnerCivilStatusCheckboxes.forEach(function(checkbox) {
        partnerCivilStatusValues.push(checkbox.value);
    });

    document.getElementById('partner-civil-status').value = partnerCivilStatusValues.join(',');

    return true;
}

function proceedToForm() {
    if (document.getElementById('agreeCheckbox').checked) {
        window.location.href = 'forms.html';
    } else {
        alert('Please agree to proceed.');
    }
}

function showOtherInput() {
    var otherInput = document.getElementById('other-gender');
    var genderSelect = document.getElementById('gender');
    if (genderSelect.value === 'Other') {
        otherInput.disabled = false;
    } else {
        otherInput.disabled = true;
        otherInput.value = '';
    }
}

function showOtherInput1() {
    var otherInput = document.getElementById('other-partner-gender');
    var genderSelect = document.getElementById('partner-gender');
    if (genderSelect.value === 'Other') {
        otherInput.disabled = false;
    } else {
        otherInput.disabled = true;
        otherInput.value = '';
    }
}
