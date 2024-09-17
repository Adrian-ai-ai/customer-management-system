const array = [
    {
        firstname: 'adrian',
        lastname: 'chundama',
        gender: 'f',
        Dob: '11/05/1994',
        id:'320781101',
        number: '+260977436168',
        residential: 'lusaka'
    },
    {
        firstname: 'john',
        lastname: 'mbewe',
        gender: 'm',
        Dob: '11/05/1994',
        id:'320781102',
        number: '+260977436268',
        residential: 'kabwe'
    },
    {
        firstname: 'clara',
        lastname: 'banda',
        gender: 'f',
        Dob: '11/05/1994',
        id:'320781103',
        number: '+260977436368',
        residential: 'lusaka'
    },
    {
        firstname: 'maimbolwa',
        lastname: 'patel',
        gender: 'm',
        Dob: '11/05/1994',
        id:'320781104',
        number: '+260977436468',
        residential: 'lusaka'
    },
    {
        firstname: 'josephine',
        lastname: 'mbewe',
        gender: 'f',
        Dob: '11/05/1994',
        id:'320781105',
        number: '+260977436568',
        residential: 'chipata'
    },
    {
        firstname: 'henry',
        lastname: 'barker',
        gender: 'm',
        Dob: '11/05/1992',
        id:'320781105',
        number: '+260977436668',
        residential: 'chipata'
    }
];

    let row = null;

//Read or show table data

function showtable(curarray) {
    document.getElementById('mytable').innerHTML = `<thead><tr class = 'theaderrow'>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Gender</td>
                    <td>Date of birth</td>
                    <td>NRC</td>
                    <td>Phone Number</td>
                    <td>Residential Address</td>
                    <td>Actions</td>
    </tr></thead>`;    

// checking if array is empty

if(curarray == ''){
    document.getElementById('error').innerHTML =`<span>Subscriber does not Exist!</span>`
}

// print data onto screen
else{
    document.getElementById('error').innerHTML = '';
    
    for(let i=0; i < curarray.length; i++){
        document.getElementById('mytable').innerHTML += 
    `<tbody><tr class = 'tbodyrow' >
        <td>${curarray[i].firstname}</td>
        <td>${curarray[i].lastname}</td>
        <td>${curarray[i].gender}</td>
        <td>${curarray[i].Dob}</td>
        <td>${curarray[i].id}</td>
        <td>${curarray[i].number}</td>
        <td>${curarray[i].residential}</td>
        <td><button onclick='edit(this)' type='button' id='editbtn'>Edit</button>
        <button onclick='remove(this)' type='button' id='deletebtn'>Delete</button></td>
        
    </tr></tbody>`
    }
}
}

//calling show table data method

showtable(array);

//take filtered array data

let newarray =[];

// for searching method

document.getElementById('search').addEventListener('keyup', function(){
    let search = this.value.toLowerCase();
    newarray = array.filter(function (val) {
        if(val.id.includes(search) || val.firstname.includes(search) || val.number.includes(search) ||  val.lastname.includes(search)|| val.residential.includes(search)){
           
            const newObj = {
                firstname: val.firstname,
                lastname: val.lastname,
                id:val.id,
                number: val.number,
                residential: val.residential
                
            };
            return newObj;
        }
    })
    showtable(newarray);
})





// press 'add user' to run 'create function' and show create user form

function create(){
    document.querySelector('.createfield').style.display='flex';
    document.querySelector('.adddiv').style.display='none';
    document.getElementById('mytable').style.display = 'none';
    msg.innerHTML = '';
}

//press 'create' to run 'add function' and add user

function add(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;

    let gender = document.getElementById('gender').value;

    let dob = document.getElementById('dob').value;
    
    let nrc = document.getElementById('nrc').value;
    
    
    let phonenumber = document.getElementById('phonenumber').value;

    
    let pob = document.getElementById('pob').value;
    
    let residential = document.getElementById('homeaddress').value;

    let newobj = {firstname: firstname, lastname: lastname,gender: gender,Dob: dob, id:nrc, number: phonenumber, residential: residential };
    
    array.push(newobj);

    document.querySelector('.createfield').style.display='none';
    document.querySelector('.adddiv').style.display='flex';
    document.getElementById('mytable').style.display = '';
    msg.innerHTML = 'User details created successfully!';

    showtable(array);
    
    
}

//edit button function 

function edit(number){
    
    document.querySelector('.subscriberform').style.display ='flex';
    
    document.querySelector('.adddiv').style.display ='none';
    
    document.getElementById('mytable').style.display = 'none';
    
    msg.innerHTML = 'Update Form';

    row = number.parentElement.parentElement;
   

    document.getElementById('ufirstname').value = row.cells[0].innerHTML;
    
    document.getElementById('ulastname').value= row.cells[1].innerHTML;
    
    document.getElementById('ugender').value = row.cells[2].innerHTML;
    
    document.getElementById('udob').value = row.cells[3].innerHTML;
    
    document.getElementById('unrc').value = row.cells[4].innerHTML;
    
    document.getElementById('uphonenumber').value = row.cells[5].innerHTML;
    
    document.getElementById('uhomeaddress').value = row.cells[6].innerHTML;
}
    
// update button

function update(){

    document.querySelector('.subscriberform').style.display ='none';
    

    document.querySelector('.adddiv').style.display ='';
    
    document.getElementById('mytable').style.display = '';

    msg.innerHTML = 'User details updated successfully!';

    row.cells[0].innerHTML = document.getElementById('ufirstname').value;

    row.cells[1].innerHTML = document.getElementById('ulastname').value;

    row.cells[2].innerHTML = document.getElementById('ugender').value;
    
    row.cells[3].innerHTML = document.getElementById('udob').value;

    row.cells[4].innerHTML = document.getElementById('unrc').value;

    row.cells[5].innerHTML = document.getElementById('uphonenumber').value;

    row.cells[6].innerHTML = document.getElementById('uhomeaddress').value;

    row = null;
}
   

// Delete function
   
   
    function remove(number){

        let ans = confirm('Are you sure you want to DELETE this record?');

        if (ans == true){
            row = number.parentElement.parentElement;

        document.getElementById('mytable').deleteRow(row.rowIndex);
        
        msg.innerHTML = 'Delete Successful! ';
    }
    }



   