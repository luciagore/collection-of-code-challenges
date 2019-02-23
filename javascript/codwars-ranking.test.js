
const ranks = {
  0: '-8',
  100: '-7',
  200: '-6',
  300: '-5',
  400: '-4',
  500: '-3',
  600: '-2',
  700: '-1',
  800: '1',
  900: '2',
  1000: '3',
  1100: '4',
  1200: '5',
  1300: '6',
  1400: '7',
  1500: '8'
}

const getRank = points => ranks[getValue(points)];
const getValue = points => {
  const ranksArr = Object.keys(ranks);
  return ranksArr.find((rank, index) => points >= ranksArr[index + 1] ? false : true)
}

function calculatePoints(userRank, rankValues, challengeCompleted) {


}


class User {
  constructor() {
    this._score = 0;
  }

  get rank () {
    return getRank(this._score)
  }

  progress(points) {
    this._score =+ points
  }
}

describe("user", () => {

  it('returns the correct rank based on points', () => {
    expect(getRank(0)).toBe('-8')
    expect(getRank(1500)).toBe('8')
  })

  it('exposes the users rank', () => {
    expect(new User().progress(1000).rank).toBe('3')
  })

  it('calculates progress that is the same level as user', () => {
    expect('-8', calculatePoints(Object.values(ranks), '-8')).toBe(3)
  })
})


// var user = new User()
// user.rank // => -8
// user.progress // => 0
// user.incProgress(-7)
// user.progress // => 10
// user.incProgress(-5) // will add 90 progress
// user.progress # => 0 // progress is now zero
// user.rank # => -7 // rank was upgraded to -7