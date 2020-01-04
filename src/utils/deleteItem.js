import findIdx from './findIdx';

const deleteItem = (data, id) => {
  const idx = findIdx(data, id);
  const newData = [...data.slice(0, idx), ...data.slice(idx + 1)];
};

export default deleteItem;

// delItem = (data, id) => {
//   this.setState(() => {
//     const idx = findIdx(data, id);

//     const newData = [...data.slice(0, idx), ...data.slice(idx + 1)];
//     return {
//       data: newData
//     };
//   });
// };
