import GitHubOperations from './gitHub';
//import { get } from '@vercel/edge-config';



export async function middleware() {

}

class ApiListController {
    constructor() {
        this.database = new GitHubOperations();
    }

    

    async getCompanyCertificationsByName(company){
        //let certifications = await this.database.retrieveApiCertificationsByCompany(company);
        //return certifications;
        //DEPRECATED
        return;
        
    }
    async getCompanyCertificationsById(companyId){
        const certificationsEdge = await get('certifications');
        // NextResponse.json requires at least Next v13.1 or
        // enabling experimental.allowMiddlewareResponseBody in next.config.js
        return certificationsEdge.filter(cert => cert.ACCOUNTID === companyId);
        // let certifications = await this.database.retrieveApiCertificationsByCompanyId(companyId);
        // return certifications;
        
    }

    async getAllCertifications(){
        const certificationsEdge = await get('certifications');
        // NextResponse.json requires at least Next v13.1 or
        // enabling experimental.allowMiddlewareResponseBody in next.config.js
        return certificationsEdge;
        // let certifications = await this.database.retrieveAllApiCertifications()
        // return certifications;
    }

    


}



export default SnowController