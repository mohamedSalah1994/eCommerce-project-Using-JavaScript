var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }

    }
    function readFormData(){

        var formData = {};
        formData["name"] = document.getElementById("nameId").value;
        formData["code"] = document.getElementById("codeId").value;
        formData["image"] = document.getElementById("imageId").value;
        formData["cost"] = document.getElementById("costId").value;
        return formData;
    }

    // Create operation
    function insertNewRecord(data){
        var table = document.getElementById("contact_list").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.name;
        var cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.code;
        var cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.image;
        var cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.cost;
        var cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                            <a href="#" onClick='onDelete(this)'>Delete</a>`;
    }

        // For Edit operation
        function onEdit(td){
            selectedRow = td.parentElement.parentElement;
            document.getElementById('nameId').value = selectedRow.cells[0].innerHTML;
            document.getElementById('codeId').value = selectedRow.cells[1].innerHTML;
            document.getElementById('imageId').value = selectedRow.cells[2].innerHTML;
            document.getElementById('costId').value = selectedRow.cells[3].innerHTML;
        }
        function updateRecord(formData){
            selectedRow.cells[0].innerHTML = formData.name;
            selectedRow.cells[1].innerHTML = formData.code;
            selectedRow.cells[2].innerHTML = formData.image;
            selectedRow.cells[3].innerHTML = formData.cost;
        }
        function onDelete(td){
            if(confirm('Are you sure you want to delete this record?')){
                row = td.parentElement.parentElement;
                document.getElementById('contact_list').deleteRow(row.rowIndex);
                resetForm();
            }
        }
