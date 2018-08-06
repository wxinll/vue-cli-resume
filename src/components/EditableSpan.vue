<template>
  <span :class="{active:!disabled}">
    <span v-show="!editing" @click="xxx">{{value}}</span>
    <input type="text" v-if="!disabled" v-show="editing" :value="value" @input="$emit('edit',$event.currentTarget.value)" @blur="xxx">
  </span>
</template>

<script>
	export default {
    name: 'EditableSpan',
    props: ['value','disabled'],
    data() {
      return{
        editing: false,
      }
    },
    methods: {
      xxx(e){
        if(!this.disabled){

          this.editing = !this.editing

          let el = e.currentTarget.nextElementSibling
          if(this.editing === true){
            setTimeout(()=>{
              // this.$refs.editInput.focus()
              el.focus()
            },0)
          }

          this.$emit('input-change',this.editing)
        }
      },
    },

  }
</script>

<style scoped>
	input{
    width: 100%;
  }
  .active{
    cursor: pointer;
  }
</style>