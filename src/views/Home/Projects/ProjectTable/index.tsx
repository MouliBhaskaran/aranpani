import { Project } from "../../../../models/project.model";
import { ColumnsType } from 'antd/lib/table';
import moment from "moment";

export const ColumnsType1: ColumnsType<Project> = [
    {
      title:"Reg Number",
      dataIndex: "reg_number",
      key:"reg_number",
    },
    {
      title:"Temple Name",
      dataIndex:"name",
      key:"name"
    },
    {
      title:"Location",
      dataIndex:"location",
      key:"location"
    },
    {
      title:"Start Date",
      dataIndex:"startDate",
      key:"startDate",
      render: (date:string) => moment(date).format("DD/MM/YYYY")
    },
    {
      title:"End Date",
      dataIndex:"endDate",
      key:"endDate",
      render:(date:string) => moment(date).format("DD/MM/YYYY")
    },
    {
      title:"Estimated Amount",
      dataIndex:"estimated_amt",
      key:"estimated_amt",
    },
    {
      title:"Expensed Amount",
      dataIndex:"expensed_amt",
      key:"expensed_amt",
    },
    {
      title:"Progress",
      dataIndex:"progress",
      key:"progress"
    },

  ];

  export const ColumnType2: ColumnsType<Project> = [
    {
      title:"Reg Number",
      dataIndex:"reg_number",
      key:"reg_number"
    },
    {
      title:"Temple Name",
      dataIndex:"name",
      key:"name",
    },
    {
      title:"Location",
      dataIndex:"location",
      key:"location"
    },
    {
      title:"Created On",
      dataIndex:"created_at",
      key:"created_at",
      render:(date: string) => moment(date).format("DD/MM/YYYY"),
    },
      
    
  ];