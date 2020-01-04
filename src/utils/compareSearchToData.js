const compareSearchToData = (data, term) => {
  if (term.length === 0) return data;

  return data.filter(({ name }) =>
    name.toLowerCase().includes(term.toLowerCase())
  );
};

export default compareSearchToData;
