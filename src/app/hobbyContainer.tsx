import { YoE } from "./internationalization";
import { Hobby, hobbies } from "./resumeData/hobbies";
import { IS } from "./strings";

interface HobbyContainerProps {
    hobby: Hobby
}

export const HobbyContainer = ({ hobby }: HobbyContainerProps) => {
    return (
        <p key={hobby.title}>{hobby.icon} {hobby.title} {hobby.yoe ? `(${YoE(hobby.yoe)})` : ''}</p>
    )
}

export const Hobbies = ({ }) => {
    return (
        <section>
            <h2><span className="icon hobby-icon inverted"></span>{IS.hobbies}</h2>
            <div>
                {hobbies.map((hobby) => (<HobbyContainer key={hobby.title} hobby={hobby} />))}
            </div>
        </section>
    )
}