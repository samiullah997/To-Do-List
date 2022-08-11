function removeItem(itemIndex, data) {
  // const item = document.getElementById(index);
  //   item.remove();
  //   data = data.filter((list) => list.index !== index);
  //   localStorage.setItem('NOTE',JSON.stringify(data));

  const item = document.getElementById(itemIndex);
  item.remove();
  data = data.filter((list) => list.index !== itemIndex);

  const index = data.indexOf(itemIndex);
  if (index > -1) {
    data.splice(index, 1);
  }
  localStorage.setItem('NOTE', JSON.stringify(data));
}

export default removeItem;