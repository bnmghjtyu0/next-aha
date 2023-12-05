import AppLogo from "@/lib/components/AppLogo";
import ActiveLink from "@/lib/components/shared/ActiveLink";
import AppLink from "@/lib/components/shared/AppLink";
import AppSlider from "@/lib/components/shared/AppSlider";
import NavigationBar from "@/lib/components/shared/NavgiationBar";
import { prefix } from "@/lib/constants";
import { AppLinks } from "@/lib/constants/AppLinks";
import { BaseLayoutContext } from "@/lib/contexts/BaseLayoutContext";
import IconUnion from "@/public/icons/union.svg";
import { useContext, useState } from "react";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [baseLayoutData] = useContext(BaseLayoutContext);

  return (
    <>
      <div className="d-block d-sm-none">
        <NavigationBar navigate={{ url: AppLinks.home, name: "Home Page" }}>
          <AppLogo />
        </NavigationBar>
      </div>
      <section className={`${prefix}container`}>
        <div className="mt-0 mt-sm-54">
          <h1 className="headline-2 fw-light">Search</h1>

          <input
            type="text"
            placeholder="Keyword"
            className="fs-md form-control input-transparent mt-20"
            onChange={($event) => setKeyword($event.target.value)}
          />

          <div className={`mt-30 ${prefix}-hr`}></div>

          <h2 className="headline-2 fw-light mt-30"># Of Results Per Page</h2>

          <p className="mt-20">
            <span className="number-2 mr-10">
              {baseLayoutData.userAllData?.pageSize}
            </span>
            <span className="fs-lg fw-md">results</span>
          </p>

          <div className="mt-20">
            <AppSlider
              totalPages={baseLayoutData.userAllData?.totalPages ?? 1}
            />
          </div>

          <div className={`${prefix}hr mt-30 d-none d-sm-block`}></div>
        </div>
      </section>

      <section
        className={`position-absolute d-flex d-sm-block flex-column align-items-center mb-sm-87 w-100`}
        style={{ bottom: 0 }}
      >
        <div className={`${prefix}container w-100`}>
          <div className={`${prefix}hr mb-80 d-block d-sm-none`}></div>
          <AppLink
            href={AppLinks.search({
              page: 1,
              keyword,
            })}
            className="btn btn-xxl btn-white fw-bold fs-md mb-24"
          >
            SEARCH
          </AppLink>
        </div>
        <div
          className="nav-links d-flex d-sm-none align-items-center justify-content-center bg-navigation w-100"
          style={{ height: "66px" }}
        >
          <ActiveLink
            href={AppLinks.home}
            activeClassName="active"
            className="mr-50"
          >
            <IconUnion className="icon icon-gray" />
            {/* <span className="fs-sm">Home</span> */}
          </ActiveLink>
          <ActiveLink href={AppLinks.tags} activeClassName="active">
            <IconUnion className="icon icon-gray" />
            {/* <span className="fs-sm">Tags</span> */}
          </ActiveLink>
        </div>
      </section>
    </>
  );
};

export default Home;
