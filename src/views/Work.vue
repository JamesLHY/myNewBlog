<template>
    <div class="container">
        <Nav/>
        <div class="work-wrapper">
            <div class="work">
                <div class="work-title"><p>Code</p></div>
                <ul>
                    <a href="https://jameslhy.github.io/xiaobai-notepad-vue-version--website/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-vue-notepad"></use>
                                </svg>
                                <figcaption>小白记账Vue版</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/xiaobai-notePad-react-version-website/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-react-notepad"></use>
                                </svg>
                                <figcaption>小白记账React版</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/Vue3-ui-website/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-vue3"></use>
                                </svg>
                                <figcaption>Vue3-Pure-UI</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://github.com/JamesLHY/node-fanyi" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-translate"></use>
                                </svg>
                                <figcaption>Node翻译</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/myNav/src/index.html" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-nav-website"></use>
                                </svg>
                                <figcaption>老早的导航网站</figcaption>
                            </figure>
                        </li>
                    </a>

                </ul>
            </div>
            <div class="work">
                <div class="work-title"><p>Gadget</p></div>
                <ul>
                    <a href="https://jameslhy.github.io/canvas/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-canvas"></use>
                                </svg>
                                <figcaption>Canvas</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/Pikachu-1/src/index.html" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-pikachu"></use>
                                </svg>
                                <figcaption>Pikachu</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/yin-yang/src/index.html" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-yinyang"></use>
                                </svg>
                                <figcaption>阴阳八卦</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/a-clock/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-clock"></use>
                                </svg>
                                <figcaption>大时钟</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/charge-demo/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-charge"></use>
                                </svg>
                                <figcaption>Charge</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/cyberpunk-button/" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-cyberpunk"></use>
                                </svg>
                                <figcaption>Cyberpunk Button</figcaption>
                            </figure>
                        </li>
                    </a>
                    <a href="https://jameslhy.github.io/404page/src/index.html" target="_blank">
                        <li>
                            <figure>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-404"></use>
                                </svg>
                                <figcaption>404</figcaption>
                            </figure>
                        </li>
                    </a>
                </ul>
            </div>
            <a href="https://github.com/JamesLHY" target="_Blank">
                <div class="view-more-wrapper">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-view-more"></use>
                    </svg>
                    <span class="view-more-text">VIEW MORE</span>
                </div>
            </a>

        </div>
    </div>
</template>

<script lang="ts">
    import Nav from "../components/Nav.vue";

    export default {
        name: "Work",
        components: {Nav}
    }
</script>

<style scoped lang="scss">
    .view-more-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        opacity: .5;

        > .view-more-text {
            padding-left: 10px;
            color: hsla(0, 0%, 100%, .6);
            font-size: 20px;
            font-weight: bold;
            line-height: 46px;
        }

        &:hover {
            opacity: 1;
        }
    }

    .container {
        .icon {
            width: 3em;
            height: 3em;
        }

        > .work-wrapper {
            padding: 60px 40px;

            > .work {
                margin-bottom: 40px;
                display: flex;
                flex-direction: column;

                &::after {
                    content: '';
                    clear: both;
                    display: block;
                    width: 100%;
                    bottom: 0;
                    left: 0;
                    transform: translateY(10px);
                    border: 1px solid #1e1e1e;
                }

                > .work-title {
                    max-width: 180px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.8rem;
                    padding: 4px 14px;
                    letter-spacing: 4px;
                    color: #fff;
                    font-weight: 400;
                    margin-bottom: 10px;
                    background-color: #101010;

                }

                > ul {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 26px;

                    > a {
                        > li {
                            margin-right: 70px;

                            > figure {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                margin: 12px;
                                max-width: 88px;
                                cursor: pointer;

                                > figcaption {
                                    text-align: center;
                                    color: #fff;
                                    font-size: 20px;
                                    margin-top: 10px;
                                    transition: transform .3s ease-out
                                }
                            }
                        }
                    }

                }
            }

        }
    }
</style>