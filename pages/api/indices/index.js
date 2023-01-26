import axios from 'axios';


export default async function handler(req, res) {
    console.log(axios({
        method: "get",
        url: `https://api.github.com/repos/tmforum-rand/api_table_docs/contents/table_generator/data/indexes/Beta_description_index.json`,
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json"
        },
        })
        .then(r => {
            r.data.content = JSON.parse(Buffer.from(r.data.content, 'base64').toString('ascii'));
            console.log(r.data)
            res.status(200).json(r.data)
        })
        .catch(err => {
            res.status(200).json(err);
        }));
    
    //res.status(200).json({ name: 'John Doe' })
}


// import APIListController from '../../../utils/APIListController'
// import CertificationsController from '../../../utils/APIListController';
// const url = require('url');

// const router = {
//     POST: handlePost,
//     GET: handleGet
// }

// const vendorController = new VendorController({})


// export default async function handler(req, res) {
//     const routeHandler = router[req.method]
//     return routeHandler(req, res)
// }


// async function handleGet(req, res) {
//     const queryObject = url.parse(req.url, true).query;
//     const fields = queryObject.fields;
//     //console.log("fields", fields)
//     if (fields) {

//         try {
//             const data = await vendorController.listProductsFields(fields)
//             if (fields.includes('certifications')) {
//                 const certificationsController = new CertificationsController()
//                 let certifications = await certificationsController.getAllCertifications()
//                 data.forEach((vendor) => {
//                     //console.log(vendor.salesForceId)
//                     let vendorCertifications = certifications.filter((cert => cert.ACCOUNTID == vendor.salesForceId))
//                     //console.log(vendorCertifications)
//                     vendor.certifications = vendorCertifications.map((cert) => cert.PRODUCTNAME)


//                 })
//             }


//             res.status(200).json(data)
//         }
//         catch (e) {
//             console.log(e)
//             res.status(500).json(e)
//         }
//         return;
//     }
//     if (queryObject != undefined) {
//         //console.log("query", queryObject)
//         try {
//             const data = await vendorController.listProductsSearch(queryObject)
//             const certificationsController = new CertificationsController()
//             let certifications = await certificationsController.getAllCertifications()
//             data.forEach((vendor) => {
//                 //console.log(vendor.salesForceId)
//                 let vendorCertifications = certifications.filter((cert => cert.ACCOUNTID == vendor.salesForceId))
//                 //console.log(vendorCertifications)
//                 vendor.certifications = vendorCertifications.map((cert) => cert.PRODUCTNAME)


//             })
//             res.status(200).json(data)
//         }
//         catch (e) {
//             console.log(e)
//             res.status(500).json(e)
//         }
//         return;
//     }
//     else {
//         //console.log('no fields')
//         try {
//             const data = await vendorController.listProducts()
//             const certificationsController = new CertificationsController()
//             let certifications = await certificationsController.getAllCertifications()
//             data.forEach((vendor) => {
//                 //console.log(vendor.salesForceId)
//                 let vendorCertifications = certifications.filter((cert => cert.ACCOUNTID == vendor.salesForceId))
//                 //console.log(vendorCertifications)
//                 vendor.certifications = vendorCertifications.map((cert) => cert.PRODUCTNAME)
    
    
//             })
//             res.status(200).json(data)
//         }
//         catch (e) {
//             console.log(e)
//             res.status(500).json(e)
//         }
//         return;
//     }


// }

// async function handlePost(req, res) {
//     try {
//         const data = await vendorController.createProduct(req.body)
//         res.status(200).json(data)
//     }
//     catch (e) {
//         console.log(e)
//         res.status(400).json(e)
//     }

// }




