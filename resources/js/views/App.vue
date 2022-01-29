<template>
  <div id="app">
      {{ title }}
  </div>
</template>

<script>
export default {
    el: '#app',
    data: () => ({
        title: 'Hello vue',
    }),
};
</script>
