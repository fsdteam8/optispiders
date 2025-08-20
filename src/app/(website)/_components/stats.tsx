import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <div className="container absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
      <Card className="md:h-[126px] w-full  flex justify-around items-center p-6 shadow-xl rounded-2xl bg-white">
        <div className="text-center">
          <h1 className="md:text-[24px] font-bold text-primary">608%</h1>
          <p className="text-[#2F2F2F] text-[14px]">Average ROAS Increase</p>
        </div>
        <div className="text-center">
          <h1 className="md:text-[24px] font-bold text-primary">120+</h1>
          <p className="text-[#2F2F2F] text-[14px]">Brands Empowered</p>
        </div>
        <div className="text-center">
          <h1 className="md:text-[24px] font-bold text-primary">75M+</h1>
          <p className="text-[#2F2F2F] text-[14px]">Optimized Listings</p>
        </div>
      </Card>
    </div>
  );
};

export default Stats;
