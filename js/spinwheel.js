$(function () {
    Vue.createApp({
        data() {
            return {
                itemsList: 
                `🍕Pizza
🌮Mexican
🍔Burgers
🍣Sushi
🍝Italian
🍚Non Sushi Asian
🏠Home Style
🍗BBQ
🐟Seafood`,
                currentDeg: 0,
            };
        },
        methods: {
            color(n) {
                var colors = [
                    "#F26D7E",
                    "#F26C4F",
                    "#F78E55",
                    "#FBAE5C",
                    "#FEF568",
                    "#ABD373",
                    "#7CC576",
                    "#3CB879",
                    "#1CBCB4",
                    "#00BFF3",
                    "#458CCC",
                    "#5674BA",
                    "#605CA8",
                    "#855FA8",
                    "#A764A9",
                    "#F06EAA",
                ];
                return colors[n % colors.length];
            },
            spin() {
                const SpinLength = 4200;
                const startDeg = Number(this.currentDeg) || 500;
                this.currentDeg = startDeg + Math.round(Math.random() * (SpinLength - 360) + 360);
            },
            textPercentage(n) {
                return (n * (360 / this.items.length)) + (360 / (this.items.length * 2)) + 90;
            },
        },
        computed: {
            items() {
                return this.itemsList.split("\n");
            },
            size() {
                return 100 / this.items.length;
            },
        },
      }).mount('#app');
});