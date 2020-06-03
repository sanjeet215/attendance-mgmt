<template>
  <CRow>
    <CCol sm="8">
      <CCard>
        <CCardHeader class="card-header">New Organization1</CCardHeader>
        <CCardBody>
          <form
            id="neworganization"
            v-on:submit.prevent="onSubmit"
            class="needs-validation"
            novalidate
          >
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
              </div>
              <div class="col-md-7 mb-3">
                <label for="validationTooltip01">Organization Name *</label>
                <div class="control" :class="{'form-group--error': $v.form.orgName.$error}">
                  <input
                    id="orgName"
                    class="form-control"
                    type="text"
                    placeholder="Organization Name"
                    v-model="form.orgName"
                    @input="$v.form.orgName.$touch()"
                    @blur="$v.form.orgName.$touch()"
                    :error-messages="orgNameErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ orgNameErrors[0] }}</span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-12 mb-3">
                <label for="validationTooltip01">Description</label>
                <div class="control" :class="{'form-group--error': $v.form.description.$error}">
                  <input
                    id="description"
                    class="form-control"
                    type="text"
                    placeholder="Description"
                    v-model="form.description"
                    @input="$v.form.description.$touch()"
                    @blur="$v.form.description.$touch()"
                    :error-messages="descriptionErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ descriptionErrors[0] }}</span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">First Name *</label>
                <div class="control" :class="{'form-group--error': $v.form.firstName.$error}">
                  <input
                    id="firstName"
                    class="form-control"
                    type="text"
                    placeholder="First Name"
                    v-model="form.firstName"
                    @input="$v.form.firstName.$touch()"
                    @blur="$v.form.firstName.$touch()"
                    :error-messages="firstNameErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ firstNameErrors[0] }}</span>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Last Name *</label>
                <div class="control" :class="{'form-group--error': $v.form.lastName.$error}">
                  <input
                    id="lastName"
                    class="form-control"
                    type="text"
                    placeholder="Last Name"
                    v-model="form.lastName"
                    @input="$v.form.lastName.$touch()"
                    @blur="$v.form.lastName.$touch()"
                    :error-messages="lastNameErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ lastNameErrors[0] }}</span>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Contact Number *</label>
                <div class="control" :class="{'form-group--error': $v.form.contactNumber.$error}">
                  <input
                    id="contactNumber"
                    class="form-control"
                    type="text"
                    placeholder="Contact Number"
                    v-model="form.contactNumber"
                    @input="$v.form.contactNumber.$touch()"
                    @blur="$v.form.contactNumber.$touch()"
                    :error-messages="contactNumberErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ contactNumberErrors[0] }}</span>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationTooltip01">Contact Email *</label>
                <div class="control" :class="{'form-group--error': $v.form.contactEmail.$error}">
                  <input
                    id="contactEmail"
                    class="form-control"
                    type="text"
                    placeholder="Contact Email"
                    v-model="form.contactEmail"
                    @input="$v.form.contactEmail.$touch()"
                    @blur="$v.form.contactEmail.$touch()"
                    :error-messages="contactEmailErrors"
                  />
                </div>
                <div class="error">
                  <span>{{ contactEmailErrors[0] }}</span>
                </div>
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
    <CCol>
      <!-- <CCard>
        <CCardHeader class="card-header">Upload Multiple</CCardHeader>
        <CCardBody class="card-body">
          <div class="form-row">
            <CInputFile horizontal custom />
          </div>
        </CCardBody>
      </CCard> -->
      <OrganizationFileUpload />
    </CCol>
  </CRow>

  <!-- </div> -->
</template>

<script>
//import { orgService } from "../_services/organization.service";
import OrganizationFormService from "../service/OrganizationFormService";

import { validationMixin } from "vuelidate";
import {
  required,
  email,
  maxLength,
  minLength,
  between
} from "vuelidate/lib/validators";
import Vuelidate from "vuelidate";
import OrganizationFileUpload from "./OrganizationFileUpload"


