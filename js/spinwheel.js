$(function () {
    var Sampledata = `🍕 Pizza
🌮 Mexican
🍔 Burgers
🍣 Sushi
🍝 Italian
🍚 Non Sushi Asian
🍗 BBQ
🐟 Seafood`;
    var FoodDrinkdata = ['🍇 Grapes', '🍈 Melon', '🍉 Watermelon', '🍊 Tangerine', '🍋 Lemon', '🍌 Banana', '🍍 Pineapple', '🥭 Mango', '🍎 Red Apple', '🍏 Green Apple', '🍐 Pear', '🍑 Peach', '🍒 Cherries', '🍓 Strawberry', '🥝 Kiwi Fruit', '🍅 Tomato', '🥥 Coconut', '🥑 Avocado', '🍆 Eggplant', '🥔 Potato', '🥕 Carrot', '🌽 Ear of Corn', '🌶️ Hot Pepper', '🥒 Cucumber', '🥬 Leafy Green', '🥦 Broccoli', '🧄 Garlic', '🧅 Onion', '🍄 Mushroom', '🥜 Peanuts', '🌰 Chestnut', '🍞 Bread', '🥐 Croissant', '🥖 Baguette Bread', '🥨 Pretzel', '🥯 Bagel', '🥞 Pancakes', '🧇 Waffle', '🧀 Cheese Wedge', '🍖 Meat on Bone', '🍗 Poultry Leg', '🥩 Cut of Meat', '🥓 Bacon', '🍔 Hamburger', '🍟 French Fries', '🍕 Pizza', '🌭 Hot Dog', '🥪 Sandwich', '🌮 Taco', '🌯 Burrito', '🥙 Stuffed Flatbread', '🧆 Falafel', '🥚 Egg', '🍳 Cooking', '🥘 Shallow Pan of Food', '🍲 Pot of Food', '🥣 Bowl with Spoon', '🥗 Green Salad', '🍿 Popcorn', '🧈 Butter', '🧂 Salt', '🥫 Canned Food', '🍱 Bento Box', '🍘 Rice Cracker', '🍙 Rice Ball', '🍚 Cooked Rice', '🍛 Curry Rice', '🍜 Steaming Bowl', '🍝 Spaghetti', '🍠 Roasted Sweet Potato', '🍢 Oden', '🍣 Sushi', '🍤 Fried Shrimp', '🍥 Fish Cake with Swirl', '🥮 Moon Cake', '🍡 Dango', '🥟 Dumpling', '🥠 Fortune Cookie', '🥡 Takeout Box', '🦪 Oyster', '🍦 Soft Ice Cream', '🍧 Shaved Ice', '🍨 Ice Cream', '🍩 Doughnut', '🍪 Cookie', '🎂 Birthday Cake', '🍰 Shortcake', '🧁 Cupcake', '🥧 Pie', '🍫 Chocolate Bar', '🍬 Candy', '🍭 Lollipop', '🍮 Custard', '🍯 Honey Pot', '🍼 Baby Bottle', '🥛 Glass of Milk', '☕ Hot Beverage', '🍵 Teacup Without Handle', '🍶 Sake', '🍾 Bottle with Popping Cork', '🍷 Wine Glass', '🍸 Cocktail Glass', '🍹 Tropical Drink', '🍺 Beer Mug', '🍻 Clinking Beer Mugs', '🥂 Clinking Glasses', '🥃 Tumbler Glass', '🥤 Cup with Straw', '🧃 Beverage Box', '🧉 Mate', '🧊 Ice', '🥢 Chopsticks', '🍽️ Fork and Knife with Plate', '🍴 Fork and Knife', '🥄 Spoon', 'Blueberries', 'Olive', 'Bell Pepper', 'Beans', 'Flatbread', 'Tamale', 'Fondue', 'Teapot', 'Pouring Liquid', 'Bubble Tea', 'Jar'];
    var Colordata = [
        "#1CBCB4",
        "#FF449B",
        "#76317C",
        "#3BAADF"
    ];
    var Colorextra = "#F4B84D";
    var Origin = "Select to Add";
    var missmeg = "It's so Amazing! You Miss :)";
    var Confettidata = [ {}, {
            confettiRadius: 12,
            confettiesNumber: 100
        },
        {
            emojis: ['🍀'],
            emojiSize: 40,
            confettiNumber: 77,
        },
        {
            emojis: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼‍', '🐻', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐺', '🐗', '🦓', '🐲', '🐴', '🦄', '🦝'],
            emojiSize: 28,
            confettiNumber: 120,
        },
        {
            emojis: ['🐈‍'],
            emojiSize: 35,
            confettiNumber: 50,
        },
        {
            emojis: ['🐹'],
            emojiSize: 30,
            confettiNumber: 60,
        }, {
            confettiColors: ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"],
            confettiRadius: 10,
            confettiesNumber: 150
        }, {
            confettiColors: ["#9B5DE5", "#F15BB5", "#FEE440", "#00BBF9", "#00F5D4"],
            confettiRadius: 6,
            confettiesNumber: 300
        },
    ];
    const jsConfetti = new JSConfetti({})

    Vue.createApp({
        data() {
            return {
                itemsList: localStorage.getItem("tbi") ? localStorage.getItem("tbi") : Sampledata,
                fddList: FoodDrinkdata,
                currentDeg: 0,
                selected: Origin,
                time: "YYYY/MM/DD HH:MM:SS",
                work: false,
                cftastt: true,
                hide1: false,
                SSRpd: "",
                imgNum: "2",
            };
        },
        methods: {
            color(n) {
                var colors = Colordata;
                if (n % colors.length == 0 && n != 0) {
                    return Colorextra;
                }
                return colors[n % colors.length];
            },
            spin() {
                const SpinLength = 4200;
                const startDeg = Number(this.currentDeg) || 500;
                const ConfettiLength = Confettidata.length;
                this.imgNum = `${Math.floor((Math.random() * 55) + 1)}`;

                if (document.querySelector(".hint")) {
                    document.querySelector(".hint").remove();
                };

                this.work = true;
                document.querySelector('.spkimg').innerHTML = `.ConfettiArea .card::after{ background-image: url('/images/sparkles/sparkles${Math.floor((Math.random() * 5) + 1)}.gif') }`;
                setTimeout(() => {
                    this.timeFormate(new Date());
                    this.work = false;
                    this.cftastt = false;
                    jsConfetti.addConfetti(Confettidata[Math.floor(Math.random() * ConfettiLength)]);
                }, SpinLength);
                jsConfetti.clearCanvas()

                this.currentDeg = startDeg + Math.round(Math.random() * (SpinLength - 360) + 360);
            },
            textPercentage(n) {
                return (n * (360 / this.items.length)) + (360 / (this.items.length * 2)) + 90;
            },
            reset1() {
                localStorage.removeItem("tbi");
                this.itemsList = Sampledata;
            },
            reset2() {
                window.location.reload();
            },
            switchSelect(e) {
                this.selected = e.target.textContent;
            },
            addoption() {
                if (this.selected != Origin) {
                    this.itemsList += "\n" + this.selected;
                    this.selected = Origin;
                };
            },
            togglebar() {
                this.hide1 = !this.hide1;
            },
            timeFormate(timeStamp) {
                let newdate = new Date(timeStamp);
                let year   = newdate.getFullYear();
                let month  = newdate.getMonth() + 1 < 10 ? "0" + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
                let date   = newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
                let hour   = newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
                let minute = newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes();
                let second = newdate.getSeconds() < 10 ? "0" + newdate.getSeconds() : newdate.getSeconds();
                
                this.time = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
            },
            done() {
                this.cftastt = true;
            },
            async copy() {
                try {
                    await navigator.clipboard.writeText(this.answer);
                } catch($e) {
                    alert("Copy Failed");
                }
            },
        },
        computed: {
            items() {
                return this.itemsList.split("\n").filter(i => i && i.trim());
            },
            size() {
                return 100 / this.items.length;
            },
            answer() {
                let itemsListr = this.items.slice().reverse();
                if ((this.currentDeg % (360 / this.items.length)) === 0) {
                    this.SSRpd = "UR";
                    return missmeg;
                }else {
                    this.SSRpd = "SSR";
                };
                return itemsListr[Math.trunc((this.currentDeg / (360 / this.items.length)) % this.items.length)];
            },
        },
        watch: {
            itemsList(value) {
                // console.log(value.split("\n").filter(i => i && i.trim()));
                localStorage.setItem("tbi", value);
            },
        },
    }).mount('#app');

    /*****/

    $(".card").on("mousemove", function(e) {
        var $this = $(this);
        var l = e.offsetX,
            t = e.offsetY;
        var h = $this.height(),
            w = $this.width();
        var lp = Math.abs(Math.floor(100 / w * l) - 100),
            tp = Math.abs(Math.floor(100 / h * t) - 100);
        var lp2 = (50 - (Math.abs(Math.floor(100 / w * l) - 100)) / 10) + 5,
            tp2 = (50 - (Math.abs(Math.floor(100 / h * t) - 100)) / 10) + 5;
        var ty = (tp - 50) / 2,
            tx = ((lp - 50) * .5) * -1;
        var bg = `background-position: ${lp}% ${tp}%;`,
            bg2 = `background-position: ${lp2}% ${tp2}%;`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        var style = `
            .card.active:before { ${bg} }
            .card.active:after { ${bg2} }
            .card.active { ${tf} }
        `;
        $this.removeClass("active");
        $this.addClass("active");
        $(".hover").html(style);
    }).on("mouseout", function () {
        $(".card").removeClass("active");
    });

    /*****/
});