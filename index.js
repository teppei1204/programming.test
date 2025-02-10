// プログラミング能力検定JavaScript版

// Q.出力結果はどうなりますか？

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

// A____["佐藤","鈴木","田中","高橋"]

// ・for ループは waitPeople の長さ（4）だけ繰り返しますが、stayPeople.length が MAX（4）に達したらループを break します。

// ・ループの流れ：
// 1回目のループで 田中 が stayPeople に追加される。
// 2回目のループで 高橋 が stayPeople に追加される。
// 3回目のループで stayPeople.length == MAX となり、break によってループが終了。
// したがって、stayPeople の内容は ["佐藤", "鈴木", "田中", "高橋"] になります。

// ・stayPeople.length が MAX に達した時点で break が発生するため、それ以上 stayPeople に追加されません。
________________________________________________

// Q.出力結果はどうなりますか？

let scores = [90, null];
let subjects = ["国語","数学"];

for (let i = 0; i < 2; i++) {
  if (scores[i] == null) {
      scores[i] = "未入力";
  }
  console.log(subjects[i] + "の点数は" + scores[i] + "です");
}

// A____国語の点数は90点です。数学の点数は未入力です。

// scores 配列には、最初に 90 と null が入っています。
// subjects 配列には、"国語" と "数学" が入っています。
// ループの中で、もし scores[i] が null なら "未入力" に置き換えます。

// ループの流れ：
// 1回目のループ (i = 0):

// scores[0] は 90 なのでそのまま出力されます。
// 出力は："国語の点数は90です"
// 2回目のループ (i = 1):

// scores[1] は null なので "未入力" に変更されます。
// 出力は："数学の点数は未入力です"

// null 値に対して == null で比較することで、null と undefined の両方をチェックしています。
// === だと null と undefined を厳密に区別するため、null だけを検出できますが、ここでは == を使っているため、両方に対応しています。

// == は型を自動で変換して比較します。
// === は型も値も厳密に比較します。
________________________________________________

// Q.出力結果はどうなりますか？

class Exam {
  constructor(subject) {
    this.subject = subject;
  }
  showDetail() {
    console.log(this.subject + "の試験です");
  }
}

class ProgramingExam extends Exam {
  constructor(subject, languge) {
    super(subject);
    this.languge = languge;
  }
  showDetail() {
    super.showDetail();
    console.log("言語は" + this.languge + "です");
  }
}

function takeExam() {
  console.log("試験を受けます");
}

let JSExam = new ProgramingExam("プログラミング", "JavaScript");

setTimeout(takeExam, 1000);
JSExam.showDetail();

// A___プログラミングの試験です。言語はJavaScriptです。試験を受けます

// Exam クラスは subject をプロパティとして持ち、showDetail メソッドでその試験の詳細を表示します。
// ProgramingExam は Exam を継承し、showDetail をオーバーライドしてさらに languge（言語）を表示します。

// setTimeout の使用により、takeExam が非同期で呼び出されるため、JSExam.showDetail() の出力が先に表示され、1秒後に takeExam が表示されます。
// コンストラクタに誤りがあると、クラスのインスタンス化ができず、エラーが発生する可能性があるので注意が必要です。