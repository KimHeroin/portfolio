<template>
    <div>
       <tit class="tit">Kim Hye Ryoung</tit>
        </div>
</template>

<script>
export default {
    data() {
        return {
            isConVisible: false,
        };
    },
}
</script>

<style scoped>

.tit{

    font-family: 'Isabella';
    font-size: 6em;
    text-align: left;
    padding-left: 10px;
    -webkit-text-stroke: 1.2px black;
    color: transparent;
    transition: 0.3s ease-in-out;
    
}
.tit :hover {
    color: black;

}

@font-face{
    font-family: 'Isabella';
    src: url('../assets/fonts/Isabella.ttf') format('truetype');
}
</style>
