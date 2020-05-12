<template>
  <div>
    <CRow>
      <CCol sm="8">
        <CCard>
          <CCardHeader>
            <strong>Address Form</strong>        
          </CCardHeader>
          <CCardBody>
            <form class="needs-validation" novalidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationTooltip01">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip01"
                    placeholder="First name"
                    required
                  />
                  <div class="valid-tooltip">Looks good!</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationTooltip02">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip02"
                    placeholder="Last name"
                    required
                  />
                  <div class="valid-tooltip">Looks good!</div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="validationTooltipUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltipUsername"
                      placeholder="Username"
                      aria-describedby="validationTooltipUsernamePrepend"
                      required
                    />
                    <div class="invalid-tooltip">Please choose a unique and valid username.</div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip03">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip03"
                    placeholder="City"
                    required
                  />
                  <div class="invalid-tooltip">Please provide a valid city.</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationTooltip04">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip04"
                    placeholder="State"
                    required
                  />
                  <div class="invalid-tooltip">Please provide a valid state.</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationTooltip05">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip05"
                    placeholder="Zip"
                    required
                  />
                  <div class="invalid-tooltip">Please provide a valid zip.</div>
                </div>
              </div>
              <button class="btn btn-primary btn-submit" type="submit">Submit form</button>
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "Addressform",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label: "col-3", input: "col-9" },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: ["some value", "another value"],
          label: "Selected option"
        }
      ],
      selectedOption: ["some value", "another value"],

      formCollapsed: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom"
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom"
      ]
    };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    }
  }
};
</script>
