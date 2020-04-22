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
  &-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-image: url('../assets/blob-shape.svg');
    width: 800px;
    height: 800px;
    &-links {
      margin-left: 10%;
      margin-bottom: 10%;
      z-index: 10;
      &-global {
        display: flex;
      }
      &-item {
        height: 5rem;
        a {
          text-decoration: none;
        }
        a:hover .contact-container-links-item-legend {
          display: block;
          color: $black-dark;
          text-decoration: none;
          letter-spacing: .2rem;
        }
        &-legend {
          display: none;
          transform: translate(0px,-1.5rem);
        }
        &-picto {
          background-size: cover;
          padding: 3rem;
          width: 2rem;
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
    z-index: 0;
    left: -10rem;
    bottom: 0;
    &-img {
      width: 500px;
    }
  }
}
</style>
