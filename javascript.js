document.addEventListener("DOMContentLoaded", function() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    function ativacaoMenu() {
        const ativaMenu = document.querySelector('.fa-bars');
        const navMenu = document.querySelector('header .navegacao-primaria');

        ativaMenu.addEventListener('click', () => {
            ativaMenu.classList.toggle('fa-x');
            navMenu.classList.toggle('ativado');
        });
    }

    function sobreMim() {
        const experiencia = document.querySelectorAll('.experience_content div');
        const botaoExperiencia = document.querySelectorAll('.experience_nav li');
        const educacao = document.querySelectorAll('.education_content div');
        const botaoEducacao = document.querySelectorAll('.education_nav li');

        experiencia[0].classList.add('ativo');
        botaoExperiencia[0].classList.add('ativo');
        educacao[0].classList.add('ativo');
        botaoEducacao[0].classList.add('ativo');

        function slideShow(elementos, botoes) {
            elementos.forEach((divisao) => {
                divisao.classList.remove('ativo');
            });
            botoes.forEach((item) => {
                item.classList.remove('ativo');
            });
            elementos[index].classList.add('ativo');
            botoes[index].classList.add('ativo');
        }

        botaoExperiencia.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                slideShow(experiencia, botaoExperiencia);
            });
        });

        botaoEducacao.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                slideShow(educacao, botaoEducacao);
            });
        });
    }

    function showLista(lista, categoria) {
        lista.forEach((item) => {
            item.classList.remove('ativo');
        });

        if (categoria === 'all') {
            lista.forEach((item) => {
                item.classList.add('ativo');
            });
        } else {
            lista.forEach((item) => {
                if (item.dataset.categoria === categoria) {
                    item.classList.add('ativo');
                }
            });
        }
    }

    const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
    const buttonGeral = document.querySelectorAll('.project_navegacao li');
    const controls = document.querySelectorAll(".control");
    const items = document.querySelectorAll(".item");
    let currentItem = 0;
    const maxItems = items.length;

    listaALL.forEach((item) => {
        item.classList.add('ativo');
    });

    buttonGeral.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            removeClick(index);
        });
    });

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left");

            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if (currentItem >= maxItems) {
                currentItem = 0;
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            items.forEach((item) => item.classList.remove("current-item"));

            items[currentItem].scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });

            items[currentItem].classList.add("current-item");
        });
    });

    ativaLetra(document.querySelector('.digitando'));
    ativacaoMenu();
    sobreMim();

    function removeClick(index) {
        const buttonGeral = document.querySelectorAll('.project_navegacao li');

        buttonGeral.forEach((item) => {
            item.classList.remove('ativo');
        });

        buttonGeral[index].classList.add('ativo');
    }
});

var btnVoltarAoInicio = document.getElementById("btnVoltarAoInicio");


btnVoltarAoInicio.addEventListener("click", function() {
   
    window.scrollTo({
        top: 0, 
        behavior: "smooth" // 
    });
});