import Popup from '@/components/Popup';

export default {
  data() {
    return {
      showPopup: false,
    };
  },
  props: {
    imageBig: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    imageSmall: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },
  components: {
    Popup,
  },
  filters: {
    truncate(text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
  },
};
