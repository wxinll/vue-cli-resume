<template>
	
</template>

<script>
	
</script>

<style>
	
</style>

Vue.component('editable-span', {
  props: ['value', 'disabled'],
  template: `
      <span class="editableSpan editing">
        <span v-show="!editing" @click="xxx">{{value}}</span>
        <el-input
          ref="editInput"
          v-show="editing"
          v-bind:value="value"
          @input="triggerEdit"
          @blur="xxx"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4}"
          placeholder="请输入内容">
        </el-input>
      </span>
    `,
  data(){
    return {
      editing: false
    }
  },
  methods: {
    triggerEdit(e){
      this.$emit('edit', e)
    },
    xxx(e){
      this.editing = !this.editing
      if(this.editing === true){
        setTimeout(()=>{
          this.$refs.editInput.focus()
        },0)
      }
    },
  },
})