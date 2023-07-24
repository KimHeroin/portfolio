<template>
  <div id="app">
    <div class="bg" :style="backgroundStyle"></div>
    <HeaderTit></HeaderTit>
    <subtit>PERSONAL STUDIES</subtit><br>
    <List_stud></List_stud>
    <br><br>
    <subtit>WORKS</subtit>
    <List_works></List_works>
    <Footer></Footer>
  </div>
</template>
<script>

import HeaderTit from './components/HeaderTit.vue'
import List_stud from './components/List_stud.vue'
import List_works from './components/List_works.vue'
import Footer from './components/Footer.vue'


export default {
  
  components: {
    'HeaderTit': HeaderTit,
    'List_stud': List_stud,
    'List_works': List_works,
    'Footer': Footer
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Montserrat:ital,wght@0,300;1,200&display=swap');


body {
  margin: 0;
  overflow: scroll;
}

subtit {
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  font-family: 'IM Fell English', serif;
  font-size: 2.5em;
}

.bg {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out; 
  
}

</style>



