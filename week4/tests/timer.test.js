import { jest } from "@jest/globals";
import { Timer } from "../src/timer.js";


describe("Timer class", () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });


  afterEach(() => {
    jest.useRealTimers();
  });


  test("starts timer and increments seconds", () => {

    const callback = jest.fn();

    const timer = new Timer(callback);


    timer.start();


    jest.advanceTimersByTime(3000);


    expect(timer.getTime())
      .toBe(3);

    expect(callback)
      .toHaveBeenCalledTimes(3);

  });


  test("stops timer", () => {

    const callback = jest.fn();

    const timer = new Timer(callback);


    timer.start();

    jest.advanceTimersByTime(2000);


    timer.stop();


    jest.advanceTimersByTime(2000);


    expect(timer.getTime())
      .toBe(2);

    expect(callback)
      .toHaveBeenCalledTimes(2);

  });


  test("resets timer", () => {

    const timer = new Timer();


    timer.start();


    jest.advanceTimersByTime(5000);


    timer.reset();


    expect(timer.getTime())
      .toBe(0);

  });


  test("returns initial time as zero", () => {

    const timer = new Timer();


    expect(timer.getTime())
      .toBe(0);

  });


  test("calls callback with updated seconds", () => {

    const callback = jest.fn();

    const timer = new Timer(callback);


    timer.start();


    jest.advanceTimersByTime(1000);


    expect(callback)
      .toHaveBeenCalledWith(1);

  });

});