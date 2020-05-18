<template>
  <div>
    <CRow>
      <CCol sm="8">
        <CCard>
          <CCardHeader class="card-header">
            <!-- <strong>Add New Organization</strong> -->
                New Organization-1
          </CCardHeader>
          <CCardBody>
            <form class="needs-validation" novalidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationTooltip01">Organization Ref Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip01"
                    placeholder="Organization Ref Id"
                    required
                  />
                  <div class="valid-tooltip">Looks good!</div>
                </div>
                <div class="col-md-8 mb-3">
                  <label for="validationTooltip02">Organization Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip02"
                    placeholder="Organization Name"
                    required
                  />
                  <div class="valid-tooltip">Looks good!</div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="validationTooltip01">Organization Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip01"
                    placeholder="Organization Description"
                    required
                  />
                  <div class="valid-tooltip">Looks good!</div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip05">Name</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="validationTooltip05"
                      placeholder="Name"
                      required
                    />
                    <div class="invalid-tooltip">Please provide a name.</div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationTooltip05">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltip05"
                    placeholder="Email"
                    required
                  />
                  <div class="invalid-tooltip">Please provide a valid Email.</div>
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
  name: "Organizationform",
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
