<script setup>
import { reactive, ref } from 'vue'
import { projectTypes } from '@/data/siteConfig'
import { sendContact } from '@/services/contactService'

const form = reactive({ name: '', email: '', projectType: '', message: '' })
const errors = ref({})
const status = ref('idle')
const statusMessage = ref('')
const pending = ref(false)

async function submitForm() {
  pending.value = true
  errors.value = {}
  const result = await sendContact({ ...form })
  pending.value = false
  status.value = result.status
  statusMessage.value = result.message
  errors.value = result.errors ?? {}
}
</script>

<template>
  <div
    v-if="status === 'success'"
    role="status"
    class="border-t border-foreground pt-8"
  >
    <p class="font-serif text-3xl font-light">
      {{ statusMessage }}
    </p>
    <p class="mt-3 text-muted-foreground">
      Your message has been received.
    </p>
  </div>

  <form
    v-else
    class="grid gap-8"
    novalidate
    @submit.prevent="submitForm"
  >
    <div class="grid gap-8 sm:grid-cols-2">
      <div>
        <label
          for="contact-name"
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >Name</label>
        <input
          id="contact-name"
          v-model="form.name"
          name="name"
          type="text"
          autocomplete="name"
          required
          maxlength="120"
          class="form-field"
          :aria-invalid="Boolean(errors.name)"
          :aria-describedby="errors.name ? 'contact-name-error' : undefined"
        >
        <p
          v-if="errors.name"
          id="contact-name-error"
          class="mt-2 text-sm text-destructive"
        >
          {{ errors.name }}
        </p>
      </div>
      <div>
        <label
          for="contact-email"
          class="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >Email</label>
        <input
          id="contact-email"
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          maxlength="200"
          class="form-field"
          :aria-invalid="Boolean(errors.email)"
          :aria-describedby="errors.email ? 'contact-email-error' : undefined"
        >
        <p
          v-if="errors.email"
          id="contact-email-error"
          class="mt-2 text-sm text-destructive"
        >
          {{ errors.email }}
        </p>
      </div>
    </div>

    <div>
      <label
        for="contact-type"
        class="text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >Project type</label>
      <select
        id="contact-type"
        v-model="form.projectType"
        name="projectType"
        required
        class="form-field cursor-pointer"
        :aria-invalid="Boolean(errors.projectType)"
        :aria-describedby="errors.projectType ? 'contact-type-error' : undefined"
      >
        <option
          value=""
          disabled
        >
          Select a project type
        </option>
        <option
          v-for="type in projectTypes"
          :key="type"
          :value="type"
        >
          {{ type }}
        </option>
      </select>
      <p
        v-if="errors.projectType"
        id="contact-type-error"
        class="mt-2 text-sm text-destructive"
      >
        {{ errors.projectType }}
      </p>
    </div>

    <div>
      <label
        for="contact-message"
        class="text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >Message</label>
      <textarea
        id="contact-message"
        v-model="form.message"
        name="message"
        rows="5"
        required
        maxlength="4000"
        placeholder="Tell me about your idea, date, and location."
        class="form-field resize-y"
        :aria-invalid="Boolean(errors.message)"
        :aria-describedby="errors.message ? 'contact-message-error' : undefined"
      />
      <p
        v-if="errors.message"
        id="contact-message-error"
        class="mt-2 text-sm text-destructive"
      >
        {{ errors.message }}
      </p>
    </div>

    <p
      v-if="status === 'error'"
      role="alert"
      class="text-sm text-destructive"
    >
      {{ statusMessage }}
    </p>
    <button
      type="submit"
      :disabled="pending"
      class="inline-flex items-center justify-center self-start bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background transition-opacity duration-300 hover:opacity-85 disabled:opacity-60"
    >
      {{ pending ? 'Sending…' : 'Send message' }}
    </button>
  </form>
</template>
