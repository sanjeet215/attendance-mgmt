<template>
  <CRow>
    <CCol sm="8">
      <CCard>
        <CCardHeader class="card-header">New Organization</CCardHeader>
        <CCardBody>
          <form id="neworganization" @submit="submitForm" class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-5 mb-3">
                <label for="validationTooltip01">Organization Ref Name *</label>
                <div class="control" :class="{'form-group--error': $v.form.orgRefName.$error}">
                  <input
                    id="orgRefName"
                    class="form-control"
                    type="text"
                    placeholder="Organization Ref Name"
                    v-model="form.orgRefName"
                    @input="$v.form.orgRefName.$touch()"
                    @blur="$v.form.orgRefName.$touch()"
                    :error-messages="orgRefNameErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ orgRefNameErrors[0] }}</span>
                </div>

                <!-- <div class="error" v-if="$v.form.orgRefName.$error"> {{$v.form.orgRefName}} </div> -->
                
                <!-- <div class="error" v-if="!$v.form.orgRefName.required">Field is required</div> -->
                <!-- <div class="error" v-if="!$v.form.orgRefName.minLength">Reference Name must have at least {{$v.form.orgRefName.$params.minLength.min}} letters.</div>
                <div class="error" v-if="!$v.form.orgRefName.maxLength">Reference Name can be max {{$v.form.orgRefName.$params.maxLength.max}} letters.</div> -->
                <!-- <p
                  v-if="$v.form.orgRefName.$error"
                  class="help is-danger"
                >This orgRefName is invalid</p> -->
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
              <button class="btn btn-primary btn-submit" type="submit">Submit form</button>
              <!-- v-on:click.stop.prevent="submit" -->
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
import {
  required,
  email,
  maxLength,
  minLength,
  between
} from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";

export default {
  name: "Organizationform",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    errors: [];
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

  methods: {
    submitForm: function(e) {
      console.log("This method is invoked - submit form");
      //console.log(e.orgRefName);
    }
  },

  validations: {
    form: {
      orgRefName: {
        required,
        maxLength: maxLength(10),
        minLength: minLength(3)
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
  computed: {
    orgRefNameErrors () {
      const errors = []
      if (!this.$v.form.orgRefName.$dirty) return errors

      !this.$v.form.orgRefName.required && errors.push('orgRefName is required.')
      !this.$v.form.orgRefName.minLength && errors.push('orgRefName must be at atleast 2 characters long')
      !this.$v.form.orgRefName.maxLength && errors.push('orgRefName must be at most 10 characters long')
      
      
      console.log('this is invoked');
      console.log("Error"+ errors.length);

      for( var i =0 ;i<errors.length;i++){
        console.log(errors[i]);
      }

      return errors
    },
  }


};
</script>