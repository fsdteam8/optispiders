import { Blog } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import BlogAction from "./blog-action";

export const blogManagementColumn: ColumnDef<Blog>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
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
    cell: ({ row }) => <BlogAction data={row.original} />,
  },
];
