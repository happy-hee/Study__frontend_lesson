const GameMachine = {
    isContinue: true, 
    game() {
        //사용자 값
        let userValue;
        //컴퓨터 값
        let computerValue;
        //게임 결과
        let gameResult;
        let gameCount = 0;
        let gameWin = 0;
        let gameLose = 0;
        let gameDraw = 0;

        /**
         * 문제 1) 가위바위보를 할때마다 결과 데이터를 객체 내부에서 관리한다.
         * 사용자가 마지막에 '그만' 이라고 입력하면 '전적: 0전 0승 0무 0패' 형태의 문자열을 alert으로 출력한다.
         * 이때 결과를 출력하는 별도의 함수를 객체 내부로 별도의 프로퍼티로 구현한다.
         */


        
        /**
         * 문제 2) 사용자가 '그만' 이라고 입력하여 게임이 종료되면
         * GameMachine 객체의 전적 데이터를 초기화한다.
         */

        while(userValue !== '그만') {
            //사용자 값 불러오기
            userValue = GameMachine.getUserValue();

            //사용자가 '그만' 이라고 입력하면 반복 중지
            if(userValue === '그만') break;

            //컴퓨터 값 불러오기
            computerValue = GameMachine.getComputerValue();

            //컴퓨터가 내려는 값 출력하기
            if(userValue === '가위' || userValue === '바위' || userValue === '보') {
                GameMachine.showComputerValue(computerValue);
            }

            //게임 전적 데이터에 승부 결과 저장
            if(computerValue === userValue) {
                gameResult = '무승부';
                gameDraw += 1;
                gameCount += 1;
            } else if ((computerValue === '가위' && userValue === '바위') || (computerValue === '바위' && userValue === '보') || (computerValue === '보' && userValue === '가위')) {
                gameResult = '승리';
                gameWin += 1;
                gameCount += 1;
            } else if ((computerValue === '가위' && userValue === '보') || (computerValue === '바위' && userValue === '가위') || (computerValue === '보' && userValue === '바위')) {
                gameResult = '패배';
                gameLose += 1;
                gameCount += 1;
            }
            
            //게임 결과 출력
            GameMachine.showGameResult(gameResult);
        }

        //승부 총 결과 출력
        GameMachine.showGameScore(gameCount, gameWin, gameLose, gameDraw);
    },

    /**
     * 컴퓨터가 낼 값 (가위, 바위, 보 중 하나)을 정하여 출력
     */
    getComputerValue() {
        let computerValue = '가위';
        const randomNumber = Math.floor((Math.random() * 100) % 3);
        if (randomNumber === 1) {
            computerValue = '바위'
        } else if (randomNumber === 2) {
            computerValue = '보';
        }

        return computerValue;
    },

    /**
     * 사용자로부터 값을 입력받음
     * 이때 가위, 바위, 보 중 하나가 아니면 "가위, 바위, 보 중 하나가 아닙니다."라는 문구를 alert으로 출력
     */
    getUserValue() {
        let userValue = prompt('가위, 바위, 보 중 하나를 내주세요.', '');

        if(userValue === '가위' || userValue === '바위' || userValue === '보' || userValue === '그만') {
            return userValue;
        } else {
            alert('가위, 바위, 보 중 하나가 아닙니다.');
        }
    },

    /**
     * 컴퓨터가 내려는 값을 alert으로 출력
     */
    showComputerValue(computerValue) {
        alert(`컴퓨터는 ${computerValue}를 냈습니다.`);
    },

    /**
     * 컴퓨터가 낸 값과 사용자가 낸 값을 비교하여 승리, 무승부, 패배 중 하나를 alert으로 출력
     */
    showGameResult(gameResult) {
        if(gameResult === '무승부' && gameResult === '승리' && gameResult === '패배') {
            alert(gameResult);
        }
    },

    /**
     * 승부 총 결과 출력하기
     */
    showGameScore(gameCount, gameWin, gameLose, gameDraw) {
        alert(gameCount + '전' + gameWin + '승' + gameLose + '패' +  gameDraw + '무');
    },
}

// 실행 방법
GameMachine.game();
