document.addEventListener("DOMContentLoaded", function () {
   
    const params = new URLSearchParams(window.location.search);
    const paisSelecionado = params.get('pais');
  
    
    if (paisSelecionado) {
     
      fetch("https://json-diw.mtaveiras.repl.co/paises")
        .then((response) => response.json())
        .then((data) => {
          // Encontrar o país nos dados
          const pais = data.paises.find((p) => p.nome === paisSelecionado);
  
          if (pais) {
           
            document.getElementById("nomePais").innerText = pais.nome;
            document.getElementById("imagemPais").src = pais.imagem;
            document.getElementById("linkPais").href = pais.link;
            document.getElementById("descricaoPais").innerText = pais.descricao;
  
           
            const pontosContainer = document.getElementById("pontosTuristicos");
            pontosContainer.innerHTML = '';
  
            pais.conteudo.pontosTuristicos.forEach((ponto) => {
              const card = document.createElement("div");
              card.className = "ponto-turistico";
  
              const imagem = document.createElement("img");
              imagem.src = ponto.imagem;
              imagem.alt = ponto.nome;
  
              const nome = document.createElement("h3");
              nome.innerText = ponto.nome;
  
              const link = document.createElement("a");
              link.href = ponto.link;
              link.appendChild(imagem);
  
              card.appendChild(link);
              card.appendChild(nome);
              pontosContainer.appendChild(card);
            });
          } else {
            console.error(`País "${paisSelecionado}" não encontrado nos dados.`);
          }
        })
        .catch((error) => console.error("Erro ao buscar dados:", error));
    } else {
      console.error("Nome do país não especificado nos parâmetros de consulta.");
    }
  });
  
  