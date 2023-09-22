function scrollToElement(elementSelector, instance = 0){
    // Selecionar todos os elementos que acompanham o seletor 
    const elements = document.querySelectorAll(elementSelector); 
    // Checar se os elementos acompanham o seletor e se os requisitos estão corretos
    if (elements.length > instance) {
        // Scroolar para uma instancia do elemento
        elements[instance].scrollIntoView({behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
});

link2.addEventListener('click', () =>{
    // Scroolar para o 2° elemento da classe "Header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () =>{
    scrollToElement('.column');
});
