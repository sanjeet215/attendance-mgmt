<template>
  <CRow>
    <CCol sm="8">
      <CCard>
        <CCardHeader class="card-header">New Organization</CCardHeader>
        <CCardBody>
          <form id="neworganization" @submit="checkForm" class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-5 mb-3">
                <label for="validationTooltip01">Organization Ref Name</label>
                <div class="control">
                  <input
                    id="orgRefName"
                    class="form-control"
                    :class="['input', ($v.form.orgRefName.$error) ? 'is-danger' : '']"
                    type="text"
                    placeholder="Organization Ref Name"
                    v-model="form.orgRefName"
                  />
                </div>
                <p
                  v-if="$v.form.orgRefName.$error"
                  class="help is-danger"
                >This orgRefName is invalid</p>
              </div>
              <div class="col-md-7 mb-3">
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
            </div>
            <div class="form-row">
              <div class="col-md-12 mb-3">
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
                <p
                  v-if="$v.form.description.$error"
                  class="help is-danger"
                >This Description is invalid</p>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">First Name</label>
                <div class="control">
                  <input
                    class="form-control"
                    :class="['input', ($v.form.firstName.$error) ? 'is-danger' : '']"
                    type="text"
                    placeholder="First Name"
                    v-model="form.firstName"
                  />
                </div>
                <p v-if="$v.form.firstName.$error" class="help is-danger">This firstName is invalid</p>
              </div>

              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Last Name</label>
                <div class="control">
                  <input
                    class="form-control"
                    :class="['input', ($v.form.lastName.$error) ? 'is-danger' : '']"
                    type="text"
                    placeholder="Last Name"
                    v-model="form.lastName"
                  />
                </div>
                <p v-if="$v.form.lastName.$error" class="help is-danger">This Last Name is invalid</p>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6 mb-3">
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
                <p
                  v-if="$v.form.contactNumber.$error"
                  class="help is-danger"
                >This contactNumber is invalid</p>
              </div>
              <div class="col-md-6 mb-3">
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
                <p
                  v-if="$v.form.contactEmail.$error"
                  class="help is-danger"
                >This contactEmail is invalid</p>
              </div>
            </div>
            <div>
              <button class="btn btn-primary btn-submit" type="submit" :disabled='isDisabled'>Submit form</button>
            </div>
          </form>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>

  <!-- </div> -->
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";

export default {
  name: "Organizationform",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    errors:[];
    return {
      form: {
        orgRefName: "",
        orgName: "",
        contactNumber: "",
        contactEmail: "",
        description: "",
        firstName: "",
        lastName: "",
        isDisabled: true
      }
    };
  },
  //   data: {
  //   errors:[],
  //   orgRefName: "",
  //   orgName: "",
  //   contactNumber: "",
  //   contactEmail: "",
  //   description: "",
  //   firstName: "",
  //   lastName: ""
  // },

  methods : {
    checkForm:function(e){
        console.log('This method is invoked');

        console.log(this.form.orgRefName);
        this.errors = [];

        // if(this.orgRefName && this.orgRefName !== ''){
        //     this.errors.push('organization reference name is required');
        //     console.log('Error occured');
        // }
           

        this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this

      e.preventDefault();
    }
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
      contactNumber: {
        required
      },
      firstName: {
        required
      },
      lastName: {
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
  },

  computed: {
      isDisabled: function(){
          return false;        
      }
  }
};
</script>
