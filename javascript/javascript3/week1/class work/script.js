
/* const jsonExample = [{
	"name": " pizza",
	"id": "100",
	"price": "60",
	"drinks": ["cola","water"],
	"extras": ["mayo","tomato"]
},

{
	"name": "pasta",
	"id": "101",
	"price": "50",
	"drinks": ["water"],
	"extras": []

}]

// objects with two keys planets that has array of opjects 

const planets = `{
  "description": "Planets (including dwarf planets as recognized by the IAU) that orbit the Sun, with their natural satellites.",
  "planets": [
    {
      "name": "Mercury",
      "moons": []
    },
    {
      "name": "Venus",
      "moons": []
    },
    {
      "name": "Earth",
      "moons": [
        "Moon"
      ]
    },
    {
      "name": "Mars",
      "moons": [
        "Deimos",
        "Phobos"
      ]
    },
    {
      "name": "Ceres",
      "moons": []
    },
    {
      "name": "Jupiter",
      "moons": [
        "Metis",
        "Adrastea",
        "Amalthea",
        "Thebe",
        "Io",
        "Europa",
        "Ganymede",
        "Callisto",
        "Themisto",
        "Leda",
        "Himalia",
        "Lysithea",
        "Elara",
        "S/2000 J11",
        "S/2003 J12",
        "Carpo",
        "Euporie",
        "S/2003 J3",
        "S/2003 J18",
        "Orthosie",
        "Euanthe",
        "Harpalyke",
        "Praxidike",
        "Thyone",
        "S/2003 J16",
        "Iocaste",
        "Mneme",
        "Hermippe",
        "Thelxinoe",
        "Helike",
        "Ananke",
        "S/2003 J15",
        "Eurydome",
        "Arche",
        "Herse",
        "Pasithee",
        "S/2003 J10",
        "Chaldene",
        "Isonoe",
        "Erinome",
        "Kale",
        "Aitne",
        "Taygete",
        "S/2003 J9",
        "Carme",
        "Sponde",
        "Megaclite",
        "S/2003 J5",
        "S/2003 J19",
        "S/2003 J23",
        "Kalyke",
        "Kore",
        "Pasiphae",
        "Eukelade",
        "S/2003 J4",
        "Sinope",
        "Hegemone",
        "Aoede",
        "Kallichore",
        "Autonoe",
        "Callirrhoe",
        "Cyllene",
        "S/2003 J2"
      ]
    },
    {
      "name": "Saturn",
      "moons": [
        "Tarqeq",
        "Pan",
        "Daphnis",
        "Atlas",
        "Prometheus",
        "Pandora",
        "Epimetheus",
        "Janus",
        "Aegaeon",
        "Mimas",
        "Methone",
        "Anthe",
        "Pallene",
        "Enceladus",
        "Tethys",
        "Calypso",
        "Telesto",
        "Polydeuces",
        "Dione",
        "Helene",
        "Rhea",
        "Titan",
        "Hyperion",
        "Iapetus",
        "Kiviuq",
        "Ijiraq",
        "Phoebe",
        "Paaliaq",
        "Skathi",
        "Albiorix",
        "S/2007 S2",
        "Bebhionn",
        "Erriapo",
        "Siarnaq",
        "Skoll",
        "Tarvos",
        "Greip",
        "S/2004 S13",
        "Hyrrokkin",
        "Mundilfari",
        "S/2006 S1",
        "Jarnsaxa",
        "Narvi",
        "Bergelmir",
        "S/2004 S17",
        "Suttungr",
        "Hati",
        "S/2004 S12",
        "Bestla",
        "Farbauti",
        "Thrymr",
        "S/2007 S3",
        "Aegir",
        "S/2004 S7",
        "S/2006 S3",
        "Kari",
        "Fenrir",
        "Surtur",
        "Ymir",
        "Loge",
        "Fornjot"
      ]
    },
    {
      "name": "Uranus",
      "moons": [
        "Cordelia",
        "Ophelia",
        "Bianca",
        "Cressida",
        "Desdemona",
        "Juliet",
        "Portia",
        "Rosalind",
        "Cupid",
        "Belinda",
        "Perdita",
        "Puck",
        "Mab",
        "Miranda",
        "Ariel",
        "Umbriel",
        "Titania",
        "Oberon",
        "Francisco",
        "Caliban",
        "Stephano",
        "Trinculo",
        "Sycorax",
        "Margaret",
        "Prospero",
        "Setebos",
        "Ferdinand"
      ]
    },
    {
      "name": "Neptune",
      "moons": [
        "Naiad",
        "Thalassa",
        "Despina",
        "Galatea",
        "Larissa",
        "Proteus",
        "Triton",
        "Nereid",
        "Halimede",
        "Sao",
        "Laomedeia",
        "Psamathe",
        "Neso"
      ]
    },
    {
      "name": "Pluto",
      "moons": [
        "Charon",
        "Styx",
        "Nix",
        "Kerberos",
        "Hydra"
      ]
    },
    {
      "name": "Haumea",
      "moons": [
        "Namaka",
        "Hi'iaka"
      ]
    },
    {
      "name": "Makemake",
      "moons": []
    },
    {
      "name": "Eris",
      "moons": [
        "Dysnomia"
      ]
    }
  ]
}`

const planetsJson = JSON.parse(planets);
console.log(planetsJson.planets[5].moons[62]);
*/ 



fetch('http://api.open-notify.org/astros.json')
.then(response => response.json()) 

.then((astronautsInSpace) => {
	astronautsInSpace.people.forEach((person) => {
		console.log(person.name);
})
	console.log(astronautsInSpace.people)
});


fetch('https://api.thecatapi.com/v1/images/search?breed_ids=sibe&api_key=2a32efac-11c3-4ef4-8d6e-ea59ac0bd3b4')
.then(response => response.json()) 
.then((sibeCats)=> {
//	console.log(sibeCats);
	console.log(sibeCats[0].url);
});

//const imgTag = document.createElement("img");
//imgTag.setAttribute("src,")