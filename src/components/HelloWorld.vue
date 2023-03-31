<template>
helo anh em {{ a }}
<v-btn @click="conso(5)">ckick</v-btn>
<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
<div v-html="editorData">
</div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: 'HelloWorld',

  data(){
    return {
    a: 0,
    nga: 0,
    editor: ClassicEditor,
    editorData: '<p>Content of the editor.</p>',
    editorConfig: {
    // The configuration of the editor.
    }

  }},
  methods:{
   async conso(a){
      
       let b = await new Promise( (res, rej)=> {
        if (a>5) { res(1)}
       else rej(6)
       })
        let c = b
       let e =  b
       let f = e
       console.log('day la promí tranfe ne',f)
      //  console.log(this.a)
      console.log('day la promis', c)
      
    


     
     
    }

  },
}
</script>
