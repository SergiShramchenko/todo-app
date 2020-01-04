const filterToggle = (items, filter) => {
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter(item => !item.done);
    case 'done':
      return items.filter(item => item.done);
    default:
      return items;
  }
};
export default filterToggle;
