document.getElementById('deliveryMode').addEventListener('change', function() {
    const deliveryDetails = document.getElementById('deliveryDetails');
    if (this.value === 'address') {
        deliveryDetails.style.display = 'block';
    } else {
        deliveryDetails.style.display = 'none';
    }
});

document.getElementById('product').addEventListener('change', function() {
    const configuration = document.getElementById('configuration');
    configuration.innerHTML = ''; // Clear previous options

    if (this.value === 'laptop') {
        configuration.innerHTML = `
            <option value="basic">Basic</option>
            <option value="advanced">Advanced</option>
        `;
    } else if (this.value === 'phone') {
        configuration.innerHTML = `
            <option value="standard">Standard</option>
            <option value="pro">Pro</option>
        `;
    } else if (this.value === 'tablet') {
        configuration.innerHTML = `
            <option value="mini">Mini</option>
            <option value="full">Full</option>
        `;
    }
});