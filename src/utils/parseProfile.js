export default function parseProfile(data) {
  const categories = {};
  for (let record of data) {
    if (!categories[record.label]) {
      categories[record.label] = [];
    }
    categories[record.label].push({record});
  }
  return toArray(categories);
}

function toArray(data) {
  const result = [];
  for (let key of Object.keys(data)) {
    const record = {
      label: key,
      tracks: data[key],
    };
    result.push(record);
  }
  return result;
}
