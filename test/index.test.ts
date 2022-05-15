import { sampleFunction } from "../src/index";

describe("Test Sample", () => {
  test("Case Sample", () => {
    expect(sampleFunction("Mock")).toEqual("SampleFunction Print :: Mock");
  });
});
