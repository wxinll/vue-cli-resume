<template>
  <div id="app" class="page">
    <header>
      <TopBar/>      
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/> 
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import TopBar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

export default {
  name: 'App',
  data: function (){
    return {
      text: 'yyyyyyy'
    }
  },
  components: {
    TopBar,ResumeEditor,ResumePreview
  }
}
</script>

<style lang="scss">
  .page{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #EAEBEC;
    min-width: 1024px;
    >main{
      flex-grow: 1;
      margin: 16px 0;
      display: flex;
      justify-content: space-around;
    }
  }
  #resumeEditor{
    width: 35%;
    background: #444;
  }
  #resumePreview{
    width: 60%;
    background: #777;
  }
</style>
