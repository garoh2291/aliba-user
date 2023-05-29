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

export function clearStorage() {
  localStorage.removeItem("finale");
  localStorage.removeItem("course");
}

export function saveStorage(finale, course) {
  localStorage.setItem("finale", JSON.stringify(finale));
  localStorage.setItem("course", JSON.stringify(course));
}
