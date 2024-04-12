import TopNavBar from '../components/TopNavBar/TopNavBar';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import MyStatus from '../components/Status/MyStatus';

export default function StatusPage() {
  return (
    <>
      <TopNavBar leftText="Privacy" title="Status" />
      <MyStatus />
      <BottomTabBar />
    </>
  );
}
