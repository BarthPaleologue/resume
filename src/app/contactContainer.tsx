import { you } from "./resumeData/you"
import { IS } from "./strings"

export const ContactContainer = ({ }) => {
    const compactPhoneNumber = you.phoneNumber.replace(/ /g, '');
    return (
        <section className="contact">
            <h2><span className="icon contact-icon inverted"></span>{IS.contact}</h2>
            <div>
                <p><span className="icon location-icon"></span>{you.location}</p>
                <p><span className="icon phone-icon"></span><a href={`tel:${compactPhoneNumber}`}>{you.phoneNumber}</a></p>
                <p><span className="icon portfolio-icon"></span><a href={you.onlinePortfolio} target="_blank">{IS.onlinePortfolio}</a></p>
                <p><span className="icon email-icon"></span><a href={`mailto:${you.email}`}>{you.email}</a></p>
            </div>
        </section>
    )
}