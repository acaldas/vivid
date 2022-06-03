function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace(".jpg", "")] = r(item);
  });
  return images;
}

const Cards = importAll(require.context(".", false, /\.jpg$/));

export default Cards;
