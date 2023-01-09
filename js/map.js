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
const bradBike = L.icon({
    iconUrl: 'img/photos/mojo/mojo_12.jpg',
    iconSize: [66.6666, 100]
});

const bradBikePopup = "Brad just vibin'<br/> <img src='img/photos/mojo/mojo_12.jpg' alt='Brad vibin' with PBR' width='400px'/>";
const bradBikeOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([40.00818339038807, -105.27633844658811], {icon: bradBike}).bindPopup(bradBikePopup, bradBikeOptions).addTo(map);

//Banjo Russ
const russBanjo = L.icon({
    iconUrl: 'img/photos/mojo/mojo_13.jpg',
    iconSize: [66.6666, 100]
});

const russBanjoPopup = "Russ Shreddin' Banjo<br/> <img src='img/photos/mojo/mojo_13.jpg' alt='Russ Shreddin' Banjo' width='400px'/>";
const russBanjoOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([40.017358755799904, -105.28403441832609], {icon: russBanjo}).bindPopup(russBanjoPopup, russBanjoOptions).addTo(map);

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

//Norrebro People
const NorroPeople = L.icon({
    iconUrl: 'img/photos/copenhagen/copenhagen_5.jpg',
    iconSize: [80, 70]
});

const NorroPeoplePopup = "Some people vibin' in Norrebro, Copenhagen<br/> <img src='img/photos/copenhagen/copenhagen_5.jpg' alt='Vibin' in Norrebro' width='600px'/>";
const NorroPeopleOptions = {
    'maxWidth': '600',
    'className': 'popup'
}

L.marker([55.69951206053946, 12.541952779100939], {icon: NorroPeople}).bindPopup(NorroPeoplePopup, NorroPeopleOptions).addTo(map);

//Basketball in Norrebro
const basketballNorre = L.icon({
    iconUrl: 'img/photos/copenhagen/norro_1.jpg',
    iconSize: [100, 66.6666]
});

const basketballNorrePopup = "Playing basketball in Norrebro, Copenhagen<br/> <img src='img/photos/copenhagen/norro_1.jpg' alt='Basketball in Norrebro' width='700px'/>";
const basketballNorreOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([55.70357359763137, 12.543754582130294], {icon: basketballNorre}).bindPopup(basketballNorrePopup, basketballNorreOptions).addTo(map);

//Lisbon Bridge 
const lisbonBridge = L.icon({
    iconUrl: 'img/photos/portugal/port_8.jpg',
    iconSize: [66.6666, 100]
});

const lisbonBridgePopup = "Some nice signs in Lisbon<br/> <img src='img/photos/portugal/port_8.jpg' alt='Some nice signs in Lisbon' width='400px'/>";
const lisbonBridgeOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([38.710964371496935, -9.146866181574568], {icon: lisbonBridge}).bindPopup(lisbonBridgePopup, lisbonBridgeOptions).addTo(map);

//Lighthouse Portugal
const lighthousePortugal = L.icon({
    iconUrl: 'img/photos/portugal/port_2.jpg',
    iconSize: [66.6666, 100]
});

const lighthousePortugalPopup = "A lighthouse somewhere in Portugal<br/> <img src='img/photos/portugal/port_2.jpg' alt='A lighthouse somewhere in Portugal' width='400px'/>";
const lighthousePortugalOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([39.36069663438127, -9.407490616444353], {icon: lighthousePortugal}).bindPopup(lighthousePortugalPopup, lighthousePortugalOptions).addTo(map);

//Piano in Amsterdam
const pianoAmsterdam = L.icon({
    iconUrl: 'img/photos/amsterdam/amsterdam_2.jpg',
    iconSize: [100, 66.6666]
});

const pianoAmsterdamPopup = "Playing piano in the streets of Amsterdam<br/> <img src='img/photos/amsterdam/amsterdam_2.jpg' alt='Man playing piano in the streets of Amsterdam' width='700px'/>";
const pianoAmsterdamOptions = {
    'maxWidth': '700',
    'className': 'popup'
}

L.marker([52.37148576402526, 4.8904238561692335], {icon: pianoAmsterdam}).bindPopup(pianoAmsterdamPopup, pianoAmsterdamOptions).addTo(map);

//Dylan Surfing 
const tuscanyJack = L.icon({
    iconUrl: 'img/photos/people/people_2.jpg',
    iconSize: [66.6666, 100]
});

const tuscanyJackPopup = "Jack on the Super 8 in Tuscany<br/> <img src='img/photos/people/people_2.jpg' alt='Jack on the Super 8 in Tuscany' width='400px'/>";
const tuscanyJackOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([43.50918960509681, 10.962040454271447], {icon: tuscanyJack}).bindPopup(tuscanyJackPopup, tuscanyJackOptions).addTo(map);

//Massey in Paris
const parisMassey = L.icon({
    iconUrl: 'img/photos/paris/paris_1.jpg',
    iconSize: [66.6666, 100]
});

const parisMasseyPopup = "Massey hates the camera<br/> <img src='img/photos/paris/paris_1.jpg' alt='Massey in Paris' width='400px'/>";
const parisMasseyOptions = {
    'maxWidth': '400',
    'className': 'popup'
}

L.marker([48.878383372425425, 2.3428936813020775], {icon: parisMassey}).bindPopup(parisMasseyPopup, parisMasseyOptions).addTo(map);

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