// iconMap.js
/* import { 
    faPhp ,
     faJava ,
      faLaravel , 
    faReact,
    faHtml5,faCss ,
     faJs , faBootstrap,faGit,
     faDocker,

    } from '@fortawesome/free-brands-svg-icons'; */

/* export const iconMap = {
  html: faHtml5,
  css:faCss,
  javascript:faJs,
  bootstrap:faBootstrap,
  reactjs:faReact,
}; */

/* FRENT-END */
import { siHtml5 , siCss, siBootstrap , siJavascript , siReact } from 'simple-icons/icons'
/* DATABASES */
import { siMysql,siPostgresql} from 'simple-icons/icons'
/* BACK-END*/
import { siSpring, siPhp , siLaravel} from 'simple-icons/icons'
/* TOOLS */
import { siGithub ,siPostman ,siSwagger,siDocker } from 'simple-icons/icons'

/* FOLLOW */
import { siInstagram , siWhatsapp , siFacebook , siInspire} from 'simple-icons/icons'




export const iconMap = {
    /* FRENT-END */
  html:siHtml5,
  css:siCss,
  javascript:siJavascript,
  bootstrap:siBootstrap,
  reactjs:siReact,
  /* DATABASES*/
  mysql:siMysql,
  sqlserver:siHtml5,
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
