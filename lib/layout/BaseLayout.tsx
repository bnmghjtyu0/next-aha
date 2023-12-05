import { useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { UsersApi } from "../api";
import AppLogo from "../components/AppLogo";
import Follows from "../components/Follows";
import Navbar from "../components/Navbar";
import { prefix } from "../constants";
import { BaseLayoutContext } from "../contexts/BaseLayoutContext";

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  const [baseLayoutData, setBaseLayoutData] = useContext(BaseLayoutContext);
  const theme = useTheme();
  const screenLg = useMediaQuery(theme.breakpoints.up("lg"));
  const loadApi = async () => {
    const usersApi = new UsersApi();
    const followersRes = await usersApi.getUsersAll();

    setBaseLayoutData(() => ({
      ...baseLayoutData,
      userAllData: followersRes,
    }));
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <div className={`d-flex ${prefix}base-layout`}>
      <Navbar />

      <div className="w-100 bg-black1 position-relative overflow-auto">
        <section className={`d-sm-none ${prefix}container py-28`}>
          <AppLogo />
        </section>

        {children}
      </div>

      {screenLg && (
        <div className={`${prefix}follows`}>
          <Follows />
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
