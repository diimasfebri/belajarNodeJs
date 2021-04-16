<template>
  <div class="tasks">
    <div class="grup">
      <!-- input data -->
      <todolist :nama-label="'MYDAY'" @test="tambah" />
      <!-- output daya -->
      <div class="output">
        <div
          v-for="(n, i) in daftar"
          :key="i"
          class="gerakan"
          @click="cleartodo(i)"
        >
          <div class="listtodo">{{ n.listtodo }}</div>
        </div>
      </div>
    </div>

    <!-- todo lain -->
    <div class="grup">
      <!-- input data -->
      <todolist :nama-label="'IMPORTANT'" @test="tambah1" />
      <!-- output data -->
      <div class="output">
        <div
          v-for="(n, i) in daftar1"
          :key="i"
          class="gerakan"
          @click="cleartodo1(i)"
        >
          <div class="listtodo1">{{ n.listtodo1 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const obj = {
      myday: '',
      important: '',
      daftar1: [],
      daftar: [],
    }
    return obj
  },
  methods: {
    // input dan delete data todo list
    tambah(listtodo) {
      this.daftar.push({
        listtodo,
      })
    },
    // hapus daftar list todo
    cleartodo(i) {
      this.daftar.splice(i, 1)
    },
    tambah1(listtodo1) {
      this.daftar1.push({
        listtodo1,
      })
    },
    // hapus daftar list todo
    cleartodo1(i) {
      this.daftar1.splice(i, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .grup {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        input {
          width: 100%;
          padding: 0;
          border: none;
        }
      }
      .miring {
        input[type='button'] {
          width: 85px;
          padding: 0;
          border: none;
        }
      }
    }
    .output {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;
      .gerakan {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
