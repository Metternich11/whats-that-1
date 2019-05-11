const generatePicRotateDegree = () => {
  let number = Math.floor(Math.random() * 3);
  let posOrNegGenerator = ~~(Math.random() * 2) ? -number : number;
  return posOrNegGenerator;
};

export default generatePicRotateDegree;