export default {
  name: "Organizationform",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  components: {
    OrganizationFileUpload
  },
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

  methods: {
    // submitForm: function(e) {
    //   console.log('FOrm started');
    //   //this.validateOrgRefId();
    //   this.service.validateOrgRefId();
    //   console.log("This method is invoked - submit form");
    //   //console.log(e.orgRefName);

    // },
    onSubmit() {

      console.log("FOrm started" + this.$v);

      if(!this.$v.form.$touch()){
        console.log('Form not submitted');
        return;
      }

      console.log('my analytics components --> Reaading data from store ------>'+ this.$store.state.token);
      console.log("Form submitted");
    },

    checkUniqueOrg(orgRefName) {
      OrganizationFormService.validate(orgRefName);

      if (orgRefName === "asiczen") {
        return false;
      } else {
        return true;
      }
    },

    haveSpecialChar(inputData) {
      const regex = /^[A-Za-z0-9 ]+$/;
      var isValid = regex.test(inputData);

      if (isValid) {
        return true;
      } else {
        return false;
      }
    },

    isContactNumberValid(inputData) {
      const regex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
      var isValid = regex.test(inputData);

      if (isValid) {
        return true;
      } else {
        return false;
      }
    },

    isEmailidUnique(emailid) {
      if (emailid === "sanjeet.mohanty@db.com") {
        return true;
      } else {
        return false;
      }
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
        required,
        maxLength: maxLength(50),
        minLength: minLength(3)
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
        required,
        maxLength: maxLength(16),
        minLength: minLength(1)
      },
      lastName: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(1)
      }
    }
  },
  computed: {
    orgRefNameErrors() {
      const errors = [];
      if (!this.$v.form.orgRefName.$dirty) return errors;

      !this.$v.form.orgRefName.required &&
        errors.push("orgRefName is required.");
      !this.$v.form.orgRefName.minLength &&
        errors.push("orgRefName must be at atleast 2 characters long");
      !this.$v.form.orgRefName.maxLength &&
        errors.push("orgRefName must be at most 10 characters long");

      console.log("this is invoked");
      console.log("Error" + errors.length);

      console.log("Testing testing " + this.form.orgRefName);

      if (errors.length === 0) {
        if (!this.checkUniqueOrg(this.form.orgRefName)) {
          errors.push("id is already taken!");
        }
      }

      return errors;
    },
    orgNameErrors() {
      const errors = [];
      if (!this.$v.form.orgName.$dirty) return errors;

      !this.$v.form.orgName.required && errors.push("orgName is required.");
      !this.$v.form.orgName.minLength &&
        errors.push("orgName must be at atleast 2 characters long");
      !this.$v.form.orgName.maxLength &&
        errors.push("orgName must be at most 10 characters long");

      console.log("this is invoked");
      console.log("Error" + errors.length);
      console.log("Testing testing " + this.form.orgName);

      return errors;
    },

    descriptionErrors() {
      const errors = [];

      if (!this.$v.form.description.$dirty) return errors;

      if (!this.haveSpecialChar(this.form.description)) {
        errors.push("Special Characters such as @,#,$ not allowed.");
      }

      return errors;
    },

    firstNameErrors() {
      const errors = [];
      if (!this.$v.form.firstName.$dirty) return errors;

      !this.$v.form.firstName.required &&
        errors.push("First Name is required.");

      if (!this.haveSpecialChar(this.form.firstName)) {
        errors.push("Special Characters such as @,#,$ not allowed.");
      }

      !this.$v.form.firstName.minLength &&
        errors.push("First Name must be at atleast 1 character long");
      !this.$v.form.firstName.maxLength &&
        errors.push("First Name must be at most 16 characters long");

      return errors;
    },

    lastNameErrors() {
      const errors = [];
      if (!this.$v.form.lastName.$dirty) return errors;

      !this.$v.form.lastName.required && errors.push("Last Name is required.");

      if (!this.haveSpecialChar(this.form.lastName)) {
        errors.push("Special Characters such as @,#,$ not allowed.");
      }

      !this.$v.form.lastName.minLength &&
        errors.push("Last Name must be at atleast 1 character long");
      !this.$v.form.lastName.maxLength &&
        errors.push("Last Name must be at most 16 characters long");

      return errors;
    },

    contactNumberErrors() {
      const errors = [];

      if (!this.$v.form.contactNumber.$dirty) return errors;

      !this.$v.form.contactNumber.required &&
        errors.push("Contact Number is required.");

      if (!this.isContactNumberValid(this.form.contactNumber)) {
        errors.push("Please enter a valid contact number");
      }

      return errors;
    },

    contactEmailErrors() {
      const errors = [];

      if (!this.$v.form.contactEmail.$dirty) return errors;

      !this.$v.form.contactEmail.required &&
        errors.push("Email Id is a required field!");

      !this.$v.form.contactEmail.email &&
        errors.push("Please enter a valid email id!");

      if (errors.length === 0) {
        if (this.isEmailidUnique(this.form.contactEmail)) {
          errors.push("Email Id already taken!");
        } else {
        }
      }

      return errors;
    }
  }
};
</script>