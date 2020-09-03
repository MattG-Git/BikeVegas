
        const myMap = L.map('mapid').setView([36.0128, -114.92242], 17);

        const attribution = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, {attribution});
        tiles.addTo(myMap);

        const marker = L.marker([36.0128, -114.92242]).addTo(myMap);
