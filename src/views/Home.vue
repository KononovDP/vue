<template>
  <div class="main home">
    <Section className="section-home"
             title="This is"
             sectionImage="../assets/images/burger.svg">
      <vue-typed-js
              :strings="['Brand', 'Event', 'Business', 'Career']"
              :startDelay="1000"
              :typeSpeed="200"
              :backSpeed="30"
              :backDelay="200"
              :cursorChar="'_'"
              :loop="true">
        <h1>
          Strategig. <br />
          <span class="typing"></span> <br />
          Builders.
        </h1>
      </vue-typed-js>
    </Section>

    <Section className="section-project"
             title="Selected Projects">
      <div class="project-grid">
        <div class="project" v-for="project in projects">
          <div class="project-img cover-img">
            <img :src="project.image" alt="" class="image">
          </div>
          <div class="project-descr">
            <div class="project-header">
              <div class="project-icon">
                <img :src="project.imageSmall" alt="">
              </div>
              <div class="project-text">
                <div class="project-title">{{ project.title }}</div>
                <div class="project-subtitle">{{ project.subtitle }}</div>
              </div>
            </div>
            <div class="body">{{ project.text }}</div>
          </div>
        </div>
      </div>
    </Section>

    <Section className="section-service"
             title="Our Services"></Section>

    <Section className="section-about"
             title="About Us"></Section>
  </div>
</template>

<script>
import Section from '@/components/Section';

export default {
  name: 'home',
  data() {
    return {
      projects: [
        {
          image: 'assets/images/projects/project-1.jpg',
          imageSmall: 'assets/images/projects/project-small-1.png',
          title: 'Hofer AG',
          subtitle: 'Auf den Hofer Internetseiten erfahren',
          text: 'Air + Style Innsbruck festival engagementTicket sales strategy Strategic brand consulting ' +
          'and development from event to global festival Creative build and execution of festival presence',
        },
        {
          image: 'assets/images/projects/project-2.jpg',
          imageSmall: 'assets/images/projects/project-small-2.png',
          title: 'Opel',
          subtitle: 'General Motors Austria GmbH',
          text: 'Air + Style Innsbruck festival engagementTicket sales strategy Strategic brand consulting ' +
          'and development from event to global festival Creative build and execution of festival presence',
        },
      ],
    };
  },
  components: {
    Section,
  },
};
</script>
