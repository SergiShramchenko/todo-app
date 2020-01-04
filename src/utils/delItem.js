import findIdx from './findIdx';

const delItem = (arr, id) => {
  const idx = findIdx(arr, id);
  const newData = [...arr.slice(0, idx), ...arr.slice(idx + 1)];

  return newData;
};

export default delItem;
