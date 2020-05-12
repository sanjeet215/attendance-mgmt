<template>
  <div>
    <h2>Create Your Account</h2>
    <input class="form__input" type="text" placeholder="Email" v-model.trim="$v.email.$model" />
    <div class="form__error" v-if="!$v.email.required">*This field is required.</div>
    <input class="form__input" type="text" placeholder="Username" v-model.trim="$v.username.$model" />
    <div class="form__error" v-if="!$v.username.required">*This field is required.</div>
    <div class="form__error" v-if="!$v.username.minLength">*Username must be at least 4 characters</div>
    <div class="form__error" v-if="!$v.username.maxLength">*Username must be 12 characters or less</div>
    <div
      class="form__error"
      v-if="!$v.username.alphaNum"
    >*Username must be alphanumberic with no whitespace</div>
    <input class="form__input" type="password" placeholder="Password" />
    <input class="form__input" type="password" placeholder="Confirm Password" />
    <div class="form__submit" @click="submitForm">Submit</div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alphaNum,
  email,
  sameAs
} from "vuelidate/lib/validators";

export default {
  name: "Adduserform",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(12),
      alphaNum
    },
    password: {
      required
    },
    confirmPassword: {
      required
    }
  },
  methods: {
    submitForm() {
      if (!this.$v.$anyError) {
        // actually submit form ...
        alert("Form submitted");
      } else {
        alert("Please fix errors and try again.");
      }
    }
  }
};
</script>


<style scoped>
.form__input {
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  font-size: 1em;
  padding: 5px;
  display: block;
  margin: 10px 0 5px 0;
}

.form__error {
  color: red;
  font-size: 0.75em;
  padding-left: 10px;
}

.form__submit {
  background-color: #0033cc;
  display: inline-block;
  color: white;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  margin-top: 30px;
}
</style>