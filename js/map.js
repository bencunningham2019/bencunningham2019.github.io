const apiKey = 'AIzaSyAlkUsbp29IVB_9J9rRLpJiMUY0jfKfJ_Y'

const map = L.map('map').setView([39.2040024095786, -99.39617699585203], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//Josh LA
const skateLA = L.icon({
    iconUrl: 'img/photos/skate/skate_1.jpg',
    iconSize: [100, 66.6666]
});

const skateLAPopup = "Josh's kickflip at the West LA Courthouse<br/> <img src='img/photos/skate/skate_1.jpg' alt='Josh Skating in LA' width='350px'/>";
const skateLAOptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([34.04547978020559, -118.44998901498442], {icon: skateLA}).bindPopup(skateLAPopup, skateLAOptions).addTo(map);

//Rainbow Pearl
const mojoPearl = L.icon({
    iconUrl: 'img/photos/mojo/mojo_2.jpg',
    iconSize: [100, 66.6666]
});

const mojoPearlPopup = "Photoshoot on Pearl St, Boulder<br/> <img src='img/photos/mojo/mojo_2.jpg' alt='Photoshoot on Pearl St, Boulder' width='350px'/>";
const mojoPearlOptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([40.017357099376824, -105.2826131556232], {icon: mojoPearl}).bindPopup(mojoPearlPopup, mojoPearlOptions).addTo(map);

//Pittsburgh Building
const pittsburghBuilding = L.icon({
    iconUrl: 'img/photos/copenhagen/pittsburgh.jpg',
    iconSize: [80, 70]
});

const pittsburghBuildingPopup = "Caligraphy in Pittsburgh<br/> <img src='img/photos/copenhagen/pittsburgh.jpg' alt='Interesting Building in Pittsburgh' width='350px'/>";
const pittsburghBuildingOptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([40.431971106233945, -80.00924509585033], {icon: pittsburghBuilding}).bindPopup(pittsburghBuildingPopup, pittsburghBuildingOptions).addTo(map);

//Alaska Trash Dump
const alaskaTrash = L.icon({
    iconUrl: 'img/photos/alaska/alaska_3.jpg',
    iconSize: [66.6666, 100]
});

const alaskaTrashPopup = "Trash dump in Alaska<br/> <img src='img/photos/alaska/alaska_3.jpg' alt='Trash dump in Alaska' width='350px'/>";
const alaskaTrashOptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([55.29944686824539, -133.24249203080274], {icon: alaskaTrash}).bindPopup(alaskaTrashPopup, alaskaTrashOptions).addTo(map);

//Josh on the boat Alaska 
const alaskaJoshBoat = L.icon({
    iconUrl: 'img/photos/alaska/alaska_1.jpg',
    iconSize: [100, 66.6666]
});

const alaskaJoshBoatPopup = "Josh on the fishing boat<br/> <img src='img/photos/alaska/alaska_1.jpg' alt='Josh on the fishing boat' width='350px'/>";
const alaskaJoshBoatOptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([55.601262381368, -133.5050119019379], {icon: alaskaJoshBoat}).bindPopup(alaskaJoshBoatPopup, alaskaJoshBoatOptions).addTo(map);

//Brad Vibin'
const bradPBR = L.icon({
    iconUrl: 'img/photos/mojo/mojo_9.jpg',
    iconSize: [100, 66.6666]
});

const bradPBRPopup = "Brad just vibin'<br/> <img src='img/photos/mojo/mojo_9.jpg' alt='Brad vibin' with PBR' width='350px'/>";
const bradPBROptions = {
    'maxWidth': '350',
    'className': 'popup'
}

L.marker([55.601262381368, -133.5050119019379], {icon: bradPBR}).bindPopup(bradPBRPopup, bradPBROptions).addTo(map);
// L.imageOverlay('img/photos/skate/skate_1.jpg', [[37.377647, -124.317798], [29.641249, -110.158219]], {
//     opacity: 0.8,
//     interactive: true
// }).addTo(map);




// let imageBounds = [[34.058669, -118.472328], [34.029121, -118.428130]];
// let url = img/photos/skate/skate_1.jpg

// let la1 = L.imageOverlay('img/photos/skate/skate_1.jpg', [[34.095178, -118.562084], [33.960444, -118.315137]]);
// let la2 = L.imageOverlay('img/photos/skate/skate_1.jpg', [[34.449385, -118.967884], [33.673495, -117.521808]]);

// map.on('zoomed', function() {
//     let currentZoom = map.getZoom();
//     if (currentZoom > 7) {
//         map.removeLayer(la1);
//         map.addLayer(la2);
//     }
// })