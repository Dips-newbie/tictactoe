const generateGame = () =>{
  var player1 ={player : "Player1",sign:"O"};
  var player2 ={player : "Player2",sign:"X"};
  var currentPlayer = player1;
  var gamer1 = document.getElementById('gamer1');
  gamer1.classList.toggle("currentPlayer");
  var gamer2 = document.getElementById('gamer2');

  var winner;
  var winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  /*game begins here by allowing players take turn to alternatively fill the div with their respective assigned sign*/
  const gameBegin = () =>{
    var gameBoardGrid = document.querySelectorAll(".grid-item");
    for(var i=0;i< gameBoardGrid.length;i++){
        gameBoardGrid[i].addEventListener('click',function(event){  
            if((currentPlayer.player === player1.player) && (this.innerHTML == '')) {
                this.innerHTML = "O";
                gamer1.classList.remove("currentPlayer");
                gamer2.classList.toggle("currentPlayer");
                checkwinner(currentPlayer,gameBoardGrid);  
                currentPlayer = player2;
            }
            else if(currentPlayer.player === player2.player && (this.innerHTML == '')) {
                this.innerHTML = "X";
                gamer2.classList.remove("currentPlayer");
                gamer1.classList.toggle("currentPlayer");
                checkwinner(currentPlayer,gameBoardGrid);  
                currentPlayer = player1;
            }
            else{}
        });
     }
  };

  const checkwinner = (currentPlayer,gameBoardGrid) =>{
    winningComb.forEach((x) => {
        winner = 0;
        x.forEach((i) => {
           if(gameBoardGrid[i].innerHTML!= ''){
            if(gameBoardGrid[i].innerHTML === currentPlayer.sign){
                 winner++;
                 if(winner == 3){
                    alert("Congrats!!!! "+currentPlayer.player + " is the Winner");
                    location.reload();
          
                 }
            }
        }
        });
     });
    };
  return {gameBegin,checkwinner};

};

const game = generateGame();
console.log(game.gameBegin()); 


