<template>
  <div class="contact">
    <div class="contact-container">
      <div class="contact-container-links">
        <h2>
          {{ $t("message-" + hover) }}
        </h2>
        <div class="contact-container-links-global">
          <div
            @mouseover="hover = 'mail'"
            @mouseleave="hover = ''"
            class="contact-container-links-item">
              <a href="mailto:hello@annadev.com?subject=Contact">
                <img class="contact-container-links-item-picto contact-container-links-item-picto-mail" src="../assets/telegram.png" alt="">
                <div class="contact-container-links-item-legend">
                  {{ $t('email') }}
                </div>
              </a>
          </div>
          <div @mouseover="hover = 'cv'"
          @mouseleave="hover = ''" class="contact-container-links-item">
            <a href="https://drive.google.com/open?id=1OOknn6oFbzbXnMPZTd4ZRVKGYMGw-ktB" target="_blank">
              <img class="contact-container-links-item-picto contact-container-links-item-picto-cv" src="../assets/resume.png" alt="">
              <div class="contact-container-links-item-legend">
                {{ $t('cv') }}
              </div>
            </a>
          </div>
          <div @mouseover="hover = 'linkedin'"
          @mouseleave="hover = ''"  class="contact-container-links-item">
            <a href="https://www.linkedin.com/in/apellier/" target="_blank">
              <img class="contact-container-links-item-picto contact-container-links-item-picto-linkedin" src="../assets/linkedin.png" alt="">
              <div class="contact-container-links-item-legend">
                {{ $t('linkedin') }}
              </div>
            </a>
          </div>
          <div @mouseover="hover = 'github'"
          @mouseleave="hover = ''"  class="contact-container-links-item">
            <a href="https://github.com/annabplr" target="_blank">
              <img class="contact-container-links-item-picto contact-container-links-item-picto-github" src="../assets/github-image.png" alt="">
              <div class="contact-container-links-item-legend">
                {{ $t('github') }}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="contact-image">
        <img class="contact-image-img" alt="octocat picture" src="../assets/octocat.png">
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "fr": {
    "message-": "et si on travaillait ensemble ?",
    "email": "e-mail",
    "linkedin": "linkedin",
    "cv": "CV",
    "github": "github",
    "message-mail": "et si vous m'envoyiez un e-mail ?",
    "message-linkedin": "et si vous jetiez un oeil à mon profil linkedin ?",
    "message-github": "et si vous regardiez mon profil github ?",
    "message-cv": "et si vous téléchargiez mon cv ?"
  },
  "en": {
    "message-": "Let's work together !",
    "email": "e-mail",
    "linkedin": "linkedin",
    "cv": "resume",
    "github": "github",
    "message-mail": "send me an e-mail",
    "message-linkedin": "check my linkedin profile",
    "message-github": "have a look at my github page",
    "message-cv": "download my resume"
  }
}
</i18n>


<script>
export default {
  name: 'Contact',
  data: function() {
    return {
      hover: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/_variables.scss";
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width:767px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  &-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-image: url('../assets/blob-shape.svg');
    width: 800px;
    height: 800px;
    @media(max-width:767px) {
      width: 98%;
      height: auto;
      margin-bottom: 20%;
    }
    @media(max-width:767px) {
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    &-links {
      margin-left: 10%;
      margin-bottom: 10%;
      z-index: 10;
      @media(max-width:767px) {
        margin-left: -5%;
        margin-bottom: 20%;
      }
      h2 {
        @media(max-width:420px){
          font-size: 1.25rem;
          margin-bottom: .5rem;
        }
      }
      &-global {
        display: flex;
      }
      &-item {
        height: 5rem;
        @media(max-width:767px) {
          height: 2rem;
        }
        a {
          text-decoration: none;
        }
        a:hover .contact-container-links-item-legend {
          display: block;
        }
        &-legend {
          display: none;
          color: $black-dark;
          text-decoration: none;
          letter-spacing: .2rem;
          transform: translate(0px,-1.5rem);
          @media(max-width:767px) {
            padding-top: .5rem;
            letter-spacing: .1rem;
            font-size: .75rem;
            opacity: .5;
            display: block;
          }
        }
        &-picto {
          background-size: cover;
          padding: 3rem;
          width: 2rem;
          @media(min-width:421px) and (max-width:767px) {
            padding: 2rem;
            width: 1.5rem;
          }
          @media(max-width:420px){
            padding: 1.5rem;
            width: 1rem;
          }
          &-mail {
            background-image: url('../assets/blob-shape-1.svg');
          }
          &-github {
            background-image: url('../assets/blob-shape-2.svg');
          }
          &-linkedin {
            background-image: url('../assets/blob-shape-3.svg');
          }
          &-cv {
            background-image: url('../assets/blob-shape-4.svg');
          }
        }
      }
    }
  }
  &-image {
    position: absolute;
    pointer-events: none;
    z-index: 0;
    left: -10rem;
    bottom: 0;
    @media(min-width:421px) and (max-width:767px) {
      left: auto;
      bottom: -30%;
      right: -30%;
    }
    @media(max-width:420px){
      left: auto;
      bottom: -40%;
      right: -30%;
    }
    &-img {
      width: 500px;
      @media(max-width:767px) {
        width: 60%;
      }
    }
  }
}
</style>
