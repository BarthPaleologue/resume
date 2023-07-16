export interface AccessLinkIconProps {
    url: string;
    inverted?: boolean;
}

export const AccessLinkIcon = ({ url, inverted }: AccessLinkIconProps) => {
    const className = 'icon access-icon' + (inverted ? ' inverted' : '');
    return (
        <a target="_blank" href={url} referrerPolicy="no-referrer">
            <span className={className}></span>
        </a>
    )
}