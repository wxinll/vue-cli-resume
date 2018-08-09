<template>
  <div id="app" class="page">
    <header>
      <top-bar :login="login" :edit="edit" @click-log-out="onLogOut" @save-data="saveResume" @on-preview="edit=false" @exit-preview="edit=true"></top-bar>     
    </header>
    <main>
      <resume-editor v-show="edit&&login" @share-link="createShareLink"></resume-editor>
      <resume :current-user="currentUser" :edit="edit" :resume="resume" @edit-span="onEditSpan" @click-preview="edit = !edit"></resume>
    </main>
    <router-view @login="onLogin" @sign-up="onLogin" :share-link="share.link"></router-view>
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
        education: [{time:'2017.9-2019.6',school:'学校',major:'专业'},
          {time:'2013.9-2017.6',school:'学校',major:'专业'}],
        skills: [{
          name: '技能名称',
          description: ['技能描述','技能描述','技能描述']
        },{
          name: '技能名称',
          description: ['技能描述','技能描述','技能描述']
        },{
          name: '技能名称',
          description: ['技能描述','技能描述','技能描述']
        },{
          name: '技能名称',
          description: ['技能描述','技能描述','技能描述']
        },],

        projects: [{
          name: '项目名称',
          link: 'XXX.com',
          keywords: '关键词',
          description: ['1111','2222','3333'],
        }, ],
      },
      share: {
        link: 'need to login',
        status: false,
      },
      edit: true,
      login: false,
    }
  }

export default {
  name: 'App',
  components: {
    TopBar,ResumeEditor,Resume
  },
  created: function() {
    this.getCurrent()
    this.sharePage()
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
    onEditSpan(value,item,name,index,index2) {
      if(index == undefined){
        this.resume[item] = value
      }else{
        // skills name index,value
        // projects description,index,value
        let array = this.resume[item] //skills projects
        let result = array[index][name] // skill[name] projects
        if(index2 != undefined){
          result.splice(index2,1,value) //数组不能直接赋值
        }else{
          array[index][name] = value
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
      this.login = true
    },
    onLogOut() {
        AV.User.logOut().then(() => {
          Object.assign(this.$data, initData())
          alert('logOut success')
        })
        this.login = false
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
        this.login = true
      }
    },
    createShareLink() {
      this.share.link = location.origin + location.pathname + '?user_id=' + this.currentUser.id
    },
    sharePage(){
      //如果是用带user_id的链接进入，只获取resume数据，并渲染页面
      let search = location.search
      let regex = /user_id=([^&]+)/
      let matches = search.match(regex)
      if(matches){
        let userId = matches[1]
        this.edit = false
        this.getResume(userId)
      }
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
      z-index: 1;
    }
    >main{
      padding-top: 80px;
      display: flex;
      justify-content: center;
      #resumeEditor{
        width: 100px;
        margin-left: 5px;
      }
      #resume{
        flex: 1;
      }    
    }
  }
  @media screen and (max-width: 600px){
    #resumeEditor{
      display: none;
    }
    #resume{
      margin-left: 0px !important;
    }  
  }
  #resumeEditor{
    height: 60vh;
    margin-right: 2rem;
  }
  #resume{
    background: #f5f5f5;
    max-width: 960px;
  }
</style>
