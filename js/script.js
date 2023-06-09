// ATIVANDO BARRA  DESLIZANTES NO MENUS LINKS
// 1 selecionaro que eu o intem que eu quero atingir
const links = document.querySelectorAll(".header-menu a");
// 3 criar a função que eu quero que ocorra
function ativarLinks(link) {
  // dentro do link tenho a informação do site em geral como o href e do url,  com isso vamos verificar se a url contem a informação dadas pelo href se conter quero que ocorra algo.
  const url = location.href; // obtendo informação do url que é a localização da pagina
  const href = link.href; // obtendo informaçao do href link da pagina
  if (url.includes(href)) {
    // podemos verificar se url contem em seu corpo como um todo o url ?
    link.classList.add("ativo"); //se conter quero adiconar uma clas ativo para trabalhar com o css
  }
  //console.log(url)
  //console.log(href);
}
// 2 agora quero ativar uma ução para cada um dos links, quando quero usar cada um uso o loop
links.forEach(ativarLinks);

/**-------------------------------------------------------------------------------------------------- */

//ATIVAR ITENS DO ORCAMENTO
// vamos adicionar quando eu clicar em cada bicicleta que eu quero comprar quero que ela ja se selecione de acordor com a que eu selecionei( foi feita uma alteração la no html de seguros seguindo insturçoes do html de orcamentos )

// vamo verificar qual tipo e produto que foi selecionando
//const parametros = location ( assim ja mostra os parametros que podemons trabalhar)
//const parametros = location.search// assim ja mostra o parametro mais especifico
const parametros = new URLSearchParams(location.search); // basicamente isso retorna uma array com os paramentros selecionandos acima

function ativarProduto(parametro) {
  // função criada
  const elemento = document.getElementById(parametro); // dessa forma nao preciso usar document.querySelector pois com document.getElementById so preciso passar a string que foi pega pela var paramntros
  if (elemento) {
    // se existir elemento aplica abaixo
    elemento.checked = true; // agora so falta dar o checked de selecionaor automaticamente
    //console.log(elemento)
  }
}
parametros.forEach(ativarProduto);

//---------------------------------------------------------------------------------------------------

// PERGUNTAS FREQUENTES

// 1 sempre que queremo smudar alguma ação no html e css lembre-se devemos sempre selecionan o elemento neste caso queremos mudar a ação do elemento ação entao vamos selecionar ele vamos selecionar a classe e depois o que tem dentro

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(evento) {
  // 6 event e de fato a ultima etapa da Lógica de negócio e o que realmente vai acontecer
  // 7 sempre e bom puxar qual é o elemento que estou clicando para extrair algum elemento que foi clicado uso evento.currentTarget
  const pergunta = evento.currentTarget;
  // 8 vamos relacionaragora o botão com a pergunta que esta abaixo dele seguindo la no html. Sabendo que a pergunta que esta abixo de button tem um id que fica dentro de aria-contorls, entao quando eu clicar no button quero puxar o valor de aria-controls sendo ele um atributo
  const controls = pergunta.getAttribute("aria-controls"); // lembre-se aqui a var controls poderia ser qualquer nome
  // com o id selecionando agora vamos mostrar todas as respostas que contem este id
  const resposta = document.getElementById(controls);

  //  9 agora vamos adicionar o evento a classe que vai adicionar e remover a classe (ativo) nas respostas para ativar e ou remover conforme esta no css
  resposta.classList.toggle("ativo"); // .classList ira trabalhar em adicionar classe no html e .toggle fara a automação se tiver ele remove e se nao tiver ele adiciona

  // 11 para adicionar e remover o atribute de false para true precisamos saber se var resposta contem a classe ativa? se conter! adiciona ao aria-expanded true se nao false
  const ativa = resposta.classList.contains("ativo");

  // 10 vamos tambem mudar o aria expended que esta como false la no html precisamos mudar ele tambem porem em atributos noa contem .toggle para adicionar e remover o id para isso segue o passo 11 acima
  pergunta.setAttribute("aria-expanded", ativa);
  //console.log(resposta); // so para saber o que esta sendo pegado
}

