console.log('This is Tic Tac Toe')

//GAME
var game = {
  puzzle: [' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' '],
  score: '',
  counter: 0,
  indexArrayX: [],
  indexArrayO: [],


  setPlay: function() {
    
  },


  checkWin: function() {
    //WINNER DETERMINED WHEN:
    if ('x' === game.puzzle[0] && 'x' === game.puzzle[1] && 'x' === game.puzzle[2]) {
      return true;
    } else if ('x' === game.puzzle[3] && 'x' === game.puzzle[4] && 'x' === game.puzzle[5]) {
      return true;
    } else if ('x' === game.puzzle[6] && 'x' === game.puzzle[7] && 'x' === game.puzzle[8]) {
      return true;
    } else if ('x' === game.puzzle[0] && 'x' === game.puzzle[3] && 'x' === game.puzzle[6]) {
      return true;
    } else if ('x' === game.puzzle[1] && 'x' === game.puzzle[4] && 'x' === game.puzzle[7]) {
      return true;
    } else if ('x' === game.puzzle[2] && 'x' === game.puzzle[5] && 'x' === game.puzzle[8]) {
      return true;
    } else if ('x' === game.puzzle[0] && 'x' === game.puzzle[4] && 'x' === game.puzzle[8]) {
      return true;
    } else if ('x' === game.puzzle[2] && 'x' === game.puzzle[4] && 'x' === game.puzzle[6]) {
      return true;
    } else if ('0' === game.puzzle[0] && 'o' === game.puzzle[1] && 'o' === game.puzzle[2]) {
      return true;
    } else if ('o' === game.puzzle[3] && 'o' === game.puzzle[4] && 'o' === game.puzzle[5]) {
      return true;
    } else if ('o' === game.puzzle[6] && 'o' === game.puzzle[7] && 'o' === game.puzzle[8]) {
      return true;
    } else if ('o' === game.puzzle[0] && 'o' === game.puzzle[3] && 'o' === game.puzzle[6]) {
      return true;
    } else if ('o' === game.puzzle[1] && 'o' === game.puzzle[4] && 'o' === game.puzzle[7]) {
      return true;
    } else if ('o' === game.puzzle[2] && 'o' === game.puzzle[5] && 'o' === game.puzzle[8]) {
      return true;
    } else if ('o' === game.puzzle[0] && 'o' === game.puzzle[4] && 'o' === game.puzzle[8]) {
      return true;
    } else if ('o' === game.puzzle[2] && 'o' === game.puzzle[4] && 'o' === game.puzzle[6]) {
      return true;
    }

        //MUST HAVE A GROUP OF THREE BEFORE DECLARING WINNER
    if (game.indexArrayX.length < 3 || game.indexArrayO.length < 3) {
      return false;
    }


  },

  init: function() {
    game.puzzle()
  }
}

// each (arr, index, list)


//LOADING FUNCTIONS
window.onload = function() {

  _.each(game.puzzle, function(marker, index) {
    // add div box
    var newDivBox = $('<div>').attr('id','span-' + index).html(marker);
    $('#game').append(newDivBox);

  });

  $('#game').on('click', 'div', function(event) {

    var index = parseInt(this.id.split('-')[1]); // getting the index number of the div being clicked to apply it back to the array
    console.log('index', index);
    // game.puzzle[index] = 'x';

    //COUNTER - alternate turns between x and o
    var markerX = 'x';
    var markerO = 'o';
    game.counter++

//MARKING X IN ARRAY, MARKING X ON THE BOARD, AND ALSO INPUTTING INDEX INTO NEW ARRAY FOR COMPARISON WITH WINNER
      if (game.counter % 2 === 1) {
        $(this).html(markerX);
        game.puzzle[index] = markerX;
        game.indexArrayX.push(index);
        console.log('x appears at: ' + index);
      } else {
        $(this).html(markerO);
        game.puzzle[index] = markerO;
        game.indexArrayO.push(index);
        console.log('o appears at: ' + index);
      }
      console.log('win? ' + game.checkWin());
      if (game.checkWin() === true) {
        alert(game.counter[index] + 'HAVE WON!')
      }
  });

}
