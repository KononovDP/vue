export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    closePopup() {
      return this.$emit('close');
    },
  },
};
