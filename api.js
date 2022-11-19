const API_URL = `https://api.le-systeme-solaire.net/rest/bodies/`;

const getSolarData = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const { bodies } = data;
      return Object.entries(bodies).map(([idx, sol]) => {
        return {
          idx: idx,
          solName: sol.name,
          englishName: sol.englishName,
          gravity: sol.gravity,
          density: sol.density,
          semimajorAxis: sol.semimajorAxis,
          sideralOrbit: sol.sideralOrbit,
          sideralRotation: sol.sideralRotation,
          isPlanet: sol.isPlanet,
          orbitPlanet: sol.aroundPlanet,
        };
      });
    });
};

let solsIndex;

const displaySolarData = (sols) => {
  const selectSols = sols[solsIndex];
  console.log(selectSols.solName);
};

getSolarData().then((sols) => {
  solsIndex = sols.length - 3;
  displaySolarData(sols);
  console.log(solsIndex);
});
