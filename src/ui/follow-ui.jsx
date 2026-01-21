import { jsonToIconObject } from "../helper/iconMap";

const FollowUi=({linkUrl , iconMed})=>{
    const icon = jsonToIconObject(iconMed);

    return <>
            <li>
                <a href={linkUrl} target="_blank">
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-red-600 follow-style"
                    >
                    <path d={icon.path} />
                    </svg>
                </a>
            </li>
    
    </>

}

export default FollowUi