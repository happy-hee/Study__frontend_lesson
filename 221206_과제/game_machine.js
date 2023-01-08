 /**
  * 문제 1. 현재 #result-div 아래에 있는 table은 보이지 않고 있다.
  * '그만'이라고 입력해서 게임이 종료되면 table을 화면에 표시한다.
  */

 /**
  * 문제 2. 게임이 종료되면 table 아래에 컴퓨터와 사용자가낸 값을 담은 tr 태그를 추가한다.
  * ex) <tr><td>가위</td><td>보</td></tr>
  */

 /**
  * 문제 3. 게임이 종료되면 게임 시작 버튼의 다음 형제 요소로 div 태그를 추가하고 이곳에 전적을 표시한다.
  */

 const GameMachine = {
  isContinue: true,
  history: {
    win: 0,
    draw: 0,
    defeat: 0
  },
  valueHistory: {
    computerValue: '',
    userValue: ''
  },

  // 결과 초기화
  resetResult() {
    let historyDiv = document.querySelectorAll('.history');
    let tableRow = document.querySelectorAll('tbody > tr');
    for(div of historyDiv) {
      div.remove();
    }
    for(row of tableRow) {
      row.remove();
    }
  },

  // 게임 결과를 화면에 출력하는 함수
  printHistory() {
    let { win, draw, defeat } = this.history;

    alert('전적: ' + (win + draw + defeat) + '전 ' + win + '승 ' + draw + '무 ' + defeat + '패');
  },

  // 전적 표시
  printHistoryDiv() {
    let { win, draw, defeat } = this.history;

    let div = document.createElement('div');
    div.innerHTML = '전적: ' + (win + draw + defeat) + '전 ' + win + '승 ' + draw + '무 ' + defeat + '패';
    div.className = 'history';

    let button = document.getElementById(['start-btn']);
    button.after(div);

    this.history = {
      win: 0,
      draw: 0,
      defeat: 0,
    };
  },

  // table을 화면에 표시 (문제 1.)
  showHistoryTable() {
    let tableWrap = document.querySelector("#result-div");
    let table = tableWrap.firstElementChild;

    table.removeAttribute('hidden');
  },

  // table 아래에 컴퓨터와 사용자가낸 값을 담은 tr 태그를 추가한다. (문제 2.)
  addValueTableRow() {
    // 컴퓨터와 유저가 낸 값 불러오기 
    const {computerValue, userValue} = this.valueHistory;

    let tableBody = document.querySelector('tbody')
    // tr 태그 생성
    let newTr = document.createElement('tr');
    // tr 태그 내에 td 태그로 컴퓨터/사용자가 낸 값 넣기
    newTr.insertAdjacentHTML('beforeend', `<td>${computerValue}</td><td>${userValue}</td>`);
    // tbody 내에 tr 넣기
    tableBody.appendChild(newTr);

    /**
     * 질문 - 이렇게 하면 tr 이 2개 생기는데 그 이유는?
     */
    //tableBody.insertAdjacentHTML('beforeend', `<tr><td>${computerValue}</td><td>${userValue}</td><tr>`);
  },

  // 컴퓨터가 낼 값을 계산해서 반환하는 함수
  getComputerValue() {
    const randomNumber = Math.floor((Math.random() * 100) % 3);
    if (randomNumber === 1) {
      return '바위';
    }
    
    if (randomNumber === 2) {
      return '보';
    }

    return '가위';
  },

  // 게임을 실행하는 함수
  game() {
    // 결과 초기화
    this.resetResult();

    while (this.isContinue) {
      let computerValue = this.getComputerValue();
    
      // 유저 값
      const value = prompt('가위, 바위, 보');

      // 게임 종료
      if (value === '그만') {
        // 전적 얼럿 출력
        this.printHistory();
        // 전적 div 출력 (문제 3.)
        this.printHistoryDiv();
        // table 표시 (문제 1.)
        this.showHistoryTable();
        break;
      }

      // 가위/바위/보 외의 값 입력시 얼럿
      if (!(value === '가위' || value === '바위' || value === '보')) {
        alert('가위, 바위, 보 중 하나가 아닙니다.');
        continue;
      }
    
      // 컴퓨터값 출력
      alert('컴퓨터는 ' + computerValue + ' 를 냈습니다.');

      if (computerValue === value) {
        alert('무승부');
        this.history.draw += 1;
      }

      if (computerValue === '가위') {
        if (value === '바위') {
          alert('승리');
          this.history.win += 1;
        } else {
          alert('패배')
          this.history.defeat += 1;
        }
      } else if (computerValue === '바위') {
        if (value === '가위') {
          alert('패배');
          this.history.defeat += 1;
        } else {
          alert('승리');
          this.history.win += 1;
        }
      } else {
        if (value === '가위') {
          alert('승리');
          this.history.win += 1;
        }
        else if (value === '바위') {
          alert('패배');
          this.history.defeat += 1;
        }
      }

      // valueHistory에 컴퓨터와 유저의 값 저장 (문제 1.)
      this.valueHistory.computerValue = computerValue;
      this.valueHistory.userValue = value;

      // 컴퓨터와 유저가 낸 값을 table tr에 추가 (문제 2.)
      this.addValueTableRow();
    }
  }
}

window.GameMachine = GameMachine;