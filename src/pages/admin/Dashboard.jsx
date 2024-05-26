import StatisticCard from "../../components/admin/StatisticCard";

const Dashboard = () => {
  return (
    <div className="">
      <section className="grid grid-cols-3 grid-rows-1 gap-6 text-primary-charcoalGray">
        <StatisticCard icon={"solar:link-bold"} title={"tautan"} >Tautan</StatisticCard>
        <StatisticCard icon={"ri:admin-fill"} title={"admin"} >Admin</StatisticCard>
     
      </section>
    </div>
  );
};

export default Dashboard;
