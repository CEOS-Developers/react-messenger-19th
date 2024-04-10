import StatusNavBar from '../components/Status/StatusNavBar';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import MyStatus from '../components/Status/MyStatus';

export default function StatusPage() {
  return (
    <>
      <StatusNavBar />
      <MyStatus />
      <BottomTabBar />
    </>
  );
}
