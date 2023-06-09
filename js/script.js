var calcBrutBtn = document.getElementById("calcBrut");
calcBrutBtn.addEventListener("click", calculateBrut);

var calcNetBtn = document.getElementById("calcNet");
calcNetBtn.addEventListener("click", calculateNet);

var netInput = document.getElementById("net");
netInput.addEventListener("input", restrictInputToNumbers);

var brutInput = document.getElementById("brut");
brutInput.addEventListener("input", restrictInputToNumbers);

function calculateBrut() {
    var netSalary = parseFloat(netInput.value);

    if (isNaN(netSalary)) {
        Swal.fire({
            icon: 'error',
            title: 'Eroare',
            text: 'Vă rugăm introduceți o valoare numerică pentru salariul net.',
        });
        return;
    }

    var impozit = calculateImpozit(netSalary);
    var cas = calculateCAS(netSalary);
    var brutSalary = netSalary + impozit + cas;

    brutInput.value = brutSalary.toFixed(2);
}

function calculateNet() {
    var brutSalary = parseFloat(brutInput.value);

    if (isNaN(brutSalary)) {
        Swal.fire({
            icon: 'error',
            title: 'Eroare',
            text: 'Vă rugăm introduceți o valoare numerică pentru salariul brut.',
        });
        return;
    }

    var impozit = calculateImpozit(brutSalary);
    var cas = calculateCAS(brutSalary);
    var netSalary = brutSalary - impozit - cas;

    netInput.value = netSalary.toFixed(2);
}

function restrictInputToNumbers(event) {
    var input = event.target;
    var sanitizedValue = input.value.replace(/\D/g, "");
    input.value = sanitizedValue;
}

function calculateImpozit(salary) {
    var impozit = salary * 0.1;
    return impozit;
}

function calculateCAS(salary) {
    var cas = salary * 0.25;
    return cas;
}

