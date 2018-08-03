<template>
  <div id="app" class="page">
    <header>
      <top-bar @click-log-out="onLogOut"></top-bar>     
    </header>
    <main>
      <resume-editor></resume-editor>
      <resume :current-user="currentUser" :edit="edit" :resume="resume" @onEdit="$emit('onEdit',$event)" @click-preview="edit = !edit"></resume>
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
import AV from './lib/leancloud'

function initData(){
    return {
      loginVisible: false,
      signUpVisible: false,
      shareVisible: false,
      skinPickerVisible: false,
      currentUser: {
        id: '',
        email: '',
      },
      resume: {
        jobTitle: '职位',
        name: '姓名',
        gender: '性别:',
        age: '年龄：',
        email: '邮箱：',
        phone: '手机：',

        skills: [{
          name: '技能名称',
          description: '技能描述'
        }, {
          name: '技能名称',
          description: '技能描述'
        }, {
          name: '技能名称',
          description: '技能描述'
        }, {
          name: '技能名称',
          description: '技能描述'
        }, ],

        projects: [{
          name: '项目名称',
          link: 'XXX.com',
          keywords: '关键词',
          description: '详细描述',
        }, ],
      },
      share: {
        link: 'need to login',
        status: false,
      },
      edit: true,
      skinPickerVisible: false,
      themeName: 'default',
    }
  }

export default {
  name: 'App',
  components: {
    TopBar,ResumeEditor,Resume
  },
  created: function() {
    this.getCurrent()
    this.$eventHub.$on('edit',this.onEdit)
  },
  watch: {
    'currentUser.id': function (newvalue,oldvalue){
      if(newvalue){
        this.getResume(this.currentUser.id)
        console.log('watch触发了')
        this.createShareLink()
      }
    }
  },
  data: function(){
    return initData()
  },
  methods: {
    onEdit(key, value) {
      let regex = /\[(\d)\]/g
      key = key.replace(regex, (match, number) => `.${number}`)
      // key = skills.0.name
      keys = key.split('.')
      let result = this.resume
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          result[keys[i]] = value
        } else {
          result = result[keys[i]]
        }
      }
    },
    onClickSave() {
      let currentUser = AV.User.current()
      if (currentUser) {
        this.saveResume()
      } else {
        this.$router.push('/login')
      }
    },
    onLogin(User){
      this.currentUser.id = User.id
      this.currentUser.email = User.attributes.email
    },
    onLogOut() {
        AV.User.logOut().then(() => {
          Object.assign(this.$data, initData())
          alert('logOut success')
        })
    },
    getResume(id) {
        let query = new AV.Query('User')
        query.get(id).then( e =>{
          Object.assign(this.$data.resume, e.attributes.resume)
        }).catch(function(error) {
          console.error('error');
        })
    },
    saveResume() {
      let {id} = this.currentUser
      let User = AV.Object.createWithoutData('User', id);
      User.set('resume', this.resume)
      User.save()
      alert('save success')
    },
    getCurrent() {
      let currentUser = AV.User.current()
      if (currentUser) {
        this.currentUser.email = currentUser.attributes.email
        this.currentUser.id = currentUser.id
        this.getResume(this.currentUser.id)
      }
    },
    createShareLink() {
      this.share.link = location.origin + location.pathname + '?user_id=' + this.currentUser.id
    },
    print(){
      window.print()
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
    max-width: 1280px;
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
