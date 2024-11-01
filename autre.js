const btn = document.querySelector('#btn');
const form = document.getElementById('form');
form.style.display = 'none';

const add = document.getElementById('add');
const tbody = document.querySelector('tbody');
const thead = document.getElementById('table-light');
thead.style.display = 'none';

// const buttonEdit = document.getElementById('btn-edit');
// buttonEdit.style.display = 'none';

btn.addEventListener('click',()=>{
    if (form.style.display === 'none') {
        form.style.display = 'grid';
    }
});

add.addEventListener('click', () => {
    if (thead.style.display === 'none') {
        thead.style.display = 'contents';
    }
    let nomTache = document.getElementById('name').value;
    let descriptionTache = document.getElementById('description').value;
    let dateLimite = document.getElementById('date').value;
    let etatTache = document.getElementById('etat').value;

    const ligne =tbody.insertRow();

    ligne.innerHTML = `
        <td>${nomTache}</td>
        <td>${descriptionTache}</td>
        <td>${dateLimite}</td>
        <td>${etatTache}</td>
        <td><button id=edit class="btn btn-outline-primary">Edit</button></td>
        <td><button id=delete class="btn btn-outline-danger">Delete</button></td>`;
        form.reset();

        // const btnEdit=document.getElementById('edit');
        const btnDelete=document.getElementById('delete');

    //     btnEdit.addEventListener('click', () => {
    //     document.getElementById('name').value = nomTache;
    //     document.getElementById('description').value = descriptionTache;
    //     document.getElementById('date').value = dateLimite;
    //     document.getElementById('etat').value = etatTache;
    //     add.textContent = "Edit";
    // });

    btnDelete.addEventListener('click', () => {
        ligne.remove();
    })

    
});



