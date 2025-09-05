// Function to calculate Arithmetic Progression (AP)
function calculateAP() {
    const a = parseFloat(document.getElementById('ap-a').value);
    const d = parseFloat(document.getElementById('ap-d').value);
    const n = parseInt(document.getElementById('ap-n').value);
    const outputDiv = document.getElementById('ap-output');

    // Input validation
    if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) {
        outputDiv.innerHTML = '<span style="color:red;">Please enter valid numbers for all fields. Number of terms (n) must be greater than 0.</span>';
        return;
    }

    // Calculate nth term and sum
    const nthTerm = a + (n - 1) * d;
    const sum = (n / 2) * (2 * a + (n - 1) * d);
    
    // Generate the sequence of terms
    let sequence = '';
    for (let i = 0; i < n; i++) {
        sequence += (a + i * d).toFixed(2);
        if (i < n - 1) {
            sequence += ', ';
        }
    }
    
    // Display results
    outputDiv.innerHTML = `
        <p><strong>Sequence:</strong> ${sequence}</p>
        <p><strong>n-th Term ($a_n$):</strong> ${nthTerm.toFixed(2)}</p>
        <p><strong>Sum of Terms ($S_n$):</strong> ${sum.toFixed(2)}</p>
    `;
}

// Function to calculate Geometric Progression (GP)
function calculateGP() {
    const a = parseFloat(document.getElementById('gp-a').value);
    const r = parseFloat(document.getElementById('gp-r').value);
    const n = parseInt(document.getElementById('gp-n').value);
    const outputDiv = document.getElementById('gp-output');

    // Input validation
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        outputDiv.innerHTML = '<span style="color:red;">Please enter valid numbers for all fields. Number of terms (n) must be greater than 0.</span>';
        return;
    }

    // Calculate nth term
    const nthTerm = a * Math.pow(r, n - 1);

    // Calculate sum of terms
    let sum = 0;
    if (r === 1) {
        sum = a * n;
    } else {
        sum = a * (1 - Math.pow(r, n)) / (1 - r);
    }

    // Generate the sequence of terms
    let sequence = '';
    for (let i = 0; i < n; i++) {
        sequence += (a * Math.pow(r, i)).toFixed(2);
        if (i < n - 1) {
            sequence += ', ';
        }
    }
    
    // Display results
    outputDiv.innerHTML = `
        <p><strong>Sequence:</strong> ${sequence}</p>
        <p><strong>n-th Term ($a_n$):</strong> ${nthTerm.toFixed(2)}</p>
        <p><strong>Sum of Terms ($S_n$):</strong> ${sum.toFixed(2)}</p>
    `;
}