import defaultComponents from './components';
import FormGenerator from './formGenerator';

const install = async (
  Vue,
) => {


  Vue.component('VueFormGenerator', FormGenerator);
};

export default {
  version: '0.1.0',
  defaultComponents,
  FormGenerator,
  install
};
