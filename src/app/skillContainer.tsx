import { YoE } from "./internationalization"
import { SkillList, Skill } from "./resumeData/skills";

export interface SkillContainerProps {
    skillList: SkillList;
}

export const SkillContainer = ({ skillList }: SkillContainerProps) => {
    return (
        <div hidden={skillList.hidden}>
            <h3>{skillList.title}</h3>
            {skillList.skills.map((skill: Skill) => (
                <p key={skill.title}>{skill.title} {skill.yoe ? `(${YoE(skill.yoe)})` : ''}</p>
            ))}
        </div>
    )
}