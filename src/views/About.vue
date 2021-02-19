<template>
    <div class="container">
        <Nav/>
        <div class="wrapper">
            <div class="left-side">
                <div class="photo-wrapper content-wrapper">
                    <div class="header">photo</div>
                    <div class="content">
                        <img src="../assets/face.jpg" alt="" class="img-photo">
                    </div>
                </div>
                <div class="mail-wrapper content-wrapper">
                    <div class="header">mail</div>
                    <a class="content" href="mailto:847798512@qq.com">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mail"></use>
                        </svg>
                        <h3>847798512@qq.com</h3>
                    </a>
                </div>
            </div>
            <div class="middle-side">
                <div class="about-wrapper content-wrapper">
                    <div class="header">about Me</div>
                    <div class="content">111</div>
                </div>
                <div class="middle-lower">
                    <div class="github-wrapper content-wrapper">
                        <div class="header">github</div>

                        <a class="content" href="https://github.com/JamesLHY" target="_blank">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-github-about"></use>
                            </svg>
                            <h3>https://github.com/JamesLHY</h3>
                        </a>


                    </div>
                    <div class="weChat-wrapper content-wrapper">
                        <div class="header">weChat</div>
                        <div class="content">
                            <img src="../assets/qrcode.jpg" alt="" class="img-wechat">
                            <h3>bigggbabyy</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div class="right-side">
                <div class="github-wrapper content-wrapper">
                    <div class="header">mail</div>
                    <div class="content">111</div>
                </div>
                <div class="weChat-wrapper content-wrapper">
                    <div class="header">mail</div>
                    <div class="content">111</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Nav from "../components/Nav.vue";

    export default {
        name: "About",
        components: {Nav},

    }
</script>

<style lang="scss" scoped>

    .icon {
        width: 8em;
        height: 8em;
    }

    .content-wrapper {
        margin-right: 10px;
        border-radius: 18px;

        > .content {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: calc(100% - 41px);
            padding: 20px 0;

            > .img-photo {
                position: absolute;
                border-radius: 50%;
                width: 60%;
            }

            > .img-wechat {
                width: 8em;
                height: 8em;
            }
        }
    }

    .header {
        line-height: 40px;
        border-bottom: 1px solid #111;
        text-align: center;
        font-size: 16px;
        border-radius: 18px 18px 0 0;
        background-color: white;
        font-weight: bold;
    }

    .container {

        display: flex;
        flex-direction: column;
        background: #474747;

        > .wrapper {
            flex: 1;
            display: flex;
            padding: 10px 26px;

            > .left-side {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: 25%;

                > .photo-wrapper {
                    min-height: 64%;
                    background: #ffd03f;
                }

                > .mail-wrapper {
                    min-height: 34%;
                    background: #ff98c6;
                }
            }

            > .middle-side {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: 50%;

                > .about-wrapper {
                    min-height: 64%;
                    background: #fffbf3;
                }

                > .middle-lower {
                    min-height: 34%;
                    display: flex;
                    justify-content: space-between;

                    > .github-wrapper {
                        min-width: 48%;
                        background: #817ef8;
                    }

                    > .weChat-wrapper {
                        min-width: 48%;
                        background: #2fd2db;
                    }
                }
            }
        }
    }
</style>