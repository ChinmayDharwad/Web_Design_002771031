var count = 0;
let boolean1 = true;
let boolean2 = true;

hideOnStart();

function hideOnStart() {
  document
    .querySelectorAll("tr")[0]
    .querySelectorAll("th")[8]
    .classList.add("columnHide");
  document
    .querySelectorAll("tr")[0]
    .querySelectorAll("th")[9]
    .classList.add("columnHide");
}

function addNewRow() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var lastStudent =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var lastIndex = lastStudent.split(" ")[1];

  var trNode1 = document.createElement("tr");
  var tdCol1 = document.createElement("td");
  tdCol1.innerHTML =
    '<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"<br /><br /><br /><img src="down.png" width="25px" onclick="dropInfoTwo(this)">';
  var tdStudent = document.createElement("td");
  tdStudent.innerHTML = "Student " + (parseInt(lastIndex) + 1);
  var tdTeacher = document.createElement("td");
  tdTeacher.innerHTML = "Teacher " + (parseInt(lastIndex) + 1);
  var tdAwardStatus = document.createElement("td");
  tdAwardStatus.innerHTML = "Awarded";
  var tdSemester = document.createElement("td");
  tdSemester.innerHTML = "Fall";
  var tdType = document.createElement("td");
  tdType.innerHTML = "TA";
  var tdBudget = document.createElement("td");
  tdBudget.innerHTML = "54687";
  var tdPercent = document.createElement("td");
  tdPercent.innerHTML = "100%";

  trNode1.appendChild(tdCol1);
  trNode1.appendChild(tdStudent);
  trNode1.appendChild(tdTeacher);
  trNode1.appendChild(tdAwardStatus);
  trNode1.appendChild(tdSemester);
  trNode1.appendChild(tdType);
  trNode1.appendChild(tdBudget);
  trNode1.appendChild(tdPercent);

  tbodyRef.appendChild(trNode1);
  // count++;

  var trNode2 = document.createElement("tr");
  var tddrop = document.createElement("td");
  tddrop.innerHTML =
    "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";

  tddrop.setAttribute("colspan", "8");
  trNode2.setAttribute("class", "dropDownTextArea");
  trNode2.appendChild(tddrop);
  tbodyRef.appendChild(trNode2);
  // count++;

  try {
    setTimeout(() => {
      alert(`Next Student Added ${Math.ceil(rowCount / 2)}`);
    }, 100);
  } catch (error) {
    alert("Something went wrong!");
  }

  alert("Record added successfully");
}

function onCheckboxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  var submitButton = document.getElementById("button");

  if (checkbox.checked == true) {
    count++;
    // alert(count);
    rowSelect.style.backgroundColor = "yellow";

    if (count > 0) {
      submitButton.style.backgroundColor = "orange";
      submitButton.disabled = false;
    }

    //delete button
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteId");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';

    //edit button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editId");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow(this)">Edit</button>';

    rowSelect.appendChild(deleteButton);
    rowSelect.appendChild(editButton);

    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[8]
      .classList.remove("columnHide");
    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[9]
      .classList.remove("columnHide");
    row.querySelectorAll("td")[8].classList.remove("columnHide");
    row.querySelectorAll("td")[9].classList.remove("columnHide");
  } else {
    count--;
//  alert(count);
    if (count == 0) {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "grey";
      // submitButton.setAttribute("onclick", "submitResult()");

      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[8]
        .classList.add("columnHide");
      document
        .querySelectorAll("tr")[0]
        .querySelectorAll("th")[9]
        .classList.add("columnHide");
      rowSelect.querySelectorAll("td")[8].classList.add("columnHide");
      rowSelect.querySelectorAll("td")[9].classList.add("columnHide");
    }

    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(9);
    rowSelect.deleteCell(8);
  }
}

function deleteRow(rowObject) {
  const tr = rowObject.parentElement.parentElement.rowIndex;
  document.getElementById("myTable").deleteRow(tr);
  document.getElementById("myTable").deleteRow(tr);

  alert("Selected record deleted successfully.");
  count--;
  // alert(count);
  if (count == 0) {
    var submitButton = document.getElementById("button");
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "grey";
    // submitButton.setAttribute("onclick", "submitResult()");

    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[8]
      .classList.add("columnHide");
    document
      .querySelectorAll("tr")[0]
      .querySelectorAll("th")[9]
      .classList.add("columnHide");
    rowSelect.querySelectorAll("td")[8].classList.add("columnHide");
    rowSelect.querySelectorAll("td")[9].classList.add("columnHide");
  }
}

function editRow(rowObject) {
  alert("Edit the selected record details");
}

function dropInfoOne(rowObject) {
  const tr = rowObject.parentElement.parentElement;
  const drop = tr.nextSibling.nextSibling;

  if (boolean1) {
    drop.style.display = "table-row";
    boolean1 = false;
  } else {
    drop.style.display = "none";
    boolean1 = true;
  }
}

function dropInfoTwo(rowObject) {
  const tr = rowObject.parentNode.parentNode;
  const descRow = tr.nextSibling;
  if (boolean2) {
    descRow.style.display = "table-row";
    boolean2 = false;
  } else {
    descRow.style.display = "none";
    boolean2 = true;
  }
}

function submitResult() {
  alert("Selected record has been submitted");
}
