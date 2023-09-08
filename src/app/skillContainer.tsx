import { YoE } from "./internationalization"
import { SkillList, Skill, skills } from "./resumeData/skills";
import { IS } from "./strings";

export interface SkillContainerProps {
    skillList: SkillList;
}

export const SkillContainer = ({ skillList }: SkillContainerProps) => {
    return (
        <div hidden={skillList.hidden}>
            <h3>{skillList.title}</h3>
            {skillList.skills.map((skill: Skill) => (
                <p key={skill.title} hidden={skill.hidden}>{skill.title} {skill.yoe ? `(${YoE(skill.yoe)})` : ''}</p>
            ))}
        </div>
    )
}

export const Skills = ({}) => {
    return (
        <section>
            <h2><span className="icon skill-icon inverted"></span>{IS.skills}</h2>
            {skills.map((skillList) => (<SkillContainer key={skillList.title} skillList={skillList} />))}
        </section>
    )
}