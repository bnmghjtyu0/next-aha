import Image from "next/image";
import { AppLinks } from "../constants/AppLinks";
import AppLink from "./shared/AppLink";

const AppLogo = () => {
  return (
    <div className="logo">
      <AppLink href={AppLinks.home}>
        <Image src="/images/logo.png" alt="logo" width="35" height="15" />
      </AppLink>
    </div>
  );
};

export default AppLogo;
