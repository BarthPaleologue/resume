import { IString, YoE } from "./internationalization"

export type Skill = {
    title: IString | string;
    yoe?: number;
}

export type SkillList = {
    title: IString | string;
    skills: Skill[];
    hidden?: boolean;
}

export interface SkillContainerProps {
    skillList: SkillList;
}

export const SkillContainer = ({ skillList }: SkillContainerProps) => {
    const title = skillList.title instanceof IString ? skillList.title.s : skillList.title;
    return (
        <div>
            <h3>{title}</h3>
            {skillList.skills.map((skill: Skill) => (
                <p key={skill.title instanceof IString ? skill.title.s : skill.title}>
                    {skill.title instanceof IString ? skill.title.s : skill.title}&nbsp;
                    {skill.yoe ? `(${YoE(skill.yoe)})` : ''}
                </p>
            ))}
        </div>
    )
}