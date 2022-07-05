<script setup lang="ts">
defineProps({
  tableHeader: {
    type: String,
    required: true,
  },
  cellValue: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
</script>
<template>
  <div class="users-cell mt-10 mb-10" :data-testid="`${cellValue}-${id}`">
    <p class="users-header text-left">
      {{ tableHeader }}
    </p>
    <p class="users-info-value">
      {{ cellValue }}
    </p>
  </div>
</template>
<style scoped>
.users-header,
.users-info-value {
  font-size: 1.2em;
}

.users-header {
  min-width: 40%;
}

.users-info-value {
  font-weight: 100;
  color: blue;
}

@media screen and (min-width: 1080px) {
  .users-header {
    display: none;
  }

  .users-cell {
    display: block;
    flex-grow: 1;
    max-width: 210px;
  }

  .users-info-value {
    min-width: 200px;
    text-align: left;
  }

  .users-info-value {
    font-size: 1em;
    color: black;
  }
}
</style>
