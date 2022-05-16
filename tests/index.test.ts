import ciko from "../src/index";

it("Should Work", () => {
  ciko()
    .loop()
    .delay(2)
    .on(() => {})
    .delay(2)
    .on(() => {})
    .run();
  // expect(ciko()).toBe('Helloooooo');
});
