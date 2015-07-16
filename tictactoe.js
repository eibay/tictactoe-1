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

    var sortArrayX = indexArrayX.sort()
    var sortArrayO = indexArrayO.sort()
    
    var winningCombos = {
                            //across
                            [0, 1, 2],
                            [3, 4, 5],
                            [6, 7, 8],
                            //down
                            [0, 3, 6],
                            [1, 4, 7],
                            [2, 5, 8],
                            //diagonal
                            [0, 4, 8],
                            [2, 4, 6]
    };


    // if === true {
    //   console.log('x is the winner')
    // }

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
    // game.puzzle[index] = 'x';

    //COUNTER - alternate turns between x and o
    var markerX = 'x';
    var markerO = 'o';
    game.counter++
 
    // console.log(game.counter)
    //each time div is clicked, counter++

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
  });


}
