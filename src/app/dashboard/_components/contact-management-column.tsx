import { Lead } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ContactAction from "./contact-action";

export const contactColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "firstName",
    header: "Name",
    cell: ({ row }) => (
      <p>{`${row.original.firstName} ${row.original.lastName}`}</p>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "createdAt",
    header: "Submit At",
    cell: ({ row }) => {
      return <p>{moment(row.original.createdAt).format("DD MMM, YYYY")}</p>;
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <ContactAction data={row.original} />,
  },
];
