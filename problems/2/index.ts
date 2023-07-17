export default function gcdOfStrings(str1: string, str2: string) {
  if (str1 + str2 !== str2 + str1) return "";
  const strGcd: any = (x: number, y: number) =>
    0 === y ? x : strGcd(y, x % y);
  return str1.substring(0, strGcd(str1.length, str2.length));
}
