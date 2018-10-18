describe("duplicate arguments", () => {
  it("returns true for duplicates", () => {
    expect(duplicates([ 1, 2, 3, 6, 5, 6 ])).toBe(true)
    expect(duplicates([ 1, 2, 3, 'a', 'a', 6 ])).toBe(true)
  })

  it("returns false for no duplicates", () => {
    expect(duplicates([ 1, 2, 3, 6, 5, 4 ])).toBe(true)
    expect(duplicates([ 1, 2, 3, 'a', 'b', 6 ])).toBe(true)
  })
})


function duplicates(...args) {
  return new Set(args).size === args.length ? false : true;
}
