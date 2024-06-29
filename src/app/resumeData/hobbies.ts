/*
<p>Piano ({YoE(5)})</p>
              <p>{S({ fr: "Flûte à bec", en: "Recorder" })} ({YoE(10)})</p>
              <p>{S({ fr: "Course à pied", en: "Jogging" })}</p>
              */

import { S } from "../internationalization";

export type Hobby = {
    title: string,
    icon: string;
    yoe?: number
}

export const hobbies: Hobby[] = [
    {
        title: "Piano",
        icon: "🎹",
        yoe: 5
    },
    {
        title: S({ fr: "Flûte à bec", en: "Recorder" }),
        icon: "🪈",
        yoe: 10
    },
    {
        title: S({ fr: "Course à pied", en: "Jogging" }),
        icon: "🏃‍♂️"
    }
];