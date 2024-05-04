import StatusBar from "../../components/common/StatusBar";
import PageHeader from "../../components/common/PageHeader";

const Header = () => {
  return (
    <>
      <StatusBar />
      <PageHeader title="메시지" search={true} />
    </>
  );
};

export default Header;
