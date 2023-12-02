        const centralLatLong= [12.4964, 41.9028]
        mapboxgl.accessToken = 'pk.eyJ1IjoibWN0czExIiwiYSI6ImNscGxyYXh1djAyanYybm1sbmtzbGZrZDQifQ.gzJAtSvHTO5KQQxdPnxOIg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: centralLatLong,
            zoom: 4
        });

        fetch("https://json-diw.mtaveiras.repl.co/paises")
        .then(response => response.json())
        .then(paises => {
            paises.forEach((pais) => {
                let popup = new mapboxgl.Popup({ offset: 25 })
                    .setHTML(`<h3>${pais.nome}</h3><img src="${pais.imagem}" alt="${pais.nome}" style="max-width: 100px;"><br>${pais.descricao}<br><a href="${pais.link}" target="_blank">Ver mais</a>`);
                const marker = new mapboxgl.Marker({ color: 'blue' })
                    .setLngLat(pais.coordenadas)
                    .setPopup(popup)
                    .addTo(map);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });

        function processarGeo (local) {
          let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3> Estou aqui!!! </h3>`);
          const marker = new mapboxgl.Marker({ color: 'yellow' })
              .setLngLat([local.coords.longitude, local.coords.latitude])
              .setPopup(popup)
              .addTo(map);  
        }

        navigator.geolocation.getCurrentPosition (processarGeo, () => { alert ('Erro ao obter localização.') })
