var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["idcode"] = document.getElementById("idcode").value;
    formData["name"] = document.getElementById("name").value;
    formData["birthday"] = document.getElementById("birthday").value;
    formData["address"] = document.getElementById("address").value;
    formData["time"] = document.getElementById("time").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idcode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.birthday;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    resetForm();
}

function resetForm() {
    document.getElementById("idcode").value = "";
    document.getElementById("name").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("address").value = "";
    document.getElementById("time").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idcode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("birthday").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
    document.getElementById("time").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idcode;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.birthday;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.time;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
        resetForm();
    }
}