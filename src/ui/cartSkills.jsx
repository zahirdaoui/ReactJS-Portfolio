import Skill from "./skill"
const CartSkills = ({title , skill})=>{
       
       return <>
        <div className="skill-card">
            <div className="card-header">{title}</div>
            <div className="row g-4 justify-content-center justify-content-evenly">
                {Object.values(skill).map(element => {
                   return <Skill key={element.id} title_skill={element.title_skill} icon={element.logo}/>
                })} 
            </div>
        </div>
    </>
}
export default CartSkills