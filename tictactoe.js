console.log('This is Tic Tac Toe')




//GAME
var game = {
  puzzle: ['',' ',' ',' ', ' ', ' ', ' ', ' ', ' '],
  counter: 0,
  indexArrayX: [],
  indexArrayO: [],
  rounds: 0,
  scoreX: 0,
  scoreO: 0,

  setPlay: function() {
    _.each(game.puzzle, function(marker, index) {
    // adds div box
    var newDivBox = $('<div>').attr('id','span-' + index).html(marker);
    $('#game').append(newDivBox);
    });
  },

  newGame: function() {
    game.puzzle = [' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' '],
    $('#game div').html(' ');
  },

  checkWin: function() {
    //MUST HAVE A GROUP OF THREE BEFORE DECLARING WINNER
    if (game.indexArrayX.length < 3 || game.indexArrayO.length < 3) {
    return false;
    }
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
  },

}

// each (arr, index, list)


//LOADING FUNCTIONS
window.onload = function() {
  
  game.setPlay();

  $('#game').on('click', 'div', function(event) {
    var index = parseInt(this.id.split('-')[1]); // getting the index number of the div being clicked to apply it back to the array
    console.log('index', index);

    if (game.puzzle[index] !== ' ') {
      return;
    }

    //COUNTER - alternate turns between x and o
    var markerX = 'x';
    var markerO = 'o';
    var rounds = game.rounds;
    game.counter++;

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

        if (game.checkWin() === true && game.counter % 2 === 1) {
          alert('X IS THE WINNER!')
          $('#xScore').html(++game.scoreX);
          game.newGame();
          game.counter = 0;
        } else if (game.checkWin() === true && game.counter % 2 === 0) {
          alert('O IS THE WINNER!')
          $('#oScore').html(++game.scoreO);
          game.newGame();
          game.counter = 0;
        } else if (game.counter === 9) {
          alert ("It's a tie. Play again!");
          game.newGame();
          game.counter = 0;
        }

        $('#playAgain').on('click', function() {
          game.newGame();
          console.log('click');
        });

        $('#reset').on('click', function() {
          game.newGame();
          $('#xScore').html(0);
          $('#oScore').html(0);
          game.counter = 0;
          console.log('click');
        });
  });
        
}

