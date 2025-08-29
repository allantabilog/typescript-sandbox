import { complement } from "./rna";

describe("rna transcription tests", () => {
  test("transcribes bases correctly", () => {
    expect(complement("G")).toEqual("C");
    expect(complement("G")).toEqual("C");
    expect(complement("G")).toEqual("C");
    expect(complement("G")).toEqual("C");
  });
});
