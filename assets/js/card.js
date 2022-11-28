$(function () {
    var storedCard = JSON.parse(localStorage.getItem("icl"));

    Vue.createApp({
        data() {
            return {
                imgCptList: storedCard ? storedCard : [],
                selectedShow: false,
            };
        },
        watch: {
            selectedShow() {
                if (this.selectedShow) {
                    $(".ccd.null").parent().hide();
                } else {
                    $(".ccd.null").parent().show();
                }
            }
        }
    }).mount('#app');

    function cardEffect() {
        var card = ".ccd:not(.null)";
        var $cd = $(card);
        var $cs = $(".chs");
        $cd.on("mousemove", function(e) {
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
                ${card}.active:not(.sample)::before { ${bg} }
                ${card}.active:not(.sample)::after { ${bg2} }
                ${card}.active { ${tf} }
            `;
            $this.removeClass("active");
            $this.addClass("active");
            $cs.html(style);
        }).on("mouseout", function () {
            $cd.removeClass("active");
        });
    };
    cardEffect();
    
    $('.cctn').scroll( function() {
        if ($(this).scrollTop() >= 15) {
            $(this).siblings(".navbar").addClass('fixed');
            $(this).siblings(".gotop").addClass('show');
        }
        else {
            $(this).siblings(".navbar").removeClass('fixed');
            $(this).siblings(".gotop").removeClass('show');
        }
    });

    const target = document.querySelectorAll('.ccd:not(.sample)');
    const options = {
        rootMargin: '0px',
        threshold: .25
    };
    let callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.parentNode.classList.remove('hd');
                // console.log('I enetries', entry);
                // observer.unobserve(entry.target);
            } else {
                entry.target.parentNode.classList.add('hd');
                // console.log('O enetries', entry);
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    target.forEach(target => observer.observe(target));

});