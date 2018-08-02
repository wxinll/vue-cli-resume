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
  }
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
      display: flex;
      justify-content: space-around;
    }
  }
  #resumeEditor{
    width: 15%;
    background: #444;
  }
  #resume{
    width: 80%;
    background: #f5f5f5;
  }
  @media screen and (max-width: 600px){
    #resumeEditor{
      display: none;
    }    
  }
</style>
