import React, { useEffect, useState } from "react";
import "./projects.scss";
import CustomTable from "../../../shared/components/CustomTable";
import { Tabs } from "antd";
import moment from "moment";
import ProjectService from "../../../services/ProjectService/ProjectService";
import { ColumnsType } from "antd/lib/table";
import { Project } from "../../../models/project.model";
import { generatePath, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/routeConstants/appRoutes";
import { ApiRoutes } from "../../../routes/routeConstants/apiRoutes";
import { ColumnType2, ColumnsType1 } from "./ProjectTable";

const {TabPane}  = Tabs;

const Projects = () => {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState("Proposed");
  const [projectModal, setProjectModal] = useState(false);
  const statusTabs = ["Proposed", "Planned", "Active", "Completed", "Scrapped"];

  const { projects, fetchProjects } = ProjectService();
  useEffect(() => {
    if (activeStatus) {
      fetchProjectsList(activeStatus);
    }
  }, [activeStatus]);

  const fetchProjectsList = async (type: string) => {
    await fetchProjects(type);
  };

  const redirectProject = (project: Project) => ({
    onClick: () => {
      console.log(project);
      navigate(
        generatePath(AppRoutes.PROJECT_DETAILS, { id: String(project.id) })
      );
    },
  });

  const handleSearch = (search: string) => {
    fetchProjects(activeStatus, { search });
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="main-heading">
          Projects{" "}
          <span className="add-project">
            <i className="icon-add-2" onClick={() => setProjectModal(true)}></i>
          </span>
        </h1>
      </div>
      <Tabs
        defaultActiveKey="1"
        onChange={(key) => setActiveStatus(key)}
        destroyInactiveTabPane
      >
        {statusTabs.map((status, index) => {
          return (
            <TabPane key={status} tab={status}>
              <CustomTable
                title={"Project"}
                columns={
                  activeStatus === "Proposed" ? ColumnType2 : ColumnsType1
                }
                handleRedirect={redirectProject}
                data={projects}
                handleSearch={handleSearch}
              />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Projects;
