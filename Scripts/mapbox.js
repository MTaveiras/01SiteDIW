        const centralLatLong= [-43.9397233,-19.9332786]
        mapboxgl.accessToken = 'pk.eyJ1IjoibWN0czExIiwiYSI6ImNscGxyYXh1djAyanYybm1sbmtzbGZrZDQifQ.gzJAtSvHTO5KQQxdPnxOIg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: centralLatLong,
            zoom: 9
        });

        unidadesPUC.forEach ((uni) => {
            let popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                          ${uni.endereco} <br> ${uni.cidade}`);
            const marker = new mapboxgl.Marker({ color: uni.cor })
                .setLngLat(uni.latlong)
                .setPopup(popup)
                .addTo(map);     
        }) 

        function processarGeo (local) {
          let popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3> Estou aqui!!! </h3>`);
          const marker = new mapboxgl.Marker({ color: 'yellow' })
              .setLngLat([local.coords.longitude, local.coords.latitude])
              .setPopup(popup)
              .addTo(map);  
        }

        navigator.geolocation.getCurrentPosition (processarGeo, () => { alert ('Erro ao obter localização.') })