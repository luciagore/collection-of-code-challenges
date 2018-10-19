
describe("self power", () => {
  it("works", () => {
    expect(selfPower(0)).toBe(0);
    expect(selfPower(1)).toBe(1);
    expect(selfPower(2)).toBe(3)
    expect(selfPower(3)).toBe(8)
    expect(selfPower(5)).toBe(65)

  })
})


function selfPower(number) {

  let numbers = [];

  for (let i = 0; i <= number; i++ ) {
    numbers.push(i)
  };

  return numbers.reduce((sum, base, index) => {
    const power = numbers.length - index
    sum += Math.pow(base, power)
    return sum
  })
}