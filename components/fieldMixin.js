import { get as objGet, isFunction } from 'lodash';
export default {
  mounted() {
    if (this.schema.defaultValue) {
      this.inputValue = this.schema.defaultValue;
    }
  },
  methods: {
    updateModelData(value) {
      this.$emit('model-updated', this.schema.model, value);
    }
  },
  computed: {
    value: {
      get() {
        let val;
        if (isFunction(objGet(this.schema, 'get'))) {
          val = this.schema.get(this.modelData);
        } else {
          val = objGet(this.modelData, this.schema.model);
        }
        return val;
      },

      set(newValue) {
        let oldValue = this.value;
        if (isFunction(newValue)) {
          newValue(newValue, oldValue);
        } else {
          this.updateModelData(newValue);
        }
      }
    }
  }
};
