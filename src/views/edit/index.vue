<template>
  <div class="edit">
    <a-upload></a-upload>
    <b-form></b-form>
  </div>
</template>
<script>
import a_upload from '@/views/edit/components/A-upload.vue'
import b_form from '@/views/edit/components/B-form.vue'
export default {
  components: { 'a-upload': a_upload, 'b-form': b_form }
}
</script>
