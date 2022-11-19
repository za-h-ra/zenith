const API_URL = `https://api.le-systeme-solaire.net/rest/bodies/`;

const getSolarData = async () => {
  await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      // Get data from the API
      const { bodies } = data;

      bodies.map(
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
          console.log(
            `${name}, ${isPlanet}, ${gravity}, "AROUND PLANET:" ${
              aroundPlanet === null ? "" : aroundPlanet.planet
            }`
          );
        }
      );
    });
};

getSolarData();
