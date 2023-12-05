import { AppTabsProps, TabPanelProps } from "@/lib/models/AppTabs.model";
import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

const StyledTabs = styled(Tabs)(
  ({ theme, color }) => `

  && .MuiTabs-indicator {
    background-color: #fff;
    height:2px;
  }
`
);

const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "col",
})<{ col?: number }>(
  ({ theme, col, color }) => `
  && {
    width:${col === 2 ? "50%" : "100%"};
    color: #929292;
    font-size: 16px;
    font-weight: 300;
    text-transform: none;
    outline:none;
    padding-top:32px;
    padding-bottom:13px;
    border-bottom: 2px solid #1F1F1F;
  }

  &&.Mui-selected {
    color:#fff;
    font-weight: 500;
  },
`
);

/**
 * custom tab panel
 * @param {TabPanelProps} props
 * @return {any} 123
 */
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="overflow-auto"
      style={{ height: "90%" }}
      {...other}
    >
      {value === index && <div className="px-16 pt-32">{children}</div>}
    </div>
  );
}

const AppTabs = ({ data }: AppTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <StyledTabs value={value} onChange={handleChange}>
          {data.map((tab, tabIndex) => (
            <StyledTab key={tabIndex} label={tab.title} col={data.length} />
          ))}
        </StyledTabs>
      </div>
      {data.map((tab, tabIndex) => (
        <CustomTabPanel key={tabIndex} value={value} index={tabIndex}>
          {tab.content()}
        </CustomTabPanel>
      ))}
    </>
  );
};

export default AppTabs;
