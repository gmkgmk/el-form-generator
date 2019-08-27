import defaultComponents from './components/index.js';
import FormGenerator from './src/formGenerator';

const install = async Vue => {
  Vue.component('VueFormGenerator', FormGenerator);
};

export default {
  version: '0.1.0',
  defaultComponents,
  FormGenerator,
  install
};
