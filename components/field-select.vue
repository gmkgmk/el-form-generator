<script>
  export default {
    name: 'field-select',
    props: {
      schema: {
        type: Object,
        default: () => ({}),
        require: true
      },
      modelData: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      changeHandle(value) {
        console.log('value: ', value);
        const { model } = this.schema;
        if (!model) {
          console.error('错误:model 为空!');
        }
        this.value = value;
      }
    },
    render(createElement) {
      /*eslint no-unused-vars: 0*/
      const {
        defaultValue,
        model,
        options,
        ...restSchema
      } = this.schema;
      return createElement(
        'el-select',
        {
          props: {
            value: this.value,
            ...restSchema
          },
          on: {
            change: value => {
              this.changeHandle(value);
            }
          }
        },
        [
          options.map(el =>
            createElement('el-option', {
              props: {
                value: el.value,
                label: el.label || el.value,
                disabled: el.disabled
              }
            })
          )
        ]
      );
    }
  };
</script>
