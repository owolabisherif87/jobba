<script setup lang="ts">
const props = defineProps<{
  alertType: string;
  message: string;
}>();
</script>

<template>
  <div
    :class="`alert alert-${props.alertType} alert-dismissible fade show`"
    role="alert"
  >
    {{ message }}
  </div>
</template>
