

import { jsonToIconObject } from '../helper/iconMap';
const Skill =({title_skill , icon})=>{
   const icon_skill = jsonToIconObject(icon);
    return <>
       <div className="col-12 col-md-2">
            <div className="skill-icon">
                <div className="skill-icon">
                    <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        fill="currentColor"
                        className="text-red-600"
                    >
                    <path d={icon_skill.path} />
                    </svg>
                </div>
            </div>
            <div className="tech-name">
               { title_skill}
            </div>
        </div>
    </>
}

export default Skill