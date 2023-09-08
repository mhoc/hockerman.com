import Link from "../Link/Link";
import Text from "../Text/Text";

interface Props {
  children: React.ReactNode;
  href?: string;
  hrefIsExternal?: boolean;
  label: React.ReactNode;
  renderTrailingComma?: boolean;
}

export default function JSONEntityKeyValue({
  children,
  href,
  hrefIsExternal,
  label,
  renderTrailingComma,
}: Props) {
  return (
    <>
      <br />
      &nbsp;&nbsp;
      <Text color="muted">{`"`}</Text>
      <Text>{label}</Text>
      <Text color="muted">{`": "`}</Text>
      {href ? (
        <Link href={href} rel={hrefIsExternal ? "noopener" : undefined}>
          {children}
        </Link>
      ) : (
        <Text color="muted">{children}</Text>
      )}
      <Text color="muted">"</Text>
      {renderTrailingComma && <Text color="muted">,</Text>}
    </>
  );
}
