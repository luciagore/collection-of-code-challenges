const isIncreasing = (a, b) => a < b;

function pickPeaks(items) {
  const toReturn = {
    pos:[],
    peaks: []
  }

  let ceiling;

  for (let i = 0; i < items.length; i++ ) {
    let previousItem = items[i-1];
    let currentItem = items[i];

    if (previousItem) {

      if(isIncreasing(previousItem, currentItem)) {
        ceiling = {
          item: currentItem,
          pos: i
        }
      } else {
          if (ceiling && ceiling.item === currentItem) {
            
          } else {
            
            if (ceiling && ceiling.pos !== toReturn.pos[toReturn.pos.length-1]) {
              toReturn.pos.push(ceiling.pos)
              toReturn.peaks.push(ceiling.item)
            }
          }
      }
    }
  }
  return toReturn;
}

describe("Pick Peaks", () => {
  it("returns correct object shape", () => {
    expect(pickPeaks([1,1,1])).toEqual({pos:[],peaks:[]})
  })

  it("identifies a peak", () => {
    expect(pickPeaks([2,2,1,4,2])).toEqual({pos:[3],peaks:[4]})
  })

  it("identifies multiple peaks", () => {
    expect(pickPeaks([2,4,1,4,2])).toEqual({pos:[1, 3],peaks:[4, 4]})
  })

  it("should ignore the edge", () => {
    expect(pickPeaks([1, 2, 2, 2, 3])).toEqual({pos:[],peaks:[]})
  })

  it("should identifies a plateau", () => {
    expect(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])).toEqual({pos:[3,7],peaks:[6,3]})
  })
})