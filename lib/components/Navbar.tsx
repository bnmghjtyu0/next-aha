import IconUnion from "@/public/icons/union.svg";
import { AppLinks } from "../constants/AppLinks";
import AppLogo from "./AppLogo";
import ActiveLink from "./shared/ActiveLink";

const Navbar = () => {
  return (
    <div className="app-navbar d-none d-sm-block">
      <AppLogo />
      <ul className="nav-links">
        <li>
          <ActiveLink href={AppLinks.home} activeClassName="active">
            <IconUnion className="icon icon-gray" />
            <span className="fs-sm">Home</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={AppLinks.tags} activeClassName="active">
            <IconUnion className="icon icon-gray" />
            <span className="fs-sm">Tags</span>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
