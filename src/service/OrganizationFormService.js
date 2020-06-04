import http from "../http-common";

const API_URL = 'http://localhost:8081/api/';

class OrganizationFormService {
    
    create(form) {
        return http
          .post(API_URL + 'org', {
            orgRefName: form.orgRefName,
            orgName: form.orgName,
            description: form.description,
            firstName: form.firstName,
            lastName: form.lastName,
            contactNumber: form.contactNumber,
            contactEmail: form.contactEmail
          })
          .then(response => {
            if (response.data.status === '201') {
              console.log('success');
              console.log(response.data.message);
            }   
            return response.data;
          });
      }






    // create(data) {
    //     return http.post("/org", data);
    // }

    test(form){
        console.log('method invoked');
    }

    validate(fromrefname) {
    return http.post("/org/validate",{
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