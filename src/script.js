const imgPlayer = document.querySelector('.imgPlayer');
const imgComputer = document.querySelector('.imgComputer');
const title = document.querySelector('.title');
let scoreP = document.querySelector('.Score-p');
let scoreC = document.querySelector('.Score-c');




const startgame = () => {
    const game1 = document.querySelector('.game-1');
    const game2 = document.querySelector('.game-2');
    const game2btn = document.querySelector('.buttonStart');
    game2btn.addEventListener('click', () => {
        game2.style.display = "none";
        game1.style.display = "block";
        title.innerHTML = 'choose an Option'
        console.log('start the game !!');
    });
}

const startmatch = () => {
    const btnRock = document.querySelector('.Rock');
    const btnPaper = document.querySelector('.Paper');
    const btnScissors = document.querySelector('.Scissors');
    let choiceP = 0;
    let x = 0 ;
    let i = 0 ;
    const choice = ['Rock', 'Paper', 'Scissors'];


    // const a = () => {
    //     this.choice2 = Math.floor(Math.random() * 3);
    // }
    function a() {
        this.choice2 = Math.floor(Math.random() * 3);
    };

    const choixdupc = () => {
        
        if (choice[b.choice2] === 'Scissors' ) {
            imgComputer.src = 'src/img/scissors.png'
        } else if (choice[b.choice2] === 'Rock') {
            imgComputer.src = 'src/img/rock.png'
        } else if (choice[b.choice2] === 'Paper') {
            imgComputer.src = 'src/img/paper.png'
        }

    };

    const smatch = () => {
        if (choiceP === 'Scissors' && choice[b.choice2] === 'Paper') {
            scoreP.textContent = ++x;
        } else if (choiceP === 'Rock' && choice[b.choice2] === 'Scissors') {
            scoreP.textContent = ++x;
        } else if (choiceP === 'Paper' && choice[b.choice2] === 'Rock') {
            scoreP.textContent = ++x;
        } else if (choiceP === b.choice2) {
            console.log('gedged');
        } else if (choiceP === 'Scissors' && choice[b.choice2] === 'Rock') {
            scoreC.textContent = ++i;
        } else if (choiceP === 'Paper' && choice[b.choice2] === 'Scissors') {
            scoreC.textContent = ++i;
        } else if (choiceP === 'Rock' && choice[b.choice2] === 'Paper') {
            scoreC.textContent = ++i;
        }
    };

    btnRock.addEventListener('click', () => {
        imgPlayer.src = 'src/img/rock.png';
        choiceP = 'Rock';
        b = new a();
        choixdupc();
        smatch();
    });
    btnPaper.addEventListener('click', () => {
        imgPlayer.src = 'src/img/paper.png';
        choiceP = 'Paper';
        b = new a();
        choixdupc();
        smatch();
    });
    btnScissors.addEventListener('click', () => {
        imgPlayer.src = 'src/img/scissors.png';
        choiceP = 'Scissors';
        b = new a();
        choixdupc();
        smatch();
    });
};


startmatch();
startgame();



