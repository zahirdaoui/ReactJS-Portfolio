

import {
          /* FRENT-END */
      siHtml5 , siCss, siBootstrap , siJavascript , siReact,siTailwindcss,
           /*DATABASES */
      siMysql,siPostgresql ,siScala,siDolphin,
           /* BACK-END*/
      siSpring, siPhp , siLaravel,siSpringboot,siSpringsecurity,
            /* TOOLS */
      siGithub ,siPostman ,siSwagger,siDocker,siJson,
             /* FOLLOW */
      siInstagram , siWhatsapp , siFacebook , siInspire,
      siMongodb
      
 } from 'simple-icons'


export const iconMap = {
    /* FRENT-END */
  html:siHtml5,
  css:siCss,
  javascript:siJavascript,
  bootstrap:siBootstrap,
  tailwind:siTailwindcss,
  reactjs:siReact,
  /* DATABASES*/
  mysql:siDolphin,
  sqlserver:siScala,
  postgrelsql:siPostgresql,
  mongodb:siMongodb,
  /* TOOLS */
  git:siGithub,
  resetapi:siSwagger,
  postman:siPostman,
  docker:siDocker,
  json:siJson,
  /* BACK-END */
  php:siPhp,
  java:siSpring,
  laravel:siLaravel,
  springboot:siSpringboot,
  springsecurity:siSpringsecurity,

  /* FOLLOW */
  linkdin:siInspire,
  instargam:siInstagram,
  whatsapp:siWhatsapp,
  facebook:siFacebook
};

export const jsonToIconObject = (jsonIcon) => {
  return iconMap[jsonIcon] ?? "";
};
