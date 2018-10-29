<template>
  <div id="app" :style="{ paddingTop: `${paddingTop}px` }">
    <Header @set-header-height="setPaddingTop"></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  data() {
    return {
      paddingTop: 0,
    };
  },
  methods: {
    setPaddingTop(value) {
      this.paddingTop = value;
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  @import url(assets/styles/fonts.css);
  @import url(assets/styles/reset.css);
  @import url(assets/styles/base.css);
</style>
