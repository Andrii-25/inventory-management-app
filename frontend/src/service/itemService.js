import http from "../http-common";

class ItemService {
  getItems() {
    return http.get("/items");
  }

  addItem(data) {
    return http.post("/items", data);
  }

  removeItem(id) {
    return http.delete(`/items/${id}`);
  }

  updateItem(data, id) {
    return http.put(`/items/?id=${id}`, data);
  }
}

export default new ItemService();
