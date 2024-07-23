function convert(entries) {
    return entries.map(([key, value]) => ({ [key]: value }));
  }
  
  const entries = [['1', 'a'], ['2', 'b'], ['3', 'c']];
  const output = convert(entries);
  console.log(output);
  