// 3  agora vamos criar a classe que foi derivada de abaixo do em forEach
function eventosPerguntas(pergunta) {
  //pergunta sera a ação que eu quero ter acesso
  // 4 agora vamos adicionar um evento de clique dentro de pergunta
  pergunta.addEventListener("click", ativarPergunta); // 5 click é a ação que eu quero e ativar é a função que vai ocorrer apos a ação. Entao vamos criar esta função do evento ativar. "acima sempre!""
}

// 2 agora queremons adicionar para cada botao uma ação se eu quero adicionar para cada uma vamos usar o loop usando forEach
perguntas.forEach(eventosPerguntas); //lembre-se eventosPeguntas aqui é a classe

//-----------------------------------------------------------------------------------------------------

//GALERIA DE BICICLETAS
// vamos mudar as imagens quando eu clicar nela quero que a imagem muda para a principal
// 1  primeiro vamos selecionar cada uma das imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
// 1 agora vamos selecionar onde queremos que ele fique quando eu clicar
const galeriaContainer = document.querySelector(".bicicleta-imagens");

// 4 criando outra função para trocar imagem
function trocarImagem(event) {
  // ecent é sempre o evento pricipal que eu quero que ocorra
  // sempre devemos selecionar o item que esta sendo clicado no momento
  const img = event.currentTarget;
  const mediaQuerry = matchMedia("(min-width: 1000px)").matches; // esta fun~]ap serve para verificar o tamnaho da tela igual o css. Entao se a tela for menos do que 1000px
  if (mediaQuerry) {
    // 5 agora vamos modificar no doom queremos que quando clicado mudamos o posicionamento la do html queremos mudar as posiçoes dos img por ordem, e onde vamos adicionar este metodo? no container .bicicleta-imagens
    galeriaContainer.prepend(img); // .prepend faz a função de modificar a posição dos elementos la do html
  }
}

//3 criando a função que ira clicar cada uma das imagens
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem); // adicionando evento de click em outra função
}

// 2 adicionar um evento de click
galeria.forEach(eventosGaleria);

//---------------------------------------------------------------------------------------------------

// ANIMAÇÃO
// 1 - Copie o arquivo simple-anime.js da pasta dist e cole no seu site.
// 2 - Link o arquivo utilizando a tag script /js/plugins é apenas um exemplo, caso você tenha colocado o arquivo dentro da pasta de plugins
//<script src="./js/plugins/simple-anime.js"></script>;
// 3 - Inicie a classe do slide:
//<!-- 4 Adicione o atributo data-anime ao elemento que
//deseja animar. Informe o total em milessegundos, que o JavaScript
//deve esperar até a animação iniciar -->

//<h1 data-anime="500">Título do Site</h1>
//<p data-anime="1000">Descrição da Página</p>
//<button data-anime="1500">Clique Aqui</button>

//<!-- 5 Para criar animações diferentes, adicione classes
//aos elementos que deseja diferenciar. E defina o transform
//inicial da animação na classe -->

//<h1 data-anime="500" class="fadeInDown">Título do Site</h1>
//<p data-anime="1000" class="fadeInDown">Descrição da Página</p>
//<button data-anime="1500">Clique Aqui</button>
//new SimpleAnime();
/*
6 CSS personalizado dependendo da animação desejada
Devem ser adicionadas na frente do código essencial do item 7.
*/
/*.fadeInDown {
  transform: translate3d(0, -20px, 0);
}
.fadeInUp {
  transform: translate3d(0, 20px, 0);
}
.fadeInRight {
  transform: translate3d(20px, 0, 0);
}
.fadeInLeft {
  transform: translate3d(-20px, 0, 0);
}

 7 Adicione o CSS Essencial abaixo 
[data-anime] {
  opacity: 0;
}
.anime {
  opacity: 1;
  transform: none;
  transition: transform 0.8s, opacity 0.8s;
}
*/
// vamos ativar um plugin para animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
