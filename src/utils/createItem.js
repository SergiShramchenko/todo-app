function createItem(text) {
  let maxId = 100;
  return {
    name: text,
    done: false,
    imp: false,
    id: maxId * Math.random()
  };
}

export default createItem;
