let arr = [
  { task: "i want to meet balayya babu", time: "10pm" },
  { task: "i want to meet uppal balu", time: "12pm" },
  { task: "i want to meet pallavi prashanth", time: "1pm" },
  { task: "i want to meet macha", time: "2pm" },
  { task: "i want to meet flash man", time: "5pm" }
];

// ------- GET (READ) --------
function display() {
  let trs = "";

  arr.forEach((item, index) => {
    trs += `
      <tr>
        <td>${item.task}</td>
        <td>${item.time}</td>
        <td>
          <button class="btn btn-danger" onclick="deleteTask(${index})">
            Delete
          </button>
        </td>
        <td>
          <button class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onclick="editTask(${index})">
            Edit
          </button>
        </td>
      </tr>
    `;
  });

  document.getElementById("ref").innerHTML = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Task</th>
          <th>Time</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>${trs}</tbody>
    </table>
  `;
}

display();


// ------- POST / PUSH (CREATE) --------
function addTask(e) {
  e.preventDefault();

  let task = document.myForm.task.value.trim();
  let time = document.myForm.time.value.trim();

  if (task === "" || time === "") {
    alert("Please fill all fields");
    return;
  }

  arr.push({ task, time }); 
  display();

  document.myForm.task.value = "";
  document.myForm.time.value = "";
}


// -------- DELETE -------
function deleteTask(index) {
  let confirmDelete = confirm("Do you want to delete?");
  if (!confirmDelete) return;

  arr.splice(index, 1); 
  display();
}


// ------- PUT (EDIT / UPDATE) -------
let editIndex = null;
let editTaskTextBoxElem = document.getElementById("editTaskTextBox");
let editTimeTextBoxElem = document.getElementById("editTimeTextBox");

function editTask(index) {
  editIndex = index;
  editTaskTextBoxElem.value = arr[index].task;
  editTimeTextBoxElem.value = arr[index].time;
}

function save() {
  if (editIndex === null) return;

  arr[editIndex] = {
    task: editTaskTextBoxElem.value.trim(),
    time: editTimeTextBoxElem.value.trim()
  }; 

  display();
}
