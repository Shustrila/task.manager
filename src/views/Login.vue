<template>
  <div class="login-page">
    <form class="login-page__form" action="">
      <label class="login-page__form-label">
        <input class="login-page__form-field" type="email" name="email">
      </label>
      <label class="login-page__form-label">
        <input class="login-page__form-field" type="password" name="password">
      </label>
      <input type="submit" value="регистрация">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
  .login-page{
    &__form{
      display: flex;
      width: 300px;
      margin: auto;
      margin-top: 150px;
      background-color: #42b983;

      &-label{
        width: 100%;
      }
      &-field{
        flex-basis: 100%;
      }
    }
  }
</style>
