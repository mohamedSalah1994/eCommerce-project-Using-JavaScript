var index = 0;
var data = [];
var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    }
    function readFormData(){
    window.alert("Your data has been posted!");
    data[index] = {
        name : document.getElementById("nameId").value,
        code : document.getElementById("codeId").value,
        image : document.getElementById("imageId").value,
        cost : document.getElementById("costId").value,
    };
    index = index + 1;
    localStorage.setItem("A", JSON.stringify(data));
}
function insertNewRecord(data){
    var table = document.getElementById("contact_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = console.log(localStorage.getItem("A", "data.name"));
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = console.log(localStorage.getItem("A", "data.code"));
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = console.log(localStorage.getItem("A", "data.image"));
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = console.log(localStorage.getItem("A", "data.cost"));
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}
