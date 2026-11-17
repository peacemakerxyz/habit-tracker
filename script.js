const habits = [
    { name: "Meditation", checks: [] },
    { name: "Read 5 Pages", checks: []},
    { name: "Schedule", checks: []}
];

const gridBody = document.getElementById("grid-body");

function render() {

    const tr = document.createElement("tr");
    
    for (let i = 0; i < 9; i++) {

        const td = document.createElement("td");

        tr.appendChild(td);
    }

    gridBody.appendChild(tr);

}



render();