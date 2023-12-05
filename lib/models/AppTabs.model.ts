import React from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface AppTabData {
  title: string;
  content: () => React.ReactNode;
}
export interface AppTabsProps {
  data: AppTabData[];
}
