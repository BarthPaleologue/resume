export interface AccessLinkIconProps {
    url: string;
}

export const AccessLinkIcon = ({ url }: AccessLinkIconProps) => {
    return (
        <a target="_blank" href={url} referrerPolicy="no-referrer">
            <span className="icon access-icon"></span>
        </a>
    )
}