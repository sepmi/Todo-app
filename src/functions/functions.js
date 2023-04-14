export const save = (name, data) => {
  const jsonArray = JSON.stringify(data);
  localStorage.setItem(name, jsonArray);
};

export const clear = () => {
  localStorage.clear();
};

export const parsed = (name) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name));
  } else {
    return [];
  }
};

export const remove = (name) => {
  localStorage.removeItem(name);
};
