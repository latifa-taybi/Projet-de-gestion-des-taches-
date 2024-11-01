const btn = document.querySelector('#btn');
const form = document.getElementById('form');
form.style.display = 'none';

const add=document.getElementById('add');
const tbody=document.querySelector('tbody');

const thead=document.getElementById('table-light');
thead.style.display = 'none';


btn.addEventListener('click',()=>{
    if (form.style.display === 'none') {
        form.style.display = 'grid';
    }
});


add.addEventListener('click', () => {
    if (thead.style.display === 'none') {
        thead.style.display = 'contents';
    }
    if (add.textContent = "modifier") {
        add.textContent = "ajouter"
    }

    let nomTache =document.getElementById('name').value;
    let descriptionTache =document.getElementById('description').value;
    let dateLimite =document.getElementById('date').value;
    let etatTache =document.getElementById('etat').value;
    const ligne = tbody.insertRow();
    ligne.insertCell(0).innerText=nomTache;
    ligne.insertCell(1).innerText=descriptionTache;
    ligne.insertCell(2).innerText=dateLimite;
    ligne.insertCell(3).innerText=etatTache;

    let btnEdit = document.createElement('button');
    btnEdit.textContent="Edit"
    ligne.insertCell(4).appendChild(btnEdit)
    btnEdit.classList.add("btn","btn-outline-primary")
    let btnDelete = document.createElement('button')
    btnDelete.textContent="Delete"
    ligne.insertCell(5).appendChild(btnDelete)
    btnDelete.classList.add("btn","btn-outline-danger")
    form.reset();

    btnEdit.addEventListener('click',  () =>{
        document.getElementById('name').value=nomTache;
        document.getElementById('description').value=descriptionTache;
        document.getElementById('date').value=dateLimite;
        document.getElementById('etat').value=etatTache;

        
        add.textContent = "modifier"
 
        ligne.remove();

    })
    
    btnDelete.addEventListener('click', function (){
        ligne.remove();
    })
});










