
<script>
    // Espera que o DOM esteja pronto
    document.addEventListener('DOMContentLoaded', function () {
        // Obtém todas as imagens do carrossel
        const carouselImages = document.querySelectorAll('.box-movie');

        // Adiciona um evento de clique a cada imagem
        carouselImages.forEach(image => {
            image.addEventListener('click', function () {
                alert('Você clicou em uma imagem do carrossel!');
                // Adicione aqui a lógica para abrir algo
            });
        });

        // Adiciona um evento de clique aos botões "ASSISTIR AGORA" e "MAIS INFORMAÇÕES"
        const watchNowButton = document.querySelector('.button:nth-child(1)');
        const moreInfoButton = document.querySelector('.button:nth-child(2)');

        watchNowButton.addEventListener('click', function () {
            alert('Você clicou em ASSISTIR AGORA!');
            // Adicione aqui a lógica para abrir algo
        });

        moreInfoButton.addEventListener('click', function () {
            alert('Você clicou em MAIS INFORMAÇÕES!');
            // Adicione aqui a lógica para abrir algo
        });
    });
</script>
