import api from "./api";

export const getContacts = async (params) => {
  const response = await api.get("/contacts/", { params });
  return response.data;
};

export const getContact = async (id) => {
  const response = await api.get(`/contacts/${id}`);
  return response.data;
};

export const createContact = async (contactData) => {
  const formData = new FormData();
  Object.entries(contactData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });
  return api.post("/contacts/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateContact = async (id, contactData) => {
  const formData = new FormData();
  Object.entries(contactData).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });
  return api.put(`/contacts/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteContact = async (id) => {
  return api.delete(`/contacts/${id}`);
};

export const exportContacts = async () => {
  return api.get("/contacts/export", {
    responseType: "blob",
  });
};

export const seedContacts = async () => {
  return api.post("/contacts/seed");
};

export const importContacts = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return api.post("/contacts/import", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
