document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");

  fetch("https://json-diw.mtaveiras.repl.co/paises")
    .then((response) => response.json())
    .then((data) => {
      console.log("Dados da API:", data);

      // Verificação mais direta para 'data.paises'
      if (data && data.length > 0) {
        const gridPaisesContainer = document.querySelector(".grid-paises-container");

        data.forEach((pais) => {
          const paisElement = document.createElement("div");
          paisElement.className = "m-3 rounded border border-2 border-dark col-md-3 col-sm-1 bg-secondary";
          paisElement.innerHTML = `
            <img class="rounded border border-2 border-warning" src="${pais.imagem}" alt="" width="220">
            <div>
              <h3><a href="${pais.link}">${pais.nome}</a></h3>
              <p>${pais.descricao}</p>
            </div>
          `;

          gridPaisesContainer.appendChild(paisElement);
        });
      } else {
        console.error("A propriedade 'paises' não está definida ou está vazia nos dados retornados pela API.");
      }
    })
    .catch((error) => console.error("Erro ao buscar dados:", error));
});
