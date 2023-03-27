export const getDataFromLocalStorage = (label: any) => {
  const savedData = localStorage.getItem(label);
  if (savedData) {
    const data = JSON.parse(savedData);
    return data;
  }
};
