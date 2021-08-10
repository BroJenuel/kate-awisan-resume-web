<template>
    <section id="hero">
        <div class="w-[100%] h-[100%] flex justify-center items-center absolute">
            <div class="w-[100%] min-w-[300px] max-w-[600px] font-semibold p-[30px] flex flex-col gap-[15px]">
                <h1 class="m-0 text-size-[64px] text-[var(--light-dark)]">Kate Awisan</h1>
                <h2 class="typewriting">
                    I'm 
                    <span
                        class="typewrite"
                        data-period="2000"
                        data-type='[ "Customer Service Associate", "Social Media Assistant", "Data Entry Freelancer"]'
                    >
                        <span class="wrap"></span>
                    </span>
                </h2>
                <ul class="flex gap-[15px]">
                    <li v-for="link in links" :key="link.icon">
                        <a target="_blank" :href="link.link">
                            <Icon :name="link.icon" :color="`var(--light-dark)`"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import Icon from "./../../Icon/Icon.vue"
export default {
    name: 'HomePage',
    components: {Icon},
    setup () {
        return {
            links: [
                {
                    link: `https://twitter.com/AwisanKate`,
                    icon: `twitter`
                },
                {
                    link: `https://www.facebook.com/kitztakit.calixtoawisan`,
                    icon: `facebook`
                },
                {
                    link: `https://www.instagram.com/kateawisan`,
                    icon: `instagram`
                },
                {
                    link: `https://www.skype.com/kateawisan`,
                    icon: `skype`
                },
                {
                    link: `https://www.linkedin.com/in/kateawisan`,
                    icon: `linkedin`
                },
            ]
        }
    },
    mounted() {
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement('style');
            css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid var(--primary-color)}';
            document.body.appendChild(css);
        };
    },
};
</script>
<style lang="scss" src="./HomeStyle.scss" />