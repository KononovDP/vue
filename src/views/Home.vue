<template>
  <div class="home">
    <Section className="section-home">
      <SectionTitle :sectionTitle="'This is'" :sectionImage="'../assets/images/burger.svg'"></SectionTitle>
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

    <Section className="section-project">
      <SectionTitle :sectionTitle="'Selected Projects'"></SectionTitle>
      <div class="project-grid">
        <Project
                v-for="project in projects"
                :key="project.id"
                :image="project.image"
                :imageSmall="project.imageSmall"
                :title="project.title"
                :subtitle="project.subtitle"
                :text="project.text"
        ></Project>
      </div>
    </Section>

    <Section className="section-service">
      <SectionTitle :sectionTitle="'Our Services'"></SectionTitle>
      <div class="service-wrap">
        <div class="service-left">
          <ul class="service-list">
            <li><a href="#" class="service-link">//Event <br />production</a></li>
            <li><a href="#" class="service-link">//Strategic <br />business <br/>development</a></li>
          </ul>
        </div>
        <div class="service-center">
          <div class="service-circle">
            <AnimateTitle
                    :title="'ideas.'"
                    :subtitles="['inspiretion', 'imagination', 'abstraction']"
            ></AnimateTitle>
            <AnimateTitle
                    :title="'brains.'"
                    :subtitles="['designation', 'conception', 'definition']"
            ></AnimateTitle>
            <AnimateTitle
                    :title="'quest.'"
                    :subtitles="['implementation', 'execution', 'conclusion']"
            ></AnimateTitle>
          </div>
        </div>
        <div class="service-right">
          <ul class="service-list">
            <li><a href="#" class="service-link">//Marketing <br />solutions</a></li>
            <li><a href="#" class="service-link">//Concept <br />architecture</a></li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className="section-about">
      <SectionTitle :sectionTitle="'About Us'"></SectionTitle>
      <About></About>
    </Section>

  </div>
</template>

<script>
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Project from '@/components/Project';
import AnimateTitle from '@/components/AnimateTitle';
import About from '@/components/About';

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
        {
          image: 'assets/images/projects/project-3.jpg',
          imageSmall: 'assets/images/projects/project-small-3.png',
          title: 'Air + Style',
          subtitle: 'World Wide Snowboard Freestyle and Music festival',
          text: 'Long term global marketing strategy planning and implementation. Live broadcast production. ' +
          'Strategic brand consulting and development from event to global festival. Increased revenue stream ' +
          'through raised ticket sales and sponsorship acquisition ',
        },
        {
          image: 'assets/images/projects/project-4.jpg',
          imageSmall: 'assets/images/projects/project-small-4.png',
          title: 'Wake the Line',
          subtitle: 'Stadium Wakeboard Event',
          text: 'Live event production. Event programming',
        },
      ],
    };
  },
  components: {
    Section,
    Project,
    SectionTitle,
    AnimateTitle,
    About,
  },
};
</script>
