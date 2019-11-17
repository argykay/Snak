import dataArray from "../data/dataArray";

export default function getStars() {
  const stars = dataArray.filter(item => item.isUsed === true);
  let starsCount = stars.length;
  return starsCount;
}
