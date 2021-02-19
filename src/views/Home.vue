<template>
    <div class="container">
        <Nav/>

        <div class="content-wrapper">
            <video class="bg-video" muted autoplay loop preload="auto">
                <source src="http://weapi.zo-ko.com/views/comm/assets/bg-lol.mp4"
                        type="video/mp4">
            </video>

            <div class="content">
                <Title/>
                <div class="icon-line">
                    <div class="pre-line">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-like"></use>
                        </svg>
                        <p>点赞</p>
                    </div>
                    <div class="pre-line">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-store"></use>
                        </svg>
                        <p>收藏</p>
                    </div>
                    <div class="pre-line">
                        <svg class="icon" stroke="black" aria-hidden="true">
                            <use xlink:href="#icon-coin"></use>
                        </svg>
                        <p>投币</p>
                    </div>
                </div>

            </div>
            <div class="logo-container">
                <Logo/>
            </div>

        </div>

    </div>

</template>

<script>
    import Logo from "../components/Logo";
    import Nav from "../components/Nav";
    import Title from "../components/Title";

    export default {
        name: 'Home',
        components: {Logo, Nav, Title},
        component: {
            Logo, Nav
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .bg-video{
        position: fixed;
    }
    .icon-line{
        z-index: 10;
    }
    .container {
        display: flex;
        flex-direction: column;
    }

    .content-wrapper {
        position: relative;
        min-height: 94vh;
    }

    .content {

        padding: 46px;
        display: flex;
        justify-content: space-between;
        min-width: 90vw;
    }

    .icon {
        width: 4em;
        height: 4em;

    }

    .pre-line {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;

        > p {
            color: #fff;
            font-size: 1.4rem;
            margin-top: 4px;
        }
    }

    .logo-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 6vh;


    }
</style>