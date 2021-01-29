<template>
    <div id="container">
        <h1>
            <span><i>Hey</i></span>
            <span><i>I</i></span>
            <span><i>am</i></span>
            <span><i>Lhy</i></span>
            <span><i>!</i></span>
            <br>
            <br>

            <span><i>Welcome</i></span>
            <span><i>to</i></span>
            <span><i>my</i></span>
            <span><i>blog</i></span>
            <span><i>!</i></span>

        </h1>

    </div>
</template>

<script lang="ts">
    export default {
        name: "Title"
    }
</script>

<style scoped lang="scss">
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    h1 {
        margin: 0;
        letter-spacing: -2px;
    }

    @keyframes fade-in {
        to {
            opacity: 1;
        }
    }

    span {
        padding: 0 10px;
        display: inline-block;
        overflow: hidden;
        position: relative;
        top: 4rem;
        animation: 1s swift-up ease-in-out forwards;
    }

    i {
        font-size: 100px;
        color: white;
        font-style: normal;
        position: relative;
        top: 4rem;
        animation: .8s swift-up ease-in-out forwards;
    }

    @keyframes swift-up {
        to {
            top: 0rem;
        }
    }

    span:nth-of-type(1) i {
        animation-delay: 0s;
    }

    span:nth-of-type(2) i {
        animation-delay: .2s;
    }

    span:nth-of-type(3) i {
        animation-delay: .4s;
    }

    span:nth-of-type(4) i {
        animation-delay: .6s;
    }

    span:nth-of-type(5) i {
        animation-delay: .8s;
    }

    span:nth-of-type(6) i {
        animation-delay: 1s;
    }

    span:nth-of-type(7) i {
        animation-delay: 1.2s;
    }

    span:nth-of-type(8) i {
        animation-delay: 1.4s;
    }

    span:nth-of-type(9) i {
        animation-delay: 1.6s;
    }

    span:nth-of-type(10) i {
        animation-delay: 1.8s;
    }


    span:nth-of-type(1) {
        animation-delay: 0s;
    }

    span:nth-of-type(2) {
        animation-delay: .2s;
    }

    span:nth-of-type(3) {
        animation-delay: .4s;
    }

    span:nth-of-type(4) {
        animation-delay: .6s;
    }

    span:nth-of-type(5) {
        animation-delay: .8s;
    }

    span:nth-of-type(6) {
        animation-delay: 1s;
    }

    span:nth-of-type(7) {
        animation-delay: 1.2s;
    }

    span:nth-of-type(8) {
        animation-delay: 1.4s;
    }

    span:nth-of-type(9) {
        animation-delay: 1.6s;
    }

    span:nth-of-type(10) {
        animation-delay: 1.8s;
    }

</style>