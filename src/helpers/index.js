export const handleCheck = (obj) => {
  let answer = true;
  const newObj = obj;
  delete newObj.insPrice;
  const details = Object.values(newObj);

  for (let item of details) {
    if (item.value === "") {
      answer = false;
      break;
    }
  }

  return answer;
};
