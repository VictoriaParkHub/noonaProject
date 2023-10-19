//랜덤번호 지정
//유저가 번호를 입력한다 -> Go라는 버튼을 누른다 : 클릭 이벤트
//랜덤번호 == 유저번호 맞췄습니다!
//랜덤번호 < 유저번호 Down
//랜덤번호 > 유저번호 Up
//Reset버튼을 누르면 게임은 리셋
//5번의 기회를 다 쓰면 게임은 끝 -> 버튼 disable
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. (기회는 그대로)
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. (기회는 그대로)

let computerNum = 0;
let clickBtn = document.getElementById("click__btn");
let userInput = document.getElementById("user__input");
let result = document.getElementById("result");

clickBtn.addEventListener("click",play);

function pickRandomNum (){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
};
pickRandomNum();

function play(){
    let userValue = userInput.value;
    if(userValue < computerNum){
        result.textContent ="Up";
    }else if(userValue > computerNum){
        result.textContent ="Down";
    }else{
        result.textContent ="정답입니다!";
    };
};