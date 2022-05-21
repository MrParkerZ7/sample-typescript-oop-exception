import { sampleFunction, SampleThrowing } from "../src/index";

describe("OOP Exception", () => {
  test("Case Sample", () => {
    expect(sampleFunction("Mock")).toEqual("SampleFunction Print :: Mock");
  });

  test("Case unknow", () => {
    const Mock = new SampleThrowing();

    expect(() => Mock.throwUncatchException()).toThrow("Mock_Unknow");
  });

  test("Case re throw", () => {
    const Mock = new SampleThrowing();

    expect(() => Mock.reThrowCommonException()).toThrow("Exception_Throw_verify");
  });

  test("Case catch able", () => {
    const Mock = new SampleThrowing();

    expect(Mock.catchCommonException()).toEqual(undefined);
    expect(Mock.catchBusinessException()).toEqual(undefined);
  });

  test("Case uncatch able", () => {
    const Mock = new SampleThrowing();

    expect(() => Mock.throwNonCommonException()).toThrow(
      "Mock_BusinessException"
    );
    expect(() => Mock.throwNonBusinessException()).toThrow(
      "Mock_CommonException"
    );
  });
});
