<template>
  <iframe :src="url"></iframe>
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    let url = ref('');
    const getPdf = () => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const blob = new Blob([xhr.response], {type: 'application/pdf'});
          url.value = URL.createObjectURL(blob);
        }
      }
      xhr.responseType = "blob"; // 不设置，无法正确解析pdf文件
      xhr.open("GET", "http://localhost:8000/getPdf1", true);
      xhr.send();
    }

    getPdf();
    return {url}
  }
}
</script>
