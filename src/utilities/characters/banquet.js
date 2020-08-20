export const banquet = [].reduce((results, entry) => {
  const key = entry.name.split(" ")[0].toLowerCase();
  results[key] = {
    ...entry,
    location: "/valhalla/banquet",
    exit: "The Banquet Hall"
  };
  return results;
}, {});
