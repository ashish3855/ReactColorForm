const newColorCreated = color => {
  console.log("new color created", color);
  return {
    type: "newColorCreated",
    payload: color
  };
};

export default newColorCreated;
