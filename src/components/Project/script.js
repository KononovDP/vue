import Modal from '@/components/Modal';
import Button from '@/components/Button';

export default {
  data() {
    return {
      showModal: false,
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
    Modal,
    Button,
  },
  filters: {
    truncate(text, length, suffix) {
      return text.substring(0, length) + suffix;
    },
  },
};
