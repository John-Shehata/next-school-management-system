import CalendarSide from "@/components/CalenderEvents/CalendarSide";
import AttendanceChart from "@/components/charts/AttendanceChart";
import CountChart from "@/components/charts/CountChart";
import FinanceChart from "@/components/charts/FinanceChart";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <UserCards />
        <div className="flex gap-4 flex-col lg:flex-row">
          <CountChart />
          <AttendanceChart />
        </div>
        <FinanceChart />
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <CalendarSide />
      </div>
    </div>
  );
};

export default AdminPage;
