import router from '@/router/router';
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import directives from '@/directives';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faBriefcase, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from '@/store';

const app = createApp(App);

library.add(faList, faBriefcase, faCheck);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app');
