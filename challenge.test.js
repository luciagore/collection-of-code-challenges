describe('numerals', () => {
  it('works', () => {
    expect(solution(2000)).toBe('MM');
    expect(solution(1990)).toBe('MCMXC');
    expect(solution(4)).toBe('IV');
    expect(solution(2007)).toBe('MMVII');
  });
});

const numerals = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};

const solution = (numberToConvert) => {
  let romanStringToReturn = '';
  let previousKey;

  Object.keys(numerals).forEach((key, index) => {
    const divisions = Math.floor(numberToConvert / numerals[key]);
    numberToConvert = numberToConvert % numerals[key];
    romanStringToReturn += key.repeat(divisions);
    previousKey = key;
  });

  return romanStringToReturn;
}