const createMobilePhoneNumber = require("./index");

it("Should create a random German mobile phone number", () => {
  const germanMobileNumber = createMobilePhoneNumber("DE");
  expect(germanMobileNumber).toHaveLength(14);
  expect(germanMobileNumber).toContain("+49");
});

it("Should create a random Turkish mobile phone number", () => {
  const turkishMobileNumber = createMobilePhoneNumber("TR");
  expect(turkishMobileNumber).toHaveLength(13);
  expect(turkishMobileNumber).toContain("+90");
});
it("Should create a random UK mobile phone number", () => {
  const ukMobileNumber = createMobilePhoneNumber("UK");
  expect(ukMobileNumber).toHaveLength(13);
  expect(ukMobileNumber).toContain("+44");
});
it("Should create a random USA mobile phone number", () => {
  const usaMobileNumber = createMobilePhoneNumber("USA");
  expect(usaMobileNumber).toHaveLength(12);
  expect(usaMobileNumber).toContain("+1");
});
it("Should throw Unsupported Country Id error", () => {
  expect(() => {
    createMobilePhoneNumber("LM");
  }).toThrow(Error);
});
