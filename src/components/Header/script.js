export default {
  data() {
    return {
      menu: [
        { text: 'Home', url: '/' },
        { text: 'About', url: 'about' },
        { text: 'Blog', url: 'blog' },
        { text: 'Contact', url: 'contact' },
      ],
      activeMenu: false,
    };
  },
  methods: {
  },
  mounted() {
    this.$emit('set-header-height', this.$refs.header.scrollHeight);
  },
};
