<template>
  <div class="input">
    <div class="namanya">
      <div class="label">{{ namaLabel }}</div>
      <input v-model="model" type="text" class="input1" />
    </div>
    <div class="miring">
      <input type="button" class="submit" value="Masukan lur" @click="submit" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    namaLabel: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      model: '',
    }
  },

  methods: {
    submit() {
      this.$emit('test', this.model)
      this.model = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: flex-end;
  .namanya {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
  input {
    width: 100%;
    padding: 0;
    border: none;
  }
}
</style>
