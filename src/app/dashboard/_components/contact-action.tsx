import { deleteLeadAction } from "@/actions/lead";
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lead } from "@prisma/client";
import { EllipsisVertical } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import ContactViewModal from "./contact-view-modal";

interface Props {
  data: Lead;
}

const ContactAction = ({ data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onDelete = () => {
    startTransition(() => {
      deleteLeadAction(data.id).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }

        // handle success
        setOpen(false);
      });
    });
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setModalOpen(true)}>
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen((p) => !p)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={isPending}
        title="Are you sure you want to delete"
        message=""
      />
      <ContactViewModal open={modalOpen} setOpen={setModalOpen} data={data} />
    </div>
  );
};

export default ContactAction;
