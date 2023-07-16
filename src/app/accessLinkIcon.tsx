export interface AccessLinkIconProps {
    url: string;
    inverted?: boolean;
    title?: string;
}

export const AccessLinkIcon = ({ url, inverted, title }: AccessLinkIconProps) => {
    const className = 'icon access-icon' + (inverted ? ' inverted' : '');
    return (
        <a target="_blank" href={url} referrerPolicy="no-referrer" title={title}>
            <span className={className}></span>
        </a>
    )
}