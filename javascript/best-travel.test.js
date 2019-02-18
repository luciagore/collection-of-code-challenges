// The function chooseBestSum (or choose_best_sum or ... depending on the language) 
// will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) 
// and ls (list of distances, all distances are positive or null integers and this list has at least one element). 
// The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, 
// if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.


function chooseBestSum(distanceLimit, k, distances){
  if (distances.length < k) return null
  const results = [[]]
  for (const value of distances) {
      const copy = [...results]
      for (const prefix of copy) {
          results.push(prefix.concat(value))
      }
  }
  return results
      .filter(a => a.length && a.length == k )
      .map(item => item.reduce((a,b) => a + b), 0)
      .filter(item => item <= distanceLimit)
      .sort((a,b) => b-a)[0] || null
}

describe("best travel", () => {
  const ts = [50, 55, 56, 57, 58]

  it("should return null if the journey is not possible", () => {
      const limit = 10;
      const citiesToVisit = 10
      expect(chooseBestSum(limit, citiesToVisit, ts)).toBe(null)
  });

  it("should return the best journey", () => {
    const limit = 163
    const citiesToVisit = 3
    expect(chooseBestSum(limit, citiesToVisit, ts)).toBe(163)
  })

})