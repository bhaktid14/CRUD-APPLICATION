var selectedRow = null
let idArray=[];

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        console.log(formData.id)
        if (selectedRow == null && chkid())
            insertNewRecord(formData);

        else
            updateRecord(formData);
        resetForm();
       
    }
    
}

function chkid()
{
    let id=document.getElementById("id").value;

    if(idArray.some((val)=> val==id)){
        document.getElementById("idValidationError").style.display="block";
        return false;
    }
    // if(id<=0){
    //     document.getElementById("idValidationError2").classList.remove("hide");

    //     return false;
    // }
    else{
        idArray.push(id);
        document.getElementById("idValidationError").style.display="none";
        return true;
    }
}
function readFormData() {
    var formData = {};
    formData ["id"]= document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.getElementById("gender").value;
     return formData;
 

}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    console.log(data.i)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button class="b1" onClick="onEdit(this)">Edit</button>
                       <button class="b2" onClick="onDelete(this)">Delete</button>`;
                       
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    selectedRow = null;

}

function onEdit(td) {
   if(true){
    document.getElementById("add").value="Update";
   } 
   
    

    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    document.getElementById("add").value="Submit";
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.gender;
    
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
  }
// function validate() {
//     isValid = true;
//     var letters=/^[a-zA-Z]*$/;
//     var name=document.forms['forms']["name"].value;
//     if (name == "" || !name.match(letters)) {
        
//         document.getElementById("nameValidationError").style.display="block";
//         isValid = false;
//     } 
//     else {
//         document.getElementById("nameValidationError").style.display="none";
//         isValid = true;
//     }

    //new
    function validate() {
        isValid = true;
        var letters=/^[a-zA-Z]*$/;
        var name=document.forms['forms']["name"].value;
        if (! name.match(letters)) {
            isValid = false;
            document.getElementById("nameValidationError").classList.remove("hide");
           
         } else if(name == "")
         {
             isValid=false;
             document.getElementById("nameValidationError1").classList.remove("hide");
         }
        else {
           isValid = true;
            if (!document.getElementById("nameValidationError").classList.contains("hide"))
                document.getElementById("nameValidationError").classList.add("hide");
        }






    var eAge=document.forms['forms']["age"].value;
    if(eAge>=19 && eAge<=60){
        //if(!document.getElementById("ageValidationError").classList.contains("hide"))
        document.getElementById("ageValidationError").style.display="none";
        isValid=true;
    }
    else{
        
        document.getElementById("ageValidationError").style.display="block";
        isValid = false;
    }
    return isValid;
}