import mergeAlternately from "./index";

type TestCase = {
  word1: string;
  word2: string;
  output: string;
};

const cases: TestCase[] = [
  {
    word1: "abc",
    word2: "pqr",
    output: "apbqcr",
  },
  {
    word1: "ab",
    word2: "pqrs",
    output: "apbqrs",
  },
  {
    word1: "abcd",
    word2: "pq",
    output: "apbqcd",
  },
];

describe("Merge alternately", () => {
  it.each(cases)(
    "should return output: $output for input: $input",
    ({ word1, word2, output }: TestCase) => {
      const result = mergeAlternately(word1,word2);
      expect(result).toEqual(output);
    }
  );
});
