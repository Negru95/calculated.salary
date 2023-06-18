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

    var cas = calculateCAS(netSalary);
    var cass = calculateCASS(netSalary);
    var dp = calculateDP(netSalary);
    var impozit = calculateImpozit(netSalary);
    var brutSalary = netSalary + cas + cass + dp + impozit;

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

    var cas = calculateCAS(brutSalary);
    var cass = calculateCASS(brutSalary);
    var dp = calculateDP(brutSalary);
    var impozit = calculateImpozit(brutSalary);
    var netSalary = brutSalary - cas - cass - dp - impozit;

    netInput.value = netSalary.toFixed(2);
}

function restrictInputToNumbers(event) {
    var input = event.target;
    var sanitizedValue = input.value.replace(/\D/g, "");
    input.value = sanitizedValue;
}

function calculateCAS(salary) {
    var cas = salary * 0.25;
    return cas;
}

function calculateCASS(salary) {
    var cass = salary * 0.10;
    return cass;
}

function calculateDP(salary) {
    var dp = 510;
    if (salary > 3000) {
        dp -= (salary - 3000) * (0.1/6);
        if (dp < 0) {
            dp = 0;
        }
    }
    return dp;
}

function calculateImpozit(salary) {
    var impozit = salary * 0.10;
    return impozit;
}
