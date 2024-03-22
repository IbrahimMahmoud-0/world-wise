import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map.jsx";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
