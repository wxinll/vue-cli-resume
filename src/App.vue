<template>
  <div id="app">
    <TopBar/>
    <ResumeEditor/>
    <ResumePreview/> 
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

import './assets/reset.css'

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

<style>
  p{color: red;}
</style>
