console.log('This is Tic Tac Toe')

//GAME
var game = {
  puzzle: [' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' '],
  // player: Array(2),
  nextTurn: '', 
  score: '',

  test: function() {
    console.log('this log works');
  },

  toggleOn: function(event) { 
    var clickedOn = event.target.id;
    var index = parseInt(clickedOn.id.split('-')[1]);
    if (index === game.puzzle.indexOf[i]) {
      cellOne.innerHTML = 'x'
   }
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
  //CELLS
  var cellOne = document.getElementById('span-0')
  cellOne.addEventListener('click', toggleOn);




}




// ======================================

//CODE INITIAL SET UP!


console.log('tic tac toe loaded...')


//GAME
var game = {
  puzzle: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
  playerOne: 'X',
  playerTwo: 'O',
  score: '',

  test: function() {
    console.log('this log works');
  },

  setPuzzle: function() {
    // game.puzzle = Array(9).join('_').split('');
  },

  possibleWins: function() {
    //if statement

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

  playerTurn: function() {
    game.playerOne.push('X');
    game.playerTwo.push('O');

  },

}


//LOADING FUNCTIONS
window.onload = function() {

  
}



//DEAD CODE


    if (event.target.tagName === 'DIV') {
      var clickedOn = event.target;
      var square = document.getElementById('span-0');
    }
    if (event.target.className === 'ex') {
      event.target.class = '';
    }
      var index = clickedOn.target.split('-')[1];
      var target = parseInt(index, 10);
      console.log(target)


    for (var i=0; i < game.puzzle.length; i++) {
      if (event.target.id === target) {
      }
    }

//============================================


      for (var i = 0; i < puzzle.length; i++)
    if (player === 'x') {
      nextTurn = 'o';
    } else {
      nextTurn = 'x';
    }



//=========================================



    for (var i=0, i<game.puzzle.length, i++) {
      var clickedOn = event.target.id;
      var index = this.target.split('-')[1];
      var target = parseInt(index, 10);

    return 'x'
    }


//=========================================


    var play = game.puzzle
    for (var i = 0; i < play.length; i++)
      if (play.splice('_', 1, 'x')) {
        console.log('x')
      } else if (play.splice('_', 1, 'o')) {
        console.log('o')
      }

//=========================================

  var cell1 = document.getElementById('span-1');
    cell1.addEventListener('click', function() {
      var input = game.puzzle[1].innerHTML;
      return input;
    });

  var cell2 = document.getElementById('span-2');
    cell2.addEventListener('click', function() {
      var input = game.puzzle[2].innerHTML;
      return input;
    });

  var cell3 = document.getElementById('span-3');
    cell3.addEventListener('click', function() {
      var input = game.puzzle[3].innerHTML;
      return input;
    });

  var cell4 = document.getElementById('span-4');
    cell4.addEventListener('click', function() {
      var input = game.puzzle[4].innerHTML;
      return input;
    });

  var cell5 = document.getElementById('span-5');
    cell5.addEventListener('click', function() {
      var input = game.puzzle[5].innerHTML;
      return input;
    });
  
  var cell6 = document.getElementById('span-6');
    cell6.addEventListener('click', function() {
      var input = game.puzzle[6].innerHTML;
      return input;
    });

  var cell7 = document.getElementById('span-7');
    cell7.addEventListener('click', function() {
      var input = game.puzzle[7].innerHTML;
      return input;
    });

  var cell8 = document.getElementById('span-8');
    cell8.addEventListener('click', function() {
      var input = game.puzzle[8].innerHTML;
      return input;
    });
