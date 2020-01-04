const toggleProperty = (arr, id, propName) => {
  const idx = arr.findIndex(el => el.id === id);

  const oldItem = arr[idx]; // take one item with correct index
  const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // update property that we need to update

  return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]; // update our main data with newItem
};

export default toggleProperty;
