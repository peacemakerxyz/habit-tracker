const habits = [
    { name: "Meditation", checks: [] },
    { name: "Read 5 Pages", checks: []},
    { name: "Schedule", checks: []}
];

const gridBody = document.getElementById("grid-body");

function render() {
    gridBody.textContent = "";

    habits.forEach(habit =>  {
        const row = document.createElement("tr");

        const td = document.createElement("td");
        td.textContent = habits.name;

        for (let day = 1; day < 7; day++) {
            
        }

        gridBody.appendChild(row);
    });
};

render();