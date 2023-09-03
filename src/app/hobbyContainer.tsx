import { YoE } from "./internationalization";
import { Hobby } from "./resumeData/hobbies";

interface HobbyContainerProps {
    hobby: Hobby
}

export const HobbyContainer = ({ hobby }: HobbyContainerProps) => {
    return (
        <p key={hobby.title}>{hobby.title} {hobby.yoe ? `(${YoE(hobby.yoe)})` : ''}</p>
    )
}