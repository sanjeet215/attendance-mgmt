import http from "../http-common";

class AnalyticService {

    getEmployeeCount(){
        return http.get("/empcount");
    }

    getDeprtmentCount(){
        return http.get("/deptcount");
    }

    getgenderarray() {
        return http.get("/gender");
    }

    get(id) {
        return http.get(`/department/${id}`);
    }

    create(data) {
        return http.post("/department", data);
    }

    update(id, data) {
        return http.put(`/department/${id}`, data);
    }

    delete(id) {
        return http.delete(`/department/${id}`);
    }

    deleteAll() {
        return http.delete(`/department`);
    }

    findByTitle(title) {
        return http.get(`/department?title=${title}`);
    }
}

export default new AnalyticService();