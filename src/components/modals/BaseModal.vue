<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  wrapperClasses: {
    type: String,
    default: 'default-modal',
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  modalTitle: {
    type: String,
    default: 'Modal Title',
  },
})

const emit = defineEmits(['update:modelValue'])

const show = computed<boolean>({
  get() {
    return props.modelValue
  },
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>
<template>
  <teleport to="#edit-modal">
    <Transition name="modal">
      <div class="modal-wrapper" v-if="show">
        <div class="modal" :class="wrapperClasses">
          <slot name="header">
            <div class="header-wrapper">
              <p>
                {{ modalTitle }}
              </p>
              <p class="header-close" @click="show = !show">&#10006;</p>
            </div>
          </slot>
          <slot name="content" />
          <slot name="actions" />
        </div>
      </div>
    </Transition>
  </teleport>
</template>
<style scoped>
@import '@/assets/css/variables.css';

.modal-wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.default-modal {
  font-family: Helvetica;
  max-width: 500px;
  border-radius: 10px;
  height: 400px;
  background-color: white;
  overflow-y: scroll;
  margin: 50px auto 0 auto;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  border-bottom: var(--color-gray) 1px solid;
}

.header-close {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  color: white;
  background-color: red;
  padding-top: 1px;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
