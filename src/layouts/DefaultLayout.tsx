import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.css"

export function DefaultLayout() {
  return (
    <div className={ styles.layoutContainer }>
      <Sidebar />
      <Outlet />
    </div>
  )
}