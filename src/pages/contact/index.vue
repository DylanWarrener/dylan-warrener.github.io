<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Contact</h1>
    <v-row align="start" dense>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Direct Contact Information</v-card-title>
          <v-card-text class="d-flex flex-column gap-2">
            <div>
              <strong>Email:</strong>
              <a href="mailto:dqyqlqaqn@gmail.com">dqyqlqaqn@gmail.com</a>
            </div>
            <div><strong>Location:</strong> United Kingdom</div>
            <div>
              <strong>Chat:</strong>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener"
                aria-label="Chat with WhatsApp"
                >WhatsApp</a
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Contact Form</v-card-title>
          <v-card-text>
            <v-form ref="formRef" v-model="valid" @submit.prevent="submit">
              <v-text-field
                v-model="form.name"
                label="Name"
                :rules="[rules.required]"
                required />
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
                required />
              <v-text-field
                v-model="form.company"
                label="Company/Organization" />
              <v-select
                v-model="form.subject"
                label="Subject"
                :items="subjects"
                clearable />
              <v-textarea
                v-model="form.message"
                label="Message"
                :rules="[rules.required]"
                required />
              <div class="text-right">
                <v-btn type="submit" color="primary">Send Message</v-btn>
              </div>
            </v-form>
            <v-alert
              v-if="sent"
              type="success"
              class="mt-4"
              border="start"
              variant="tonal">
              Thank you for reaching out!
            </v-alert>
            <v-alert
              v-if="error"
              type="error"
              class="mt-4"
              border="start"
              variant="tonal">
              Something went wrong. Please try again later.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import type { VForm } from "vuetify/components"

definePageMeta({
  alias: ["/contact"],
})

const form = ref({
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
})

const subjects = ["Support", "Collaboration", "Job Inquiry"]

const rules = {
  required: (v: string) => !!v || "Required",
  email: (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
}

const valid = ref(false)
const sent = ref(false)
const error = ref(false)
const formRef = ref<VForm | null>(null)

async function submit() {
  if (!formRef.value) return
  const isValid = await formRef.value.validate()
  if (!isValid) return

  try {
    await useFetch("/api/contact", {
      method: "POST",
      body: form.value,
    })

    sent.value = true
    error.value = false
    formRef.value.reset()
    formRef.value.resetValidation()
    valid.value = false
  } catch (e) {
    error.value = true
  }
}
</script>

<style scoped></style>
