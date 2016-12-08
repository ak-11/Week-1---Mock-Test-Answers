

  const list = [
               { id: 1, active: false },
               { id: 2, active: false },
               { id: 3, active: true  },
               { id: 4, active: false }
             ];



const markActive = function (list, id) {
  for (let val in list) {
    if (list[val].id === id) {
      list[val].active = true;
    } else {
      list[val].active = false;
    }
  }
  return list;
};

console.log(markActive(list, 2));