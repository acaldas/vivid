function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace(".jpg", "")] = r(item);
  });
  return images;
}

const Looks = importAll(require.context(".", false, /\.jpg$/));

export default Looks;
