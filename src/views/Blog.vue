<template>
    <div class="container">
        <Nav/>
        <div class="content-wrapper">
            <div class="left">
                <div class="header">Blogs</div>
                <ul>
                    <li><h3>标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>
                    <li><h3>标题1</h3><span>2020-7-1 16:00</span></li>

                </ul>
            </div>
            <div class="right">
                <div class="header">标题1</div>
                <div class="content-wrapper">内容1</div>
            </div>
        </div>

    </div>
</template>
<script>
    import Nav from "../components/Nav";

    export default {
        name: 'Blog',
        components: {Nav},
        component: {
            Nav
        },
        data() {
            return {}
        }
    }

</script>
<style lang="scss" scoped>
    .container {
        background: #474747;


        > .content-wrapper {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px;
            flex: 1;

            > .left {
                min-width: 24vw;
                height: 80vh;
                border-radius: 18px;
                border: 1px solid #111;
                max-width: 400px;
                margin-right: 12px;
                background: white;


                > .header {
                    line-height: 40px;
                    border-bottom: 1px solid #111;
                    text-align: center;
                    position: relative;
                    font-size: 16px;
                    border-radius: 18px 18px 0 0;
                    background-color: #d8dce3;
                    font-weight: bold;
                }

                > ul {
                    overflow: auto;
                    height: calc(100% - 40px);

                    > li {
                        padding: 14px;
                        cursor: pointer;

                        > h3 {
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }

                        > span {
                            font-size: 14px;
                            color: rgba(0, 0, 0, .4);
                        }
                    }
                }
            }

            > .right {
                min-width: 60vw;
                height: 80vh;
                border-radius: 18px;
                border: 1px solid #111;
                max-width: 400px;
                margin-right: 12px;
                background: white;
                overflow: auto;

                > .header {
                    line-height: 40px;
                    border-bottom: 1px solid #111;
                    text-align: center;
                    position: relative;
                    font-size: 16px;
                    border-radius: 18px 18px 0 0;
                    background-color: #d8dce3;
                    font-weight: bold;
                }

                > .content-wrapper {
                    width: 80%;
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 24px 0;
                }
            }
        }
    }

</style>