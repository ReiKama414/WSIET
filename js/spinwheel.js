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
        "#F4B84D",
        "#FF449B",
        "#76317C",
        "#3BAADF"
        // "#F26D7E",
        // "#F26C4F",
        // "#F78E55",
        // "#FBAE5C",
        // "#FEF568",
        // "#ABD373",
        // "#7CC576",
        // "#3CB879",
        // "#1CBCB4",
        // "#00BFF3",
        // "#458CCC",
        // "#5674BA",
        // "#605CA8",
        // "#855FA8",
        // "#A764A9",
        // "#F06EAA",
    ];
    var Colorextra = "#1CBCB4";
    var Origin = "Select to Add";

    Vue.createApp({
        data() {
            return {
                itemsList: localStorage.getItem("tbi") ? localStorage.getItem("tbi") : Sampledata,
                fddList: FoodDrinkdata,
                currentDeg: 0,
                selected: Origin,
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

                if (document.querySelector(".hint")) {
                    document.querySelector(".hint").remove();
                };

                let elems = document.querySelectorAll(".swc");
                [].forEach.call(elems, function(elem) {
                    elem.classList.add("work");
                });
                window.setTimeout(function () {
                    [].forEach.call(elems, function(elem) {
                        elem.classList.remove("work");
                    });
                }, SpinLength);

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
                document.querySelector("#app").classList.toggle("hide");
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
                    return "Miss :(";
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
});