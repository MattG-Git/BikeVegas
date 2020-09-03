
        const myMap = L.map('mapid').setView([36.04748, -115.0549], 17);

        const attribution = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, {attribution});
        tiles.addTo(myMap);

        const marker = L.marker([36.04748, -115.0549]).addTo(myMap);