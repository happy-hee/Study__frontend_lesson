/**
 * 배울 수 있는 부분
 * 1. 함수 선언
 * 2. 함수 반환값
 * 3. 함수 나누기
 * 4. 함수 호출
 * 5. 조건문 사용하기
 * 6. 비교 연산자, 부정 연산자
 * 7. 문자열 접합
 * 8. alert, prompt
 * 9. 반복문
 */
function game() {
    let userValue;
    let computerValue;

    /**
     * 문제 5) 사용자가 '그만' 이라고 입력하기 전까지 계속 가위바위보를 하도록 수정한다.
     * '그만'을 입력하면 게임이 바로 종료된다.
     */
    while(userValue !== '그만') {
            //사용자 값 불러오기
            userValue = getUserValue();

            //사용자가 '그만' 이라고 입력하면 반복 중지
            if(userValue === '그만') break;

            //컴퓨터 값 불러오기
            computerValue = getComputerValue();

            //컴퓨터가 내려는 값 출력하기
            if(userValue === '가위' || userValue === '바위' || userValue === '보') {
                showComputerValue(computerValue);
            }

            //승부 결과 출력하기
            showGameResult(computerValue, userValue);
    }
}

/**
 * 컴퓨터가 낼 값 (가위, 바위, 보 중 하나)을 정하는 로직이다.
 * 문제 1) 이 로직을 별도의 함수로 분리하여 호출한다.
 */
function getComputerValue() {
    let computerValue = '가위';
    const randomNumber = Math.floor((Math.random() * 100) % 3);
    if (randomNumber === 1) {
        computerValue = '바위'
    } else if (randomNumber === 2) {
        computerValue = '보';
    }

    return computerValue;
}

/**
 * 문제 2) 사용자로부터 값을 입력받는다.
 * 이때 가위, 바위, 보 중 하나가 아니면 "가위, 바위, 보 중 하나가 아닙니다."라는 문구를 alert으로 출려한다.
 */
function getUserValue() {
    let userValue = prompt('가위, 바위, 보 중 하나를 내주세요.', '');

    if(userValue === '가위' || userValue === '바위' || userValue === '보' || userValue === '그만') {
        return userValue;
    } else {
        alert('가위, 바위, 보 중 하나가 아닙니다.');
    }
}

/**
 * 문제 3) 컴퓨터가 내려는 값을 alert으로 출력한다.
 * 형식 예시: 컴퓨터는 가위 를 냈습니다.
 */
function showComputerValue(computerValue) {
    alert(`컴퓨터는 ${computerValue}를 냈습니다.`);
}

/**
 * 문제 4) 컴퓨터가 낸 값과 사용자가 낸 값을 비교하여 승리, 무승부, 패배 중 하나를 alert으로 출력한다.
 */
function showGameResult(computerValue, userValue) {
    if(computerValue === userValue) {
        alert('무승부');
    } else if ((computerValue === '가위' && userValue === '바위') || (computerValue === '바위' && userValue === '보') || (computerValue === '보' && userValue === '가위')) {
        alert('승리');
    } else if ((computerValue === '가위' && userValue === '보') || (computerValue === '바위' && userValue === '가위') || (computerValue === '보' && userValue === '바위')) {
        alert('패배');
    } 
}

game();

