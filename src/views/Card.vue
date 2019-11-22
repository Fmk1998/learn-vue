<template>
  <div style="height:100%;background:#fbfbfb;">
    <zh_header/>
    <zh_card/>
  </div>
</template>

<script>
  import Zh_header from '../components/zh_header';
  import Zh_card from '../components/zh_card';


  export default {
    name: 'card',
    components: { Zh_card, Zh_header }
  };
</script>
<style lang="less">

</style>
