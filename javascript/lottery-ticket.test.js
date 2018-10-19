
// To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. 
//If the character code of any of the characters in the string matches the number, you get a mini win. 
//Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

describe('the lottery', () => {
  it("should have one mini win per sub array", () => {
    expect(bingo([['ABCABC', 65]], 1)).toBe('Winner!')
  })

  it('works', () => {
    expect(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)).toBe('Loser!')
    expect(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)).toBe('Winner!')
    expect(bingo([['RZVBZHW',87],['HC',82],['AYGTRA',85],['ANRP',75],['SCCTNKV',71],['VFWQZMLW',90],['OPHHV',72],['ZDJQ',68],['GLUZZEU',65],['RFEMXWB',87]], 2)).toBe('Winner!')
  })
})

function bingo(ticket, countToMatch) {

  if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= countToMatch)
  {
    return "Winner!";
  }
  return "Loser!"; 
}
