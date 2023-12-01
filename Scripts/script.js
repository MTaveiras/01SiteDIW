document.addEventListener("DOMContentLoaded", function () {
    fetch("https://MTaveiras.JSON-DIW.repl.co/paises")
      .then((response) => response.json())
      .then((data) => {
        const gridPaisesContainer = document.querySelector(".grid-paises-container");
  
        data.paises.forEach((pais) => {
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
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  });
  