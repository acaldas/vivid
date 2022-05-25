function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace(".png", "")] = r(item);
  });
  return images;
}

const Cards = importAll(require.context(".", false, /\.png$/));

export default Cards;
