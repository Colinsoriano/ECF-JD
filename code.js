function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function addUser() {
    var firstname = document.sample.firstname.value;
    var name = document.sample.name.value;
    var birthdate = document.sample.birthdate.value

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));


    td1.innerHTML = firstname;
    td2.innerHTML = name;
    td3.innerHTML = birthdate;
    td4.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);">'
    td5.innerHTML = '<input type="button" name="up" value="Update" onclick="UpUser(this);">'

    document.getElementById("tbl").appendChild(tr);
}

function UpUser(stud) {
    var firstname = document.sample.firstname.value;
    var name = document.sample.name.value;
    var birthdate = document.sample.birthdate.value;
    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));


    td1.innerHTML = '<input type="text" name="firstname1">';
    td2.innerHTML = '<input type="text" name="name1">';
    td3.innerHTML = '<input type="text" name="birthdate1">';
    td4.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" >'
    td5.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpdate(this);" >'

    document.getElementById("tbl").replaceChild(tr, s);
}

function addUpdate(stud) {
    var firstname = document.sample.firstname1.value;
    var name = document.sample.name1.value;
    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));


    td1.innerHTML = firstname;
    td2.innerHTML = name;
    td3.innerHTML = birthdate;
    td4.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" >'
    td5.innerHTML = '<input type="button" name="up" value="Update" onclick="UpUser(this);" >'

    document.getElementById("tbl").replaceChild(tr, s);
}

function delStudent(Stud) {
    var s = Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}

