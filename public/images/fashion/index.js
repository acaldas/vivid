function importAll(r, extension) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace(`.${extension}`, "")] = r(item);
  });
  return images;
}

const Looks = importAll(require.context(".", true, /\.jpg$/), "jpg");
export const LooksDescription = importAll(
  require.context(".", true, /\.txt$/),
  "txt"
);

export default Looks;
