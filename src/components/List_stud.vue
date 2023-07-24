<template>
    <div>
        <div class="list">
                <button class="button" @click="is03Visible = !is03Visible">2023 Voice AI Assistants Series</button>
                <div v-if="is03Visible" >
                    <div id="voiceAI">
                        <br><br>
                         <img src="../assets/images/google_f.png" alt="google card" width="28%" height="auto">
                        <img src="../assets/images/siri_f.png" alt="google card" width="28%" height="auto">
                        <img src="../assets/images/cortana_f.png" alt="google card" width="28%" height="auto"><br>
                        <img src="../assets/images/bix_f.png" alt="google card" width="28%" height="auto">
                        <img src="../assets/images/replika_f.png" alt="google card" width="28%" height="auto">
                        <img src="../assets/images/kuki_f.png" alt="google card" width="28%" height="auto">
                        </div>
                         
                        <br>
                         <div class="description_text">
                            Since voice AI assistants, chat bots are being developed in various platforms, huge corporates,<br>
                            some questions about the humanity and identity of each model were raised. <br>
                            Most of (almost all of) models' default gender was set to female, in reason of being more comfortable and soothing for people.<br>
                            As these AIs do repetitive, mundane tasks, also being named as 'assistant', <br>
                            it clearly shows conventional bias for female role and labor still pervades. <br>
                            <br>
                            First work of voice AI series is simple documentation and research of each model, <br>
                            given subtle characteristics with fictional elements.

                            <br>
                            <br>

                    </div>
                </div>
        </div>
        <div class="list">
                <button class="button" @click="is02Visible = !is02Visible">2022 Prosthetics and Post-humanism, digital images</button>
                <div v-if="is02Visible">
                    <div id="prosth">
                        <img src="../assets/images/prosth_pear.png" alt="Pear of Anguish" width="28%" height="auto">
                        <img src="../assets/images/prosth_ribs_angel.jpg" alt="Pear of Anguish" width="28%" height="auto">
                        <img src="../assets/images/prosth_feet.png" alt="Pear of Anguish" width="28%" height="auto">
                    </div>

                    <div class="description_text">
                        <br>
                        While studying how media shows post-human themed images and prosthetics,<br>

                    </div>
                </div>
        </div>

        <div class="list">
            <button class="button" @click="is01Visible = !is01Visible">2020 Engine Study, infographic video</button>
            <div v-if="is01Visible">
                <br><br>
                <center><video class="videoCenter" width="90%" height="auto" controls playsinline>
                    <source src="../assets/videos/engine.mp4" type="video/mp4" poster="../assets/images/engine_thumb.png">
                    </video></center>

                    <br>
                <div class="description_text">
                    Interested in bikes and vehicle engines, this infographic explains how the 4-pistol engine works.<br>
                    Inspired by animation Evangelion.<br>

                </div>
            </div>
        </div>


    </div>
</template>
<script>

export default {
    data() {
        return {
            is01Visible: false,
            is02Visible: false,
            is03Visible: false,
            is04Visible: false, // Initially hidden
        };
    },
}
</script>

<style scoped>

Center{
    text-align: center;
}
#voiceAI{
    padding-left: 8%;
}

#prosth{
    padding-left: 8%;
}
.list {
    border-bottom: 0.086em solid black;
}

.button {
    font-family: 'palatino';
    background-color: none;
    border: none;
    color: black;
    background-color: transparent;
    padding: 2;
    font-size: 1.5em;
    transition: 0.3s;

}

.button:hover {
    background: black;
    color: white;
}

.description_text {
    font-size: 1.2em;
    font-family: 'palatino';
    padding-left: 2%;
    
}

@font-face{
    font-family: 'OldNewspaperTypes';
    src: url('../assets/fonts/OldNewspaperTypes.ttf') format('truetype');
}
@font-face{
    font-family: 'typewcond_regular';
    src: url('../assets/fonts/typewcond_regular.otf') format('opentype');
}
@font-face{
    font-family: 'palatino';
    src: url('../assets/fonts/palatino.ttf') format('truetype');
}

img{
    display: inline-block;
}

</style>

