const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro enviado !')
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let check = document.getElementById('check').value;
    let data = {
        name,
        email,
        check,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
})

