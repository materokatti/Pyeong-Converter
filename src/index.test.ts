import { pyeongToSquareMeters, squareMetersToPyeong } from "./index";

describe("Area conversion tests", () => {
  test("1 Pyeong to square meters", () => {
    expect(pyeongToSquareMeters(1)).toBeCloseTo(3.3058);
  });
  test("10 square meters to Pyeong", () => {
    expect(squareMetersToPyeong(10)).toBeCloseTo(3.025);
  });
});
