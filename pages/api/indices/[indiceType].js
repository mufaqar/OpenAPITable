import axios from 'axios';

export default async function handler(req, res) {
  const indiceType = req.query.indiceType;
  axios({
    method: 'get',
    url: `https://api.github.com/repos/tmforum-rand/api_table_docs/contents/index.json`,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
    .then((r) => {
      let response = process_github_index(indiceType, r.data.content);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function process_github_index(table, index) {
  let index_json = JSON.parse(Buffer.from(index, 'base64').toString('ascii'));
  let table_index = index_json[table];
  let flat_index = [];
  Object.values(table_index).forEach((api) => {
    api.forEach((entry) => {
      let description = entry.api_description;
      delete entry.api_description;
      flat_index.push({ ...description, ...entry });
    });
  });

  return flat_index;
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
