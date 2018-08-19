<template>
  <div class="wrap">
    <div class="editSpan"
          :contenteditable="!disabled" :placeholder="value" 
          @input="fn"
          @click.stop="onClick"
          :class="{isEdit: edit, border: onMouse}"
          @mouseover="onMouseover"
          @mouseleave="onMouseleave"
          @focus="isLocked = true"
          @blur="isLocked = false"
          >
        {{content}}
    </div>
  </div>

</template>

<script>
	export default {
    name: 'EditableSpan',
    props: ['value','disabled'],
    data() {
      return{
        editing: false,
        edit: false,
        onMouse: false,
        content: this.value,
        text: '',
        isLocked: false
      }
    },
    watch: {
      value(){
        if(!this.isLocked){
          return this.content = this.value
        }
      }
    },  
    beforeMount(){
      document.addEventListener('click',()=>{
        this.edit = false
      })
    },
    methods: {
      fn(e){
        this.$emit('edit',e.target.innerText)
      },
      onClick(){
        if(!this.disabled){
          this.edit = true
        }
      },
      onMouseover(){
        if(!this.disabled){
          this.onMouse = true
        }
      },
      onMouseleave(){
        this.onMouse = false
      }
    },
  }
</script>

<style scoped>
  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block; 
  }
  [contenteditable=true].isEdit:empty:before {
    content: '';
    display: block; 
  }
  .editSpan{
    min-height: 20px;
    outline: none;
  }
  .editSpan.border:hover{
    border: 1px dashed;
  }
  .isEdit{
    border: 1px dashed;
  }
</style>