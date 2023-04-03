<template>
  <div class="container">
    <iframe ref="iframeHtml" class="iframe" :src="url + '#toolbar=0'" :onload="handleLoad"></iframe>
    <!-- <pdf class="pdf" :source="url" /> -->
  </div>
</template>
<script>
import {getCurrentInstance, onMounted} from 'vue';
import pdf from 'vue-pdf-embed'
export default {
  components: {pdf, demo},
  setup() {
    const instance = getCurrentInstance();
    const setIframeStyle = () => {
      const iframe = instance.refs.iframeHtml.contentDocument;
      const style = document.createElement('style');
      iframe.head.appendChild(style);
      const sheet = style.sheet;
      sheet.insertRule("::-webkit-scrollbar {width: 6px;height: 6px;}");
      sheet.insertRule("::-webkit-scrollbar-thumb {background-color: #bfbfbf;-webkit-border-radius: 6px;}"); 
    }
    onMounted(() => {
      // 设置无效，iframe加载完成晚于onMounted
      // setIframeStyle();
      console.log("onMounted");
    });
    const handleLoad = () => {
      console.log("iframe加载完成");
      setIframeStyle();
    }
    const url = new URL('./1.pdf').href;
    return {url, handleLoad};
  },
} 
</script>
<style scoped>
.container {
  width: 100%;
  height: 120%;
  background-color: antiquewhite;
}
</style>
