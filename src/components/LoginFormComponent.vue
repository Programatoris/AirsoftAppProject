<template>
  <div class="login-container">
    <h1>Get Started</h1>
    <form class="login-form">
      <h2 class="form-title">Login</h2>

      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
      </div>

      <button type="submit" class="login-button">Login</button>
      <p class="register-link">Don't have an account? <a href="#">Register here</a></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped>
/* General container styles */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  margin-bottom: 200px;
}

/* Form styles */
.login-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 600px;
  text-align: center;
  margin-top: 0;
}

.form-title {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

/* Form group styles */
.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

/* Input styles */
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #fcd34d;
  box-shadow: 0 0 4px rgba(252, 211, 77, 0.5);
}

/* Button styles */
.login-button {
  width: 100%;
  padding: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: darkorange;
}

/* Register link styles */
.register-link {
  margin-top: 15px;
  font-size: 14px;
}

.register-link a {
  color: orange;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>