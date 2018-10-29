export default {
  data() {
    return {
      menu: [
        { text: 'Our Projects', url: '#projects' },
        { text: 'Our Services', url: '#services' },
        { text: 'About', url: '#about' },
        { text: 'Contact', url: '#contact' },
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
