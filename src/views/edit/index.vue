<template>
  <div class="edit">
    <ed-upload></ed-upload>
    <ed-form></ed-form>
  </div>
</template>
<script>
import upload from '@/views/edit/components/upload.vue'
import form from '@/views/edit/components/form.vue'
export default {
  components: { 'ed-form': form, 'ed-upload': upload }
}
</script>
