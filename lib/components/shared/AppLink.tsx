import Link from "next/link";

const AppLink = ({ children, className, href, as, style }: any) => {
  return (
    <Link href={href} as={as} legacyBehavior>
      <a className={className} style={style}>
        {children}
      </a>
    </Link>
  );
};
export default AppLink;
