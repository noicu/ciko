import Ciko from "../src/index";

it("Should Work", () => {
  const ciko = new Ciko();

  ciko
    .delay(2)
    .on(() => {
      console.log(1);
    })
    .delay(2)
    .on("", () => {
      console.log(1);
    })
    .to("111", (c) => false)
    .to("222");

  ciko
    .fork("111")
    .delay(2)
    .on(() => {
      console.log(3);
    });

  ciko
    .fork("222")
    .delay(2)
    .on(() => {
      console.log(3);
    });

  ciko.run(["222", "111", {}]);
  // expect(ciko()).toBe('Helloooooo');
});
