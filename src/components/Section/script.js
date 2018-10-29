import SectionTitle from '@/components/SectionTitle';

export default {
  props: {
    className: String,
    title: {
      type: String,
      required: true,
    },
    sectionImage: {
      type: String,
      required: false,
    },
  },
  components: {
    SectionTitle,
  },
};
