<template>
  <div id="app" class="page">
    <header>
      <TopBar/>      
    </header>
    <main>
      <ResumeEditor/>
      <Resume/> 
    </main>
    <router-view @login="onLogin" @sign-up="onLogin"></router-view>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import './assets/base.scss'

import TopBar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import Resume from './components/Resume'

export default {
  name: 'App',
  data: function (){
    return {
      text: 'yyyyyyy'
    }
  },
  components: {
    TopBar,ResumeEditor,Resume
  },
  methods: {
    onLogin() {

    },
  },
}
</script>

<style lang="scss">
  .page{
    background: #EAEBEC;
    >header{
      position: fixed;
      width: 100%;
    }
    >main{
      padding-top: 80px;
    }
  }
  #resumeEditor{
    background: #444;
    position: fixed;
    width: 120px;
    height: 60vh;
    margin-left: 5px;
  }
  #resume{
    background: #f5f5f5;
    margin-left: 180px;
  }
  @media screen and (max-width: 600px){
    #resumeEditor{
      display: none;
    }
    #resume{
      margin-left: 0px;
    }    
  }
</style>
