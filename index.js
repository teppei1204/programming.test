// プログラミング能力検定JavaScript版

// 出力結果はどうなりますか？

const MAX = 4;
let stayPeople = ["佐藤","鈴木"]
let waitPeople = ["田中","高橋","渡辺","山本"]

for (let i = 0; i < waitPeople.length; i++) {
    if (stayPeople.length == MAX) {
      break;
    }
    stayPeople.push(waitPeople[i]);
}
console.log(stayPeople);
console.log(stayPeople.length + "人になりました");

A____["佐藤","鈴木","田中","高橋"]
________________________________________________

// 出力結果はどうなりますか？

let scores = [90, null];
let subjects = ["国語","数学"];

for (let i = 0; i < 2; i++) {
  if (scores[i] == null) {
      scores[i] = "未入力";
  }
  console.log(subjects[i] + "の点数は" + scores[i] + "です");
}

A____国語の点数は90点です。数学の点数は未入力です。
________________________________________________

class Exam {
  constructor(subject) {
    this.subject = subject;
  }
  showDetail() {
    console.log(this.subject + "の試験です");
  }
}

class ProgramingExam extends Exam {
    (subject, languge) {
    super(subject);
    this.languge = languge;
  }
  showDetail() {
    super.showDetail();
    console.log("語源は" + this.languge + "です");
  }
}

function takeExam() {
  console.log("試験を受けます");
}

let JSExam = new ProgramingExam("プログラミング", "JavaScript");

setTimeout(takeExam, 1000);
JSExam.showDetail();