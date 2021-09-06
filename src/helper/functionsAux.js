// Home stats
export const averageHeight = (team) => {

  let heights = [];
  if (team.length > 0) {
    team.map((h) => heights.push(parseInt(h.appearance.height[1])));
    return Math.floor(heights.reduce((acc, h) => acc + h) / team.length);
  }else{
    return 0
  }
};

export const averageWeight = (team) => {

  let weights = [];
  if (team.length > 0) {
    team.map((h) => weights.push(parseInt(h.appearance.weight[1])));
    return Math.floor(weights.reduce((acc, h) => acc + h) / team.length);
  }else{
    return 0
  }
};

export const strongestStat = (team) => {

  const arrPower = powerStats(team);

  const max = Math.max(...arrPower);

  return arrPower.indexOf(max);
};

export const powerStats = (team) => {
  let teamStats = {};
  let keys = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];
  for (const key of keys) {
    teamStats[key] = 0;
  }
  if (team.length > 0) {
    team.forEach((h) => {
      for (let i = 0; i < keys.length; i++) {
        teamStats[keys[i]] += Number(h.powerstats[keys[i]]) || 0;
      }
    });
  }
  return Object.values(teamStats);
};
