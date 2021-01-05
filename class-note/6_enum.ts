// 숫자형 Enum
// 첫 값을 초기화하지않는다면 0부터 시작해서 자동 증가함
// 초기화를 해주면 그 값으로부터 이어짐
enum Shoes {
  Nike, // 0
  Adidas, // 1
  sth  // 2
}

var MyShoes = Shoes.Nike;
console.log(MyShoes); // print 0

// 문자형 Enum
enum strShoes {
  Nike = '나이키',
  Adidas = '아디다스', 
}

var MystrShoes = strShoes.Nike;
console.log(MystrShoes);  // print 나이키



// 활용 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
    
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

askQuestion(Answer.Yes);
// 파라미터의 타입이 Answer라는 Enum이기 때문에 enum에서 제공되는 값만 넘길 수 있음
// DropDown등의 목록이 필요한 형태에서 enum을 정의해서 사용하면
// 정확한 코드 및 예외 처리 등의 케이스를 줄일 수 있음