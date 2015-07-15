console.log('This is Tic Tac Toe')

//GAME
var game = {
  puzzle: [' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' '],
  players: [1, 2],
  nextTurn: '', 
  score: '',

  test: function() {
    console.log('this log works');
  },

  playerTurn: function() {

  },

  //x and o to loop through array until full or until winner is determined

  setPlay: function() {
    

  },

 checkWin: function() {
    //if statement??

    //accross
    indexOf([0, 1, 2])
    indexOf([3, 4, 5])
    indexOf([6, 7, 8])

    //down
    indexOf([0, 3, 6])
    indexOf([1, 4, 7])
    indexOf([2, 5, 8])

    //diagonal
    indexOf([0, 4, 8])
    indexOf([2, 4, 6])
  },
//find underscore code to determine where x's or o's are.
//if each index group equals either x or o, winner is determined; 

  init: function() {
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
    game.puzzle[index] = 'x'; // updating puzzle

    for (var i=0; i < game.puzzle.length; i++) {
      if (index % 2 === 0) {
      $(this).html('x');
      } else if (index % 2 === 1) {
      $(this).html('o');
      }
    }
});


}
