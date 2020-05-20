<template>
  <!-- <div v-show="submitted && !username" class="invalid-feedback">Username is required</div> -->
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            <!-- <form @submit="handleSubmit"> -->
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                id="username"
                type="text"
                v-model="username"
                placeholder="username"
                class="form-control"
                :class="{ 'is-invalid': submitted && !username }"
              />
              <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>

            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && !password }"
              />
              <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <!-- <div class="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>-->
            <div class="form-group">
              <input
                type="submit"
                value="Login"
                class="btn float-right login_btn"
                :disabled="status.loggingIn"
              />
              <img
                v-show="status.loggingIn"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?
            <a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { userService } from "../../_services/user.service";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        //this.test();
        this.login({ username, password });
      }
    }
  }
};
</script>
 <style lang="scss">
body {
  //background-size: cover;
  //background-color: #0077B6;
  font-family: "Numans", sans-serif;
  background-image: url("https://i2.wp.com/colorpalette.org/wp-content/palette/sky_blue_daytime_colorpalette_pr1r6.jpg?q=100");
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  height: 100%;
  align-content: center;
  margin-top: 10%;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 350px;
  //background-color: #fcfcfc !important;
  background: transparent;
  border: none;
}

.card-header {
  background: transparent;
}

.card-footer {
  background: transparent;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #03045E;
}

.social_icon span:hover {
  color: #90E0EF;
  cursor: pointer;
}

.card-header h3 {
  color: #03045E;
  background: transparent;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #03045E;
  color: white;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: #03045E;;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: white;
  background-color: #03045E;
  width: 100px;
}

.login_btn:hover {
  color: #03045E;;
  background-color: #90E0EF;
}

.links {
  color: #03045E;
}

.links a {
  margin-left: 4px;
}
</style>