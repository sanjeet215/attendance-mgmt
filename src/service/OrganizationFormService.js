import http from "../http-common";

class OrganizationFormService {


    test(form){
        console.log('method invoked');
    }

    validate(fromrefname) {

        console.log('Control came here' + fromrefname);

        return http.post("http://localhost:8081/api/org/validate?orgRefName=asiczen1",{
            params: {
                orgRefName : fromrefname
            }
        });
    }

    getAll() {
        return http.get("/org");
    }

    get(id) {
        return http.get(`/org/${id}`);
    }

    create(data) {
        return http.post("/org", data);
    }

    update(id, data) {
        return http.put(`/org/${id}`, data);
    }

    delete(id) {
        return http.delete(`/org/${id}`);
    }

    deleteAll() {
        return http.delete(`/org`);
    }
}

export default new OrganizationFormService();