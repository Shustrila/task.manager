<template>
    <header class="header">
        <router-link class="header__logo" to="/">
          <font-awesome-icon icon="code" />
          task.manager
        </router-link>
        <div class="header__auth">
            <router-link class="header__auth-login" to="/login">
              <font-awesome-icon class="header__auth-icon" icon="sign-in-alt" />login
            </router-link>
            <router-link class="header__auth-registration" to="/registration">
                registration
            </router-link>
        </div>
    </header>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
  beforeMount () {
    library.add(faCode, faSignInAlt)
  }
}
</script>

<style lang="scss">
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background-color: #42b983;

    &__logo{
        flex-grow: 1;
        text-decoration: none;
        text-align: left;
        font-size: 30px;
        color: #ffffff;
    }

    &__auth{
      display: flex;
      &-icon{
        margin-right: 10px;
      }
      &-login{
        margin-right: 10px;
        font-size: 20px;
        color: #ffffff;
        text-decoration: none;
      }
      &-login:hover{
        color: #333333;
      }
      &-registration{
        font-size: 20px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
</style>
