const API_URL = `https://api.le-systeme-solaire.net/rest/bodies/`;

const getSolarData = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      // Get data from the API
      const { bodies } = data;

      return bodies.map(
        ({
          name,
          englishName,
          isPlanet,
          gravity,
          density,
          semimajorAxis,
          sideralOrbit,
          sideralRotation,
          aroundPlanet,
        }) => {
          return {
            name,
            englishName,
            isPlanet,
            gravity,
            density,
            semimajorAxis,
            sideralOrbit,
            sideralRotation,
            aroundPlanet,
          };
        }
      );
    });
};

// RENDER TO HTML

// const currentName = document.querySelector("[data-current-name]");

// const displaySolarData = (data) => {
//   console.log(data);
// };

let solarIndex;

getSolarData().then((data) => {
  console.log(data);
});
