window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = '🍺';

  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
      {
          name: 'Rosemary Branch',
          location: {
              lat: 51.5376801,
              lng: -0.0886116
          },
      },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
      let latitude = place.location.lat;
      let longitude = place.location.lng;

      // add place name
      const placeText = document.createElement('a-link');
      placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      placeText.setAttribute('title', place.name);
      placeText.setAttribute('scale', '15 15 15');

      placeText.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        alert('Greg would like a neck oil')
    });

    scene.appendChild(placeText);

  });
}