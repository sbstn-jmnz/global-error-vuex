<template>
  <v-app>
    <v-main>
      <error-component v-if="error.message" :message="error.message"></error-component>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ErrorComponent from '@/components/ErrorComponent'
export default {
  name: 'App',
  components: {
    ErrorComponent
  },
  computed: {
    ...mapState(['error'])
  },
  methods: {
    ...mapActions(['setError'])
  },
  watch: {
    $route () {
      this.setError({})
    }
  }
}
</script>
