import http from "../http-common";

class FileUploadService {

    uploadOrganizationFile(formData) {
        console.log('Method is invoked');
        console.log(formData);

        try {
             http.post('/upload', formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                  },
                  
             });
            console.log('File Uploaded successfully');
        } catch (err) {
            console.log(err);
            console.log('There is an error while uploading the file');
        }
    }
}

export default new FileUploadService();