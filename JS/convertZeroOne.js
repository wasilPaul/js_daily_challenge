const data1 = "zero one zero one zero one zero one";
const data2 = "one zero zero one zero ten one one one one two";
const data3 =
  "one Zero zero one zero zero one one one one one zero oNe one one zero one zerO";

const dict = { zero: 0, one: 1 };

const textToNumberBinary = str => {
  const binary = str
    .toLowerCase()
    .split(" ")
    .filter(character => character === "zero" || character === "one")
    .map(characters => dict[characters])
    .join("");
  const charactersLength = binary.length;
  if (charactersLength < 8) return "";
  const binaryLength = charactersLength - (charactersLength % 8);
  const binaryNum = binary.slice(0, binaryLength);
  return binaryNum;
};

const textToNumberBinary2 = str => {
  const cleanStr = str
    .replace(/zero/gi, "0")
    .replace(/one/gi, "1")
    .replace(/[^01]/g, "");

  const strLength = Math.floor(cleanStr.length / 8) * 8;

  return cleanStr.slice(0, strLength);
};
