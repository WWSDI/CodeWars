// status: 🌈SUCCESS🌈
// nextStep: REFACTOR - FP style

function validSolution(board) {
  //GOAL: test if all rows, columns, 9-cell blocks have the same elements as an array of 1-9
  const A1TO9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //TODO: function that test if two array are equal in terms of element value, not order
  let sameEls = (source) => (testArr) => {
    if (testArr.length !== source.length) return false;
    return testArr
      .slice()
      .sort()
      .every((el, i) => el === source[i]);
  };
  let sameA1TO9 = sameEls(A1TO9);

  //TODO: create columns board
  let board_cols = [];
  board.forEach((row, i, arr) => {
    let col = [];
    row.forEach((_, j) => {
      col.push(arr[j][i]);
    });
    board_cols.push(col);
  });
  //TODO: create grids board
  let board_blocks = [];
  // n is increment on i; m is increment on j
  for (let n = 0; n < 3; n++) {
    for (let m = 0; m < 3; m++) {
      let block = [];
      for (let i = n * 3; i < 3 + n * 3; i++) {
        for (let j = m * 3; j < 3 + m * 3; j++) {
          block.push(board[i][j]);
        }
      }
      board_blocks.push(block);
    }
  }

  //TODO: check all rows, columns, 9-cell blocks are valid separately
  let allRows = board.every((row) => sameA1TO9(row));
  let allCols = board_cols.every((row) => sameA1TO9(row));
  let allBlocks = board_blocks.every((row) => sameA1TO9(row));

  //TODO: based on 3 individual tests, return if the board is valid
  return [allRows, allCols, allBlocks].every((test) => test);
}

board_true1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

// false board
board_false1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

console.log(validSolution(board_true1));
console.log(validSolution(board_false1));
