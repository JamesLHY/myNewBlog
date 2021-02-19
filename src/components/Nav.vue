<template>
    <div class="nav-container">
        <div class="nav">
            <div class="left">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-lol"></use>
                        </svg>
                    </span>
                <router-link to="/Home">Home</router-link>
                <router-link to="/Blog">Blog</router-link>
                <router-link to="/Work">Work</router-link>
                <router-link to="/About">About</router-link>
            </div>
            <div class="right">
                <a href="https://github.com/JamesLHY/">
                    <span class="icon-github">
                     <svg class="icon" aria-hidden="true">
                         <use xlink:href="#icon-github"></use>
                     </svg>
                </span>
                </a>

                <span>{{this.currentDate}}</span>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    export default {
        name: "Nav",
        data() {
            return {
                currentDate: ''
            }

        },
        created() {
           this.getTime()
        },
        methods: {

            getTime() {
                setInterval(() => {
                    const date = new Date();
                    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                    this.currentDate = h + m + s
                }, 1000)
            }
        }
    }
</script>

<style scoped lang="scss">

    .nav-container {
        width: 100%;
        background-color: #fff;

        > .nav {
            padding: 6px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.5rem;
            border-bottom: 1px solid #333333;

            > .left {
                > span {
                    > svg {
                        transform: translateY(-2px);

                        &:hover {
                            transform: scale(1.5);
                        }
                    }
                }

                > a {
                    position: relative;
                    padding: 0 10px;
                    text-transform: uppercase;
                    transition: 0.5s;

                    &::after {
                        position: absolute;
                        content: "";
                        top: 100%;
                        left: 0;
                        width: 100%;
                        height: 3px;
                        background: #3498db;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.5s;
                    }

                    &:hover {
                        color: #95a5a6;
                    }

                    &:hover::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
            }

            > .right {
                > a {
                    > span {
                        padding: 0 10px;

                        > svg {
                            transform: translateY(-2px);
                        }
                    }
                }


            }
        }
    }

</style>