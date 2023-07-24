<template>
    <div>
        <div class="list">
            <button class="button" @click="is06Visible = !is06Visible">2023 3d Motion Video, 6m LED wall installation 02, 1”10</button>
            <div v-if="is06Visible">
                
            <center><video width="90%" height="auto" controls playsinline>
                <source src="../assets/videos/gymboxx_final_02.mp4" type="video/mp4" poster="../assets/images/gymboxx_thumb.png">
            </video></center>
                <div class="description_text">
                        A big wall installation video for a gym.<br>
                        The video used 'blender osm' plugin to bring real map into the scene.<br>
                        Worked mostly on simulation, camera works, adjusting the racing and crashing motion.

                </div>
            </div>
        </div>

        <div class="list">
            <button class="button" @click="is05Visible = !is05Visible">2023 3d Motion Video, 6m LED wall installation 01, 1”00</button>
            <div v-if="is05Visible">
                
            <center><video width="90%" height="auto" controls playsinline>
                <source src="../assets/videos/gymboxx_rendered.mp4" type="video/mp4" poster="../assets/images/gymboxx_thumb.png">
            </video></center>
                <div class="description_text">
                    A big wall installation video for a gym.<br>
                    As a gym uses red as its key color, lightings and textures are matching its red.<br>
                    The video has 2 big scenes - mechanic door scene, and concrete-pillared scene.<br>
                    Mechanics are mostly from engines of various vehicles.

                </div>
            </div>
        </div>

        <div class="list">
        <button class="button" @click="is04Visible = !is04Visible">2022 3d Motion Poster for Fuckery Poetry Reading Group</button>
        <div v-if="is04Visible">
            <br><br>
            <center><video width="60%" height="auto" controls playsinline>
                <source src="../assets/videos/fuckery.mp4" type="video/mp4">
            </video></center>
            <div class="description_text">
                <br>
                Fuckery Poetry Group is an art collective regularly opens a recital.<br>
                This video was for 6th recital, with some key elements : dampness, church, virgin mary statue with a baby,
                scientology, elixir, and speakers on the back wall.
            </div>
        </div>
        </div>        
    
        <div class="list">
                <button class="button" @click="is03Visible = !is03Visible">2022 3d Motion Poster Series for Orgasmvalley, 1080*1920</button>
                <div v-if="is03Visible">
                        <br><br>
                        <center>
                            <video  class="video" width="60%" height="auto" controls playsinline>
                            <source src="../assets/videos/valley_workflow.mp4" type="video/mp4">
                        </video>
                        <br>
                        <div id="valleyReels">
                            <video  class="video" width="28%" height="auto" controls playsinline>
                                <source src="../assets/videos/valley01.mp4" type="video/mp4"></video>
                            <video  class="video" width="28%" height="auto" controls playsinline>
                                    <source src="../assets/videos/valley02.mp4" type="video/mp4"></video>
                            <video  class="video" width="28%" height="auto" controls playsinline>
                                    <source src="../assets/videos/valley03.mp4" type="video/mp4"></video>
                            
                                <br>

                            <video  class="video" width="28%" height="auto" controls playsinline>
                                    <source src="../assets/videos/valley04.mp4" type="video/mp4"></video>
                            <video  class="video" width="28%" height="auto" controls playsinline>
                                    <source src="../assets/videos/valley05.mp4" type="video/mp4"></video>
                        
                        </div></center>

                        <br>
                        <div class="description_text">
                            Produced weekly poster for a club named <a>Orgasmvalley</a>.<br>
                            Designed a cave-like space with bar elements, added different objects for each week, and rendered with various camera movements.<br>
                            To give identity of the word &#39;valley&#39;, some scenes depicts nature of Los Angeles, inland desert, short bushes, and some depicts its urban, city centered scenery.
                    </div>
                </div>
        </div>

        
        <div class="list">
                <button class="button" @click="is02Visible = !is02Visible">2022 Cakeday Logo Branding</button>
                <div v-if="is02Visible">
                    <br><br>
                        <center><video  class="video" width="60%" height="auto" controls playsinline>
                            <source src="../assets/videos/cakeday_logo_motion.mp4" type="video/mp4">
                        </video></center>

                    <div class="description_text">
                        <br>
                            Designed a 3d logo for Cakeday. <br>
                            Cakeday is a DJ and a producer based on Seoul. While her music style as a DJ focuses on R&B, Hiphop (starting her career as a resident DJ of club Soap), she as a producer composes series of contemporary dance music, techno, and ambient.<br>
                            To blend this two musical types, logo was designed with curve and sharp serif, chrome textured.<br>
                        <br>
                            Also logo motion video uses pearl and clam, which relates to her Korean name.<br>
                        <br>
                             Created mock-up of LP cover, CD cover.

                    <br>
                    </div>
                </div>
        </div>  
        
        
        <div class="list">
                <button class="button" @click="is01Visible = !is01Visible">2021 3d Music video for PIEBOY, 2”19”</button>
                <div v-if="is01Visible">
                    <br><br>

                    <center>
                       </center>

                    <br>
                    <div class="description_text">
                        First 3d video work. Lyric video, music video, visualizer.<br>
                        Consists of 3 big scenes - room, virtual map, and monumental scene.<br> 
                        As the song itself is inspired by movie &lt;The Matrix&gt;, visuals are brought from some movie&#39;s core elements.
                    </div>
                </div>
            </div>


    </div>
</template>
<script>

export default {
    data() {
        return {
            is06Visible: false,
            is05Visible: false,
            is04Visible: false,
            is03Visible: false,
            is02Visible: false,
            is01Visible: false,
        };
    },
}
</script>

<style scoped>

#valleyReels{
    display: inline-block;
}
center{
    text-align: center;
}
  .list{
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
  .button:hover{
    background: black;
    color: white;
  }

.description_text {
    font-size: 1.2em;
    font-family: 'palatino';
    padding-left: 2%;
    
}
@font-face{
    font-family: 'ELEGANT TYPEWRITER Regular';
    src: url('../assets/fonts/ELEGANT TYPEWRITER Regular.ttf') format('truetype');
}
@font-face{
    font-family: 'palatino';
    src: url('../assets/fonts/palatino.ttf') format('truetype');
}

</style>
