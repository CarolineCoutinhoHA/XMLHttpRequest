document.getElementById('btnCarregar').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // URL da API para os posts

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const posts = JSON.parse(xhr.responseText);
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = ''; // Limpa a área de resultado antes de exibir os novos dados

            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;

                resultadoDiv.appendChild(postElement);
            });
        } else {
            console.error('Erro na requisição:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Erro de rede ou falha na requisição');
    };

    xhr.send(); // Envia a requisição
});
