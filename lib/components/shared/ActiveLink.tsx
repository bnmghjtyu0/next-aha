import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, activeClassName, ...props }: any) => {
  const { asPath } = useRouter();
  const childClassName = props.className;

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;
  return (
    <Link {...props} href={props.href} legacyBehavior>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
