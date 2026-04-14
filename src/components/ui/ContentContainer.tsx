interface ContentContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly wide?: boolean;
  readonly as?: "div" | "section" | "footer";
  readonly id?: string;
  readonly style?: React.CSSProperties;
}

export function ContentContainer({
  children,
  className = "",
  wide = false,
  as: Tag = "div",
  id,
  style,
}: ContentContainerProps) {
  return (
    <Tag
      id={id}
      style={style}
      className={`${wide ? "max-w-[1600px]" : "max-w-[1400px]"} mx-auto px-6 lg:px-8 2xl:px-12 w-full ${className}`}
    >
      {children}
    </Tag>
  );
}
