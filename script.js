let queue = [];
let tokenNumber = 1;

function addPatient() {
    let name = document.getElementById("patientName").value;

    if (name === "") {
        alert("Please enter patient name");
        return;
    }

    let patient = "Token " + tokenNumber + " - " + name;
    queue.push(patient);

    document.getElementById("tokenMsg").innerText =
        "Your Token Number: " + tokenNumber;

    tokenNumber++;
    document.getElementById("patientName").value = "";

    updateQueue();
}

function updateQueue() {
    let list = document.getElementById("queueList");
    list.innerHTML = "";

    for (let i = 0; i < queue.length; i++) {
        let li = document.createElement("li");
        li.innerText = queue[i];
        list.appendChild(li);
    }
}

function nextPatient() {
    if (queue.length === 0) {
        alert("No patients in queue");
        return;
    }

    let current = queue.shift();
    document.getElementById("currentToken").innerText = current;

    updateQueue();
}
