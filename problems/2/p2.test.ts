import gcdOfStrings from "./index";

type TestCase = {
  str1: string;
  str2: string;
  output: string;
};

const cases: TestCase[] = [
  {
    str1: "ABCABC",
    str2: "ABC",
    output: "ABC",
  },
  {
    str1: "ABABAB",
    str2: "ABAB",
    output: "AB",
  },
  {
    str1: "LEET",
    str2: "CODE",
    output: "",
  },
];

describe("GCD of Strings", () => {
  it.each(cases)(
    "should return output: $output for input: $input",
    ({ str1, str2, output }: TestCase) => {
      const result = gcdOfStrings(str1, str2);
      expect(result).toEqual(output);
    }
  );
});
