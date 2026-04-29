const QUEST_DATA = [
    {
        title: "マモチャレ ①：スピード買い物！",
        image: "quest1.png",
        hint: `「スピード買い物チャレンジ！！」

お２人は子供だけで買い物したことがあるかな？あったとしても、そんなに回数は多くないはず🌝
そんな２人に今日は自分たちだけで買い物をしてきてもらいます。
ただし、マモチャレというからには、ただの買い物ではありません。「制限時間内に、どれだけリストにある商品を多く買い物することができるか？買い物をすることができた数に応じてポイントを獲得できる」というチャレンジです。

【ルール】
制限時間：15分
（iPadのストップウォッチを起動して開始！）

【買い物リスト】
①ミスド：2人の好きなドーナッツを2個ずつ、朱莉パパとママの分のチュロス×2、ダブルチョコレート×2（なければ代わりの品を相談して決めてください！）
②アピタ：フェットチーネグミ×2（好きな味）
③無印良品：素材の旨みひきたつパスタソース 紅ズワイガニのトマトクリーム 2人前×2

買い物リストにのっている物を買う順番は2人に任せますが、ミスドのドーナッツだけは必ず買ってください。ドーナッツを買うことができなければ、チャレンジは失敗となります。

また、タイム管理はiPadのストップウォッチを起動させて実施してください。タイム終了となったら、自分でチャレンジを終了させてください。また、チャレンジ終了時にリストの買い物品を手に持っている場合は、手に持っている買い物品お会計を済ませてください（タイム終了時にお会計が終了していなければポイント加算はされませんが、お店に迷惑がかからないよう、お買い上げしてもらいます）。`,
        inputLabel: "成功したリストの個数（1〜3）を入力してね",
        pointType: "multiply100"
    },
    {
        title: "マモチャレ ②：どきどきランチ！",
        image: "quest2.png",
        hint: `まずは買い物お疲れ様でした。
お疲れ様でした。
疲れたでしょ？
そんなお２人に、次は２人だけでお昼ご飯を食べながら休憩してもらいます。
どこでご飯を食べるかって？そう、それはみんな大好き🍔マクドナルド🍟です。

いつもは家族でマックに行っているけど、今日は2人だけでマックでお昼ご飯を食べてもらいます（好きな物を注文しましょう）。どうやって注文するのかな？席は空いているのかな？空いていなければどこで食べようかな？などなど、普段は気にもならなかったことが気になってくるのではないでしょうか？

さあ、どきどきのお昼ご飯を召し上がれ🍔`,
        inputLabel: "無事食べられたら1、失敗なら0を入力",
        pointType: "binary100"
    },
    {
        title: "マモチャレ ③：電車に乗れるのかチャレンジ！",
        image: "quest3.png",
        hint: `マックで元気はチャージできましたか？
元気満タンな2人に、次のチャレンジです。次は2人だけで前橋駅に移動して、前橋駅から電車に乗って「高崎駅」に行ってもらいます。
いつもは家族で電車に行っている（あまり電車に乗る機会はないでしょうか？）けれど、今日は2人だけで電車に乗ってもらいます。
前橋駅ってどこやねん？どうやって切符を買うのかな？いくらの切符を買うのかな？どこ行きの電車に乗るなかな？何番線ホームの電車に乗るのかな？などなど、普段は気にもならなかったことが気になってくるのではないでしょうか？

iPadの地図アプリを使うなどして、2人だけでチャレンジ達成をしてもらいたいのですが、さすがにどうにもならなくなる瞬間があるかもしれません。そんな時は背後にいるマモちゃんのメイド（そう、あの黒い帽子を被った人です）に質問をすることができます。質問回数に応じて獲得できる「やまポ」が変わってきます。

さあ、高崎駅に向かってゴー！！`,
        inputLabel: "質問なし→3、1回→2、2回→1、失敗→0を入力",
        pointType: "multiply100",
        showMapButton: true,
        mapTarget: "前橋駅"
    },
    {
        title: "最後の試練：家族へのお土産を買えチャレンジ",
        image: "quest4.png",
        hint: `今、このページを見ているということは、今は２人とも無事に高崎駅に到着しているということですね。いよいよ、次は最後のマモチャレです。

電車での移動、大変だったでしょう？お疲れ様でした。けれど、実はいつも2人の面倒を見てくれいる２人のパパとママもとても疲れているもしません。そんなパパとママに高崎駅のオーパでお土産を買ってもらいます。
オーパは、たまに朱莉ちゃんがママと行く猫カフェのあるビルです。地図アプリを使って場所を調べて行ってみましょう。

【ルール】
・土子家に１個、山崎家に1個で計２個買うこと。
・値段は1個2000円以内。
・パパとママの好きそうなものを選ぶこと。（自分の好きなものを買おうとしたら失敗ですよ！）

さあ、最後の大仕事、お土産を買ってください！！`,
        inputLabel: "お土産を2個買えたら1、失敗は0を入力してください",
        pointType: "binary100",
        showMapButton: true,
        mapTarget: "高崎オーパ"
    }
];

const Game = {
    currentStep: 0,
    totalPoints: 0,

    start() {
        this.showScreen('quiz-screen');
        this.renderQuest();
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0, 0); 
    },

    renderQuest() {
        const quest = QUEST_DATA[this.currentStep];
        document.getElementById('current-step-num').innerText = this.currentStep + 1;
        document.getElementById('quest-title').innerText = quest.title;
        document.getElementById('quest-hint').innerText = quest.hint;
        document.getElementById('input-label-text').innerText = quest.inputLabel;
        document.getElementById('answer-input').value = '';

        const imgTag = document.getElementById('quest-image');
        imgTag.src = quest.image;

        const mapBtnContainer = document.getElementById('map-link-container');
        const mapBtn = document.getElementById('dynamic-map-btn');
        
        if (quest.showMapButton) {
            mapBtnContainer.style.display = 'block';
            mapBtn.innerText = `🗺️ ${quest.mapTarget}への行き方を調べる`;
        } else {
            mapBtnContainer.style.display = 'none';
        }
    },

    openGoogleMaps() {
        const quest = QUEST_DATA[this.currentStep];
        const destination = quest.mapTarget || "前橋駅";
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=walking`;
        window.open(url, '_blank');
    },

    checkAnswer() {
        const quest = QUEST_DATA[this.currentStep];
        const val = parseInt(document.getElementById('answer-input').value.trim());
        let earned = 0;

        if (isNaN(val)) {
            alert("🌞マモちゃん：『数字を入れて報告してくださいね！』");
            return;
        }

        if (quest.pointType === "multiply100") {
            earned = val * 100;
        } else if (quest.pointType === "binary100") {
            earned = (val === 1) ? 100 : 0;
        }

        this.totalPoints += earned;
        document.getElementById('current-points').innerText = this.totalPoints;
        document.getElementById('earned-points').innerText = `+${earned}`;
        
        if (earned > 0) {
            confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        }
        
        this.showScreen('result-screen');
    },

    nextQuest() {
        this.currentStep++;
        if (this.currentStep < QUEST_DATA.length) {
            this.showScreen('quiz-screen');
            this.renderQuest();
        } else {
            this.showScreen('goal-screen'); 
        }
    },

    showFinalPrize() {
        this.showScreen('prize-screen'); 
        document.getElementById('final-points').innerText = this.totalPoints;
        if (this.totalPoints >= 800) {
            confetti({ particleCount: 400, spread: 160, origin: { y: 0.5 }, colors: ['#FFD700', '#FFA500', '#FFF'] });
        }
    }
};