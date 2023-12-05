import { prefix } from "@/lib/constants";
import { AppLinks } from "@/lib/constants/AppLinks";
import ArrowIcon from "@/public/icons/arrow-prev.svg";
import { useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import AppLink from "./AppLink";

interface Props {
  title?: string;
  navigate: { url: string; name: string };
  children?: ReactNode;
}

const NavigationBar = ({ title, navigate, children }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // mobile
  if (isMobile) {
    return (
      <>
        <div
          className="d-flex align-items-center sticky-top z-index-1 bg-black1"
          style={{ height: "70px" }}
        >
          <div className={`${prefix}container`}>
            {typeof title === "string" && (
              <AppLink
                href={navigate?.url ?? ""}
                className="text-white headline-1 fw-md text-decoration-none d-flex align-items-center"
              >
                <ArrowIcon className="icon-white flex-shrink-0" />
                <span className="headline-2 ml-13">{navigate.name}</span>
              </AppLink>
            )}

            {children && children}
          </div>
        </div>
        <div className={`${prefix}container`}>
          <h4 className="headline-2 fw-md mt-20 mb-24">{title}</h4>
        </div>
      </>
    );
  }
  // desktop
  else {
    return (
      <div className={`${prefix}container mt-0 mt-sm-90 mb-24`}>
        <AppLink
          className="text-white headline-1 fw-md text-decoration-none d-flex  align-items-center position-relative"
          href={AppLinks.home}
        >
          <ArrowIcon
            className="icon-white flex-shrink-0 position-absolute"
            style={{ left: "-51px" }}
          />
          <span className="headline-2">{title}</span>
        </AppLink>
      </div>
    );
  }
};

export default NavigationBar;
