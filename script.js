const API_URL = `https://api.le-systeme-solaire.net/rest/bodies/`;

const getSolarData = async () => {
  return await fetch(API_URL)
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

getSolarData().then((solarData) => {
  console.log(solarData);
});
