export interface AccessLinkIconProps {
  url: string;
  text?: string;
  inverted?: boolean;
  title?: string;
}

export const AccessLinkIcon = ({
  url,
  text,
  inverted,
  title,
}: AccessLinkIconProps) => {
  const className = "icon access-icon" + (inverted ? " inverted" : "");
  return (
    <a
      className="accessLink"
      target="_blank"
      href={url}
      referrerPolicy="no-referrer"
      title={title}
    >
      {text}
      <span className={className}></span>
    </a>
  );
};
