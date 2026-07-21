import { formatTime } from "../src/utils.js";


describe("formatTime", () => {

  test("formats seconds into minutes and seconds", () => {
    expect(formatTime(65))
      .toBe("01 : 05");
  });


  test("formats zero seconds", () => {
    expect(formatTime(0))
      .toBe("00 : 00");
  });

});
