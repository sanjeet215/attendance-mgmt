<template>
  <CRow>
    <CCol sm="10">
      <CCardBody>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-3 mb-3"></div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">Organization Ref Name</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.orgRefName.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Organization Ref Name"
                  v-model="form.orgRefName"
                />
              </div>
              <p v-if="$v.form.orgRefName.$error" class="help is-danger">This orgRefName is invalid</p>
            </div>
            <div class="col-md-5 mb-3">
              <label for="validationTooltip01">Organization Name</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.orgName.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Organization Name"
                  v-model="form.orgName"
                />
              </div>
              <p v-if="$v.form.orgName.$error" class="help is-danger">This orgName is invalid</p>
            </div>
            <div class="col-md-1 mb-3"></div>
          </div>
          <div class="form-row">
            <div class="col-md-3 mb-3"></div>

            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">Moderator Name</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.contactName.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Moderator Name"
                  v-model="form.contactName"
                />
              </div>
              <p v-if="$v.form.contactName.$error" class="help is-danger">This contactName is invalid</p>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">Email Id</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.contactEmail.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Email Id"
                  v-model="form.contactEmail"
                />
              </div>
              <p v-if="$v.form.contactEmail.$error" class="help is-danger">This contactEmail is invalid</p>
            </div>
            <div class="col-md-1 mb-3"></div>
          </div>

          <div class="form-row">
            <div class="col-md-3 mb-3"></div>
            <div class="col-md-8 mb-3">
              <label for="validationTooltip01">Contact Number</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.contactNumber.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Contact Number"
                  v-model="form.contactNumber"
                />
              </div>
              <p v-if="$v.form.contactNumber.$error" class="help is-danger">This contactNumber is invalid</p>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-3 mb-3"></div>
            <div class="col-md-8 mb-3">
              <label for="validationTooltip01">Description</label>
              <div class="control">
                <input
                  class="form-control"
                  :class="['input', ($v.form.description.$error) ? 'is-danger' : '']"
                  type="text"
                  placeholder="Description"
                  v-model="form.description"
                />
              </div>
              <p v-if="$v.form.description.$error" class="help is-danger">This Description is invalid</p>
            </div>
          </div>

          <!-- <div class="field"> -->
          <!-- <div class="form-row">
            <label for="validationTooltip01">Organization Ref Id</label>
            <div class="control">
              <input class="form-control"
                :class="['input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"
                type="text"
                placeholder="Email input"
                v-model="form.demoEmail"
              />
            </div>
            <p v-if="$v.form.demoEmail.$error" class="help is-danger">This email is invalid</p>
          </div>-->
          <!-- <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                :class="['textarea', ($v.form.message.$error) ? 'is-danger' : '']"
                placeholder="Textarea"
                v-model="form.message"
              ></textarea>
            </div>
          </div>-->
        </form>
      </CCardBody>
    </CCol>
  </CRow>

  <!-- </div> -->
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Organizationform",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        orgRefName: "",
        orgName: "",
        contactName: "",
        contactNumber: "",
        contactEmail: "",
        description: ""
      }
    };
  },
  validations: {
    form: {
      orgRefName: {
        required
      },
      orgName: {
        required
      },
      contactEmail: {
        required,
        email
      },
      description: {
        required
      },
      contactName: {
        required
      },
      contactNumber: {
        required
      }
    }
  },
  watch: {
    $v: {
      handler: function(val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
        }
      },
      deep: true
    },
    clickedNext(val) {
      if (val === true) {
        this.$v.form.$touch();
      }
    }
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  }
};
</script>
