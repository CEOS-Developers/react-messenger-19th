import StatusBar from "../../components/common/StatusBar";
import PageHeader from "../../components/common/PageHeader";

const Header = () => {
  return (
    <>
      <StatusBar />
      <PageHeader title="맹구님의 서버" search={true} />
    </>
  );
};

export default Header;
