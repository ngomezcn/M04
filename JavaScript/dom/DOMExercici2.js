function prenValorForm() {
    console.log(document.getElementsByName('nom')[0].value)
    console.log(document.getElementsByName('cognom')[0].value)
    event.preventDefault();
}

/*
const form  = document.getElementById('formulari1');
form.addEventListener('submit', (event) => {
    console.log(document.getElementsByName('nom')[0].value)
    console.log(document.getElementsByName('cognom')[0].value)
    event.preventDefault();
});*/