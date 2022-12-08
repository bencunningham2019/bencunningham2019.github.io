const apiKey = 'AIzaSyAlkUsbp29IVB_9J9rRLpJiMUY0jfKfJ_Y'

const map = L.map('map').setView([38.97087688800689, -53.99106807844726], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

//Josh LA
const skateLA = L.icon({
    iconUrl: 'img/photos/skate/skate_1.jpg',
    iconSize: [100, 66.6666]
});

const skateLAPopup = "Josh's kickflip at the West LA Courthouse<br/> <img src='img/photos/skate/skate_1.jpg' alt='Josh Skating in LA' width='700px'/>";
const skateLAOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([34.04547978020559, -118.44998901498442], {icon: skateLA}).bindPopup(skateLAPopup, skateLAOptions).addTo(map);

//Rainbow Pearl
const mojoPearl = L.icon({
    iconUrl: 'img/photos/mojo/mojo_2.jpg',
    iconSize: [100, 66.6666]
});

const mojoPearlPopup = "Photoshoot on Pearl St, Boulder<br/> <img src='img/photos/mojo/mojo_2.jpg' alt='Photoshoot on Pearl St, Boulder' width='700px'/>";
const mojoPearlOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([40.017357099376824, -105.2826131556232], {icon: mojoPearl}).bindPopup(mojoPearlPopup, mojoPearlOptions).addTo(map);

//Pittsburgh Building
const pittsburghBuilding = L.icon({
    iconUrl: 'img/photos/copenhagen/pittsburgh.jpg',
    iconSize: [80, 70]
});

const pittsburghBuildingPopup = "Caligraphy in Pittsburgh<br/> <img src='img/photos/copenhagen/pittsburgh.jpg' alt='Interesting Building in Pittsburgh' width='600px'/>";
const pittsburghBuildingOptions = {
    'maxWidth': '600',
    'className': 'popup'
}

L.marker([40.431971106233945, -80.00924509585033], {icon: pittsburghBuilding}).bindPopup(pittsburghBuildingPopup, pittsburghBuildingOptions).addTo(map);

//Alaska Trash Dump
const alaskaTrash = L.icon({
    iconUrl: 'img/photos/alaska/alaska_3.jpg',
    iconSize: [66.6666, 100]
});

const alaskaTrashPopup = "Trash dump in Alaska<br/> <img src='img/photos/alaska/alaska_3.jpg' alt='Trash dump in Alaska' width='400px'/>";
const alaskaTrashOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([55.29944686824539, -133.24249203080274], {icon: alaskaTrash}).bindPopup(alaskaTrashPopup, alaskaTrashOptions).addTo(map);

//Josh on the boat Alaska 
const alaskaJoshBoat = L.icon({
    iconUrl: 'img/photos/alaska/alaska_1.jpg',
    iconSize: [100, 66.6666]
});

const alaskaJoshBoatPopup = "Josh on the fishing boat<br/> <img src='img/photos/alaska/alaska_1.jpg' alt='Josh on the fishing boat' width='700px'/>";
const alaskaJoshBoatOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([55.601262381368, -133.5050119019379], {icon: alaskaJoshBoat}).bindPopup(alaskaJoshBoatPopup, alaskaJoshBoatOptions).addTo(map);

//Brad Vibin'
const bradPBR = L.icon({
    iconUrl: 'img/photos/mojo/mojo_9.jpg',
    iconSize: [66.6666, 100]
});

const bradPBRPopup = "Brad just vibin'<br/> <img src='img/photos/mojo/mojo_9.jpg' alt='Brad vibin' with PBR' width='400px'/>";
const bradPBROptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([40.00818339038807, -105.27633844658811], {icon: bradPBR}).bindPopup(bradPBRPopup, bradPBROptions).addTo(map);

//I think Dylan at Sano
const dylanSano = L.icon({
    iconUrl: 'img/photos/surf/surf_1.jpg',
    iconSize: [100, 66.6666]
});

const dylanSanoPopup = "I think this is Dylan shredding<br/> <img src='img/photos/surf/surf_1.jpg' alt='Dylan Surfin' Sano' width='700px'/>";
const dylanSanoOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([33.371039868012936, -117.5693303023309], {icon: dylanSano}).bindPopup(dylanSanoPopup, dylanSanoOptions).addTo(map);

//From the empire
const empire = L.icon({
    iconUrl: 'img/photos/people/people_1.jpg',
    iconSize: [100, 66.6666]
});

const empirePopup = "From the Empire State Building, looking out on Manhatten<br/> <img src='img/photos/people/people_1.jpg' alt='From the empire looking out on Manhatten' width='700px'/>";
const empireOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([40.74942873796643, -73.98580386391858], {icon: empire}).bindPopup(empirePopup, empireOptions).addTo(map);

//Josh in ventura
const joshVentura = L.icon({
    iconUrl: 'img/photos/surf/surf_2.jpg',
    iconSize: [100, 66.6666]
});

const joshVenturaPopup = "Josh on the beach in Ventura, CA<br/> <img src='img/photos/surf/surf_2.jpg' alt='Josh on the beach in Ventura' width='700px'/>";
const joshVenturaOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([34.39370027731058, -119.52587237933919], {icon: joshVentura}).bindPopup(joshVenturaPopup, joshVenturaOptions).addTo(map);

//Milby surfing
const milbsSurfing = L.icon({
    iconUrl: 'img/photos/surf/surf_3.jpg',
    iconSize: [100, 66.6666]
});

const milbsSurfingPopup = "Milbs surfing Sano<br/> <img src='img/photos/surf/surf_3.jpg' alt='Milbs surfing Sano' width='700px'/>";
const milbsSurfingOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([33.37500925364869, -117.57202398278791], {icon: milbsSurfing}).bindPopup(milbsSurfingPopup, milbsSurfingOptions).addTo(map);

//Linds and Kade Florence
const girlsFlorence = L.icon({
    iconUrl: 'img/photos/italy/florence_1.jpg',
    iconSize: [66.6666, 100]
});

const girlsFlorencePopup = "Kaden and Lindsey in Florence<br/> <img src='img/photos/italy/florence_1.jpg' alt='Kaden and Lindsey in Florence' width='400px'/>";
const girlsFlorenceOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([43.76741368849434, 11.256078686633169], {icon: girlsFlorence}).bindPopup(girlsFlorencePopup, girlsFlorenceOptions).addTo(map);

//Surf in Portugal
const surfPortugal = L.icon({
    iconUrl: 'img/photos/portugal/port_1.jpg',
    iconSize: [100, 66.6666]
});

const surfPortugalPopup = "Surf in Peniche, Portugal<br/> <img src='img/photos/portugal/port_1.jpg' alt='Surf in Portugal' width='700px'/>";
const surfPortugalOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([39.37113128864268, -9.385480056332149], {icon: surfPortugal}).bindPopup(surfPortugalPopup, surfPortugalOptions).addTo(map);

//Canal Amsterdam
const canalAmsterdam = L.icon({
    iconUrl: 'img/photos/amsterdam/amsterdam_1.jpg',
    iconSize: [100, 66.6666]
});

const canalAmsterdamPopup = "On the canal in Amsterdam<br/> <img src='img/photos/amsterdam/amsterdam_1.jpg' alt='On the canal in Amsterdam' width='700px'/>";
const canalAmsterdamOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([52.35915074819332, 4.889475585094851], {icon: canalAmsterdam}).bindPopup(canalAmsterdamPopup, canalAmsterdamOptions).addTo(map);

//Copenhagen Metro
const metroCopenhagen = L.icon({
    iconUrl: 'img/photos/copenhagen/copenhagen_2.jpg',
    iconSize: [66.6666, 100]
});

const metroCopenhagenPopup = "Off the metro in Copenhagen<br/> <img src='img/photos/copenhagen/copenhagen_2.jpg' alt='Off the metro in Copenhagen' width='400px'/>";
const metroCopenhagenOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([55.68055229438712, 12.585267005728833], {icon: metroCopenhagen}).bindPopup(metroCopenhagenPopup, metroCopenhagenOptions).addTo(map);

//Massey beach Portugal
const masseyBeachPortugal = L.icon({
    iconUrl: 'img/photos/portugal/port_7.jpg',
    iconSize: [66.6666, 100]
});

const masseyBeachPortugalPopup = "Massey in the middle of nowhere in Portugal<br/> <img src='img/photos/portugal/port_7.jpg' alt='Massey in the middle of nowhere in Portugal' width='400px'/>";
const masseyBeachPortugalOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([39.04133989377542, -9.415804535051178], {icon: masseyBeachPortugal}).bindPopup(masseyBeachPortugalPopup, masseyBeachPortugalOptions).addTo(map);
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