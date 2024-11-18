//* Descrizione
// Attraverso l'apposita API di Boolean
//? https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//* Bonus
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const elUl = document.querySelector("ul");


axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
    console.log(res.data.response);
    const email = res.data.response; 
    elUl.innerHTML = `<li class="list-group-item">${email}</li>`;
})

    .catch((error) => {
        console.log(error);
    })

    .finally(() => {
        console.log("in tutti i casi eseguita");
    });