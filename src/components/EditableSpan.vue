<template>
  <span class="editableSpan editing">
    <span v-show="!editing" @click="xxx">{{value}}</span>
    <input type="text" v-show="editing" :value="value" @input="$emit('edit',$event.currentTarget.value)" @blur="xxx">
  </span>
</template>

<script>
	export default {
    name: 'EditableSpan',
    props: ['value'],
    data() {
      return{
        editing: false
      }
    },
    methods: {
      xxx(e){
        this.editing = !this.editing
        let el = e.currentTarget.nextElementSibling
        if(this.editing === true){
          setTimeout(()=>{
            // this.$refs.editInput.focus()
            el.focus()
          },0)
        }
      },
    },

  }
</script>

<style scoped>
	input{
    width: 100%;
  }
</style>