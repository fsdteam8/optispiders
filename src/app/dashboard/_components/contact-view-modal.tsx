import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Lead } from "@prisma/client";
import { CircleCheck } from "lucide-react";
import moment from "moment";
import { memo } from "react";

interface Props {
  open: boolean;
  setOpen: (p: boolean) => void;
  data: Lead;
}

const ContactViewModal = ({ open, setOpen, data }: Props) => {
  const fullName = `${data.firstName} ${data.lastName}`;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <div className="grid grid-cols-2 gap-5 gap-y-10 md:grid-cols-3 ">
          <CipsData label="Name" value={fullName} />
          <CipsData label="Job Title" value={data.jobTitle} />
          <CipsData label="Phone" value={data.phone} />
          <CipsData label="Work Email" value={data.email} />
          <CipsData label="Company" value={data.companyName} />
          <CipsData label="Country" value={data.country} />
          {data.state && <CipsData label="State" value={data.state} />}
          <div className="space-y-1 col-span-2">
            <h1 className="text-primary font-semibold">Retailers</h1>
            <div className="text-[#666666] text-[14px] flex items-center flex-wrap gap-5">
              {data.retailers.map((item) => (
                <p key={item} className="flex items-center h-auto gap-x-1">
                  <CircleCheck
                    fill="#2793D7"
                    className="size-5"
                    stroke="#FFFFFF"
                  />{" "}
                  {item}
                </p>
              ))}
            </div>
          </div>

          <CipsData
            label="Submitted at"
            value={moment(data.createdAt).format("DD MMM, YYYY")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(ContactViewModal);

interface ChipsProps {
  label: string;
  value: string;
}

const CipsData = ({ label, value }: ChipsProps) => {
  return (
    <div className="space-y-1">
      <h1 className="text-primary font-semibold">{label}</h1>
      <p className="text-[#666666] text-[14px] ">{value}</p>
    </div>
  );
};
