<template>
  <v-app :theme="themeName">
    <v-main>
      <template v-if="!!$slots['story']">
        <slot name="story"></slot>
      </template>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    console.log(5555555);
    console.log(this.$slots);
  },
  props: {
    themeName: String,
  },
  watch: {
    themeName: function (newThemeName, oldThemeName) {
      // Logique à exécuter lorsque props.themeName change
      console.log('props.themeName a changé de', oldThemeName, 'à', newThemeName);

      // Autres actions à entreprendre...
    },
  },
};
</script>
