$(document).ready(function(){
 
    console.log('Está rodando o Js');

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Square(containerA, {
    // Passa as caracteristicas do animação, por exemplo largura, duração da animação, cor, cor incial e final e mt mais
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            // Passa o valor para que tenha um carregamento progressivo;
            let value = Math.round(circle.value() * 60);
            // Seta a informação que terá dentro do forma sendo carregada
            circle.setText(value);
        }
    });

    // Circulo B
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    // Circulo C
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.SemiCircle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1800,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    // Circulo D
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from:{ color: '#AAA' },
        to: { color: '#65DAF9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);
        }
    });

    // Iniciando a animação do circulo quando o usuario chegar no elemnto

    // Atribuindo a posição do ID data-area a uma var, através do método offset() que retorna as coordenadas do element
    let dataAreaOffset = $('#data-area').offset();
      // stop serve para a animação não carregar mais que uma vez
    let stop = 0;
    
    $(window).scroll(function(e){
    
        // Obtém o número de pixels rolados 
        let scroll = $(window).scrollTop();
    
        // Se a área atual for maior que a área em que os circulos estão - 500 (calculo para +- ficar a tela atual em cima dos circulos) e stop = 0
        // vai depender do tamanho do site para acertar a localização exata de onde você quer que a tela chegue para a animação começar
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
                // Ativa a animação dos circulos
                circleA.animate(1.0);
                circleB.animate(1.0);
                circleC.animate(1.0);
                circleD.animate(0.7);
                // Altera o stop e não entra mais no if
                stop = 1;
        }
    });

    // Parallax
    setTimeout(function(){

        // Img da seção dos circulos
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        // Img background da área de desafios
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

    },350);

    // Filtro do portfólio

    $('.filter-btn').on('click', function(){
        // Pega o id do botão clicado
        let type = $(this).attr('id');
        // Atribui a class project-box a var boxes
        let boxes = $('.project-box');
        // Remove a class active de todos os botões
        $('.main-btn').removeClass('active');
        // O botão clicado adiciona a class active pega acima;
        $(this).addClass('active');

        // if para verificar qual é o id do botão que foi clicado e chamar a função passando a class e o boxes como parametro, para esconder ou aparecer os campos
        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes);
        }else if(type == 'dev-btn'){
            eachBoxes('dev', boxes);
        }else if(type == 'seo-btn'){
            eachBoxes('seo', boxes);
        }else {
            eachBoxes('all', boxes);
        }
    })
    
    function eachBoxes(type, boxes){
        // Exibe todos os itens escondidos pelo fade, se o id for 'all'
        if(type == 'all'){
            $(boxes).fadeIn();
        } else{
            // Passa por todas as tags que tem a classe .project-box
            $(boxes).each(function(){
            // Se não tiver a class do tipo do botão que foi clicado, irá ser escondido
            if(!$(this).hasClass(type)){
                // Esconde de forma lenta
                $(this).fadeOut('slow');
                // Se for igual a classe do botão clicado, será mostrado
            } else{
                $(this).fadeIn();
            }
        });
    }
}

    // Scroll para seções

    // atribui a class a uma var
    let navBtn = $('.nav-item');

    // Seleciona os id das seções, que consta na div principal das secções
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        // pega o id do botão que foi clicado
        let btnId = $(this).attr('id');

        // console.log(btnId)

        // Verifica qual o id do botão que foi clicado e passa o id da seção para o scrollTo
        if(btnId == 'about-menu'){
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu'){
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu'){
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu'){
            scrollTo = portfolioSection;
        } else if(btnId == 'contact-menu'){
            scrollTo = contactSection;
        }else{
            scrollTo = bannerSection;
        }

        // Animação do scroll
        // Tipo da animação é ScroolTop e passa o id da seção na variavel scrollTo como parametro para onde se deslocar
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
        
    });


});
