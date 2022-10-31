let app = new Vue({
  el: "#app",
  data: {
    status: 1,
    answer1: "",
    answer2: "",
    answer3: "",
    result: "",
    dogType: {
      Loyalty: {
        short: { mono: "シー・ズー", colorful: "ミニチュアダックスフンド"},
        long: { mono: "チワワ", colorful: "ミニチュアダックスフンド"}
      },
      Naughty: {
        short: { mono: "シー・ズー", colorful: "ミニチュアダックスフンド"},
        long: { mono: "シー・ズー", colorful: "チワワ"}
      },
    },
  },
  methods: {
    q1: function (size) {
      this.answer1 = size;
      this.status = 2;
    },
    q2: function (chara) {
      this.answer2 = chara;
      this.status = 3;
    },
    q3: function (style) {
      this.answer3 = style;
      this.status = 4;
      this.result = this.dogType[this.answer1][this.answer2][this.answer3];
    },
    reset: function(){
      this.answer1 = '';
      this.answer2 = '';
      this.result = '';
      this.status = 1;
     }
  }
});
