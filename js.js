document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown .dropbtn');
    var dropdownContent = document.getElementById('myDropdown');

    // Verifica se os elementos existem antes de adicionar listeners
    if (dropdown && dropdownContent) { 
        // Quando o mouse entra no item 'Sobre Mim'
        dropdown.parentNode.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        // Quando o mouse sai do item 'Sobre Mim' ou do submenu
        dropdown.parentNode.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('show');
        });

        // Opcional: Fechar o dropdown se clicar fora dele (para telas menores ou touch)
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        }
    }
});