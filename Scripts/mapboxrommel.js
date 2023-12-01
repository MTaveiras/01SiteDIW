        // --------------------------------------------------
        // Cria o mapa baseado na API Mapbox e adiciona no 
        // elemento de id: map        
        // --------------------------------------------------

        // ----------------------------------------------
        // Cria o mapa e adiciona no elemento de id: map 
        const centralLatLong= [-43.9397233,-19.9332786]

        // ----------------------------------------------
        // IMPORTANTE: Crie uma conta no Mapbox e adicione  
        // sua accessToken na linha abaixo
        mapboxgl.accessToken = 'pk.eyJ1IjoibWN0czExIiwiYSI6ImNscGxyYXh1djAyanYybm1sbmtzbGZrZDQifQ.gzJAtSvHTO5KQQxdPnxOIg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: centralLatLong,
            zoom: 9
        });


        // ----------------------------------------------
        // Adiciona marcadores para unidades da PUC Minas
        unidadesPUC.forEach ((uni) => {
            let popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                          ${uni.endereco} <br> ${uni.cidade}`);
            const marker = new mapboxgl.Marker({ color: uni.cor })
                .setLngLat(uni.latlong)
                .setPopup(popup)
                .addTo(map);     
        }) 


        // ----------------------------------------------
        // Adiciona um marcador com nossa posição no mapa
        function processarGeo (local) {
          let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3> Estou aqui!!! </h3>`);
          const marker = new mapboxgl.Marker({ color: 'yellow' })
              .setLngLat([local.coords.longitude, local.coords.latitude])
              .setPopup(popup)
              .addTo(map);  
        }

        navigator.geolocation.getCurrentPosition (processarGeo, () => { alert ('Erro ao obter localização.') })