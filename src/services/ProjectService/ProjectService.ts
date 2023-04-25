import { useState } from "react";
import axiosInstance from "../../interceptor/axiosInstance";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
import { Project } from "../../models/project.model";
import { deserialize, serialize } from "serializr";
import Notification from "../../shared/components/Notification";
import { NotificationTypes } from "../../enums/notificationTypes";
import { convertJSONToFormData } from "../../shared/utils/dataFormatConverter";
import {
  ProjectAttachment,
  ProjectDocuments,
} from "../../models/project.help.model";

const ProjectService = () => {
  const [projects, setProjects] = useState();
  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchProjects = async (
    status: string,
    params?: { search?: string }
  ) => {
    setLoading(true);

    try {
      // using Axios to make a GET request to the specified API endpoint with the appropriate query string parameters to retrieve the desired data from the server.
      const res = await axiosInstance.get(ApiRoutes.PROJECTS, {
        params: {
          status: status.toLowerCase(),
          ...(params || {}),
        },
      });
      setProjects(res.data["projects"]);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProject = async (id: number) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(ApiRoutes.PROJECTS + `/${id}`);
      setProject(res.data.project);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (project: Project) => {
    try {
      const _project = serialize(Project, project);
      setLoading(true);
      await axiosInstance.post(ApiRoutes.PROJECTS, _project);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: number) => {
    try {
      setLoading(true);
      axiosInstance.delete(ApiRoutes.PROJECTS + `${id}`).then(() => {
        Notification({
          message: "Project Scrapped Successfully",
          type: NotificationTypes.SUCCESS,
          description: "",
        });
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const editProject = async (id: number, data: Project) => {
    try {
      const _project = serialize(Project, data);
      setLoading(true);
      await axiosInstance
        .put(ApiRoutes.PROJECTS + `${id}`, _project)
        .then((res) => {
          Notification({
            message: "Project updated Successfully",
            type: NotificationTypes.SUCCESS,
            description: "",
          });
          return deserialize(Project, res.data["project"]);
        });
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createProjectDocument = async (data: Project) => {
    try {
      const _project = serialize(Project, data);
      const formData = convertJSONToFormData(_project);
      setLoading(true);

      return axiosInstance
        .post(ApiRoutes.PROJECT_DOCUMENTS, formData)
        .then((response) => {
          return deserialize(
            ProjectDocuments,
            response.data["project_document"]
          );
        });
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProjectDocument = async (documentId: string) => {
    try {
      setLoading(true);
      return axiosInstance
        .delete(ApiRoutes.PROJECT_DOCUMENTS + `/${documentId}`)
        .then(() => documentId);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createProjectAttachment = async (data: Project) => {
    try {
      const _project = serialize(Project, data);
      const formData = convertJSONToFormData(_project);
      setLoading(true);
      return axiosInstance
        .post(ApiRoutes.PROJECT_ATTACHMENTS, formData)
        .then((response) => {
          return deserialize(
            ProjectAttachment,
            response.data["project_attachment"]
          );
        });
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProjectAttachment = async (attachmentId: string) => {
    try {
      setLoading(true);
      return axiosInstance.delete(
        ApiRoutes.PROJECT_ATTACHMENTS + `/${attachmentId}`
      );
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    project,
    projects,
    error,
    loading,
    fetchProjects,
    fetchProject,
    createProject,
    deleteProject,
    editProject,
    createProjectDocument,
    deleteProjectDocument,
    deleteProjectAttachment,
    createProjectAttachment,
  };
};

export default ProjectService;

/*


This code file exports a function ProjectService that provides functions to perform CRUD operations on 
projects, as well as project documents and attachments. It uses axios for making API calls, and also 
uses the serializr library for serializing and deserializing objects. The useState hook is used to 
manage state variables for projects, individual project, error messages, and loading status.
 Finally, it exports an object containing all the functions for external use.

*/
