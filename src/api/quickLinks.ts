import axiosClient from "./axiosInstance";
import {
  QuickLinkCreateData,
  QuickLinkEditData,
  QuickLinkDeleteData,
} from "@/interfaces/QuickLink";

export const quickLinksGetAll = async () => {
  const res = await axiosClient.get("quickLinks");
  return res;
};

export const quickLinkCreate = async (data: QuickLinkCreateData) => {
  const res = await axiosClient.post("quickLinks", data);
  return res;
};

export const quickLinkEdit = async (data: QuickLinkEditData) => {
  const res = await axiosClient.patch("quickLinks", data);
  return res;
};

export const quickLinkDelete = (data: QuickLinkDeleteData) => {
  const res = axiosClient.delete("quickLinks", { data: data });
  return res;
};
