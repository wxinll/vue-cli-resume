<template>
  <div class="wrap">
    <div class="editSpan"
          :contenteditable="!disabled" :placeholder="value" 
          @input="fn"
          @click.stop="onClick"
          :class="{isEdit: edit, border: onMouse}"
          @mouseover="onMouseover"
          @mouseleave="onMouseleave"
          >
        {{content}}
    </div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-minus-circle"></use>
    </svg>
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
      }
    },
    beforeMount(){
      document.addEventListener('click',()=>{
        this.edit = false
      })
    },
    methods: {
      fn(e){
        this.text = e.target.innerText
        this.$emit('edit',this.text)
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
    border:1px solid #e5e5e5;
    min-height: 20px;
    outline: none;
  }
  .editSpan.border:hover{
    border: 1px dashed;
  }
  .isEdit{
    border: 1px dashed;
  }
  .wrap{
    position: relative;
  }
  .wrap>svg.icon{
    display: none;
    position: absolute;
    right: 5%;
    top: 5%;
    fill: red;
    width: 1em;
    height: 1em;
  }
  .wrap:hover>svg.icon{
    display: block;
    cursor: pointer;
  }
</style>