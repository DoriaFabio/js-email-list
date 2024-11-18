//* Descrizione
// Attraverso l'apposita API di Boolean
//? https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
//* Bonus
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const elUl = document.querySelector("ul");
const button = document.querySelector("button");
const icon = document.querySelector("i");
button.addEventListener("click", getData);



function getData() {
    const arrayName = [];
    let template = ``;
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
            // console.log(res.data.response);
            const email = res.data.response;
            template += `<li class="list-group-item myli">${email}</li>`;
            arrayName.push(email);
            if (arrayName.length === 10) {
                elUl.innerHTML = template;
            };
        })
            .catch((error) => {
                console.log(error);
            })

            .finally(() => {
                console.log("in tutti i casi eseguita");
            });
    };
    icon.classList.remove("fa-envelope");
    icon.classList.add("fa-envelope-open");
};
