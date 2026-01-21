

import {
          /* FRENT-END */
      siHtml5 , siCss, siBootstrap , siJavascript , siReact,
           /*DATABASES */
      siMysql,siPostgresql ,siScala,
           /* BACK-END*/
      siSpring, siPhp , siLaravel,
            /* TOOLS */
      siGithub ,siPostman ,siSwagger,siDocker,
             /* FOLLOW */
      siInstagram , siWhatsapp , siFacebook , siInspire
      
 } from 'simple-icons'


export const iconMap = {
    /* FRENT-END */
  html:siHtml5,
  css:siCss,
  javascript:siJavascript,
  bootstrap:siBootstrap,
  reactjs:siReact,
  /* DATABASES*/
  mysql:siMysql,
  sqlserver:siScala,
  postgrelsql:siPostgresql,
  /* TOOLS */
  git:siGithub,
  resetapi:siSwagger,
  postman:siPostman,
  docker:siDocker,
  /* BACK-END */
  php:siPhp,
  java:siSpring,
  laravel:siLaravel,

  /* FOLLOW */
  linkdin:siInspire,
  instargam:siInstagram,
  whatsapp:siWhatsapp,
  facebook:siFacebook
};

export const jsonToIconObject = (jsonIcon) => {
  return iconMap[jsonIcon] ?? "";
};
