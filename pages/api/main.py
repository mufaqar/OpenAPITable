import glob
import os
import json

path = "C:\\Users\\henri\\Documents\\TMF\\api_table_docs\\documents\\"
descriptions = [
    "Historic_description_index.json",
    "Beta_description_index.json",
    "OpenApiTable_description_index.json"    
]

descFull = {}

def find_docs(ob, desc):
    print("...",ob)
    if ("Historic" in desc):
        if "Archived" in ob['lifecycle_status']:
            print(ob, path + "\\Historic\\*\\"+ob['document_number']+"*")
            files = glob.glob(path + "/Historic/*/*/"+ob['document_number']+"*")
            swagger = [x in files for x in files if "swagger" in x.split('\\')[-1].lower()]
            user_guides = [x in files for x in files if "user_guides" in x.split('\\')[-1].lower()]
            conformance = [x in files for x in files if "conformance" in x.split('\\')[-1].lower()]
            ctk = [x in files for x in files if "ctk" in x.split('\\')[-1].lower()]
            ri = [x in files for x in files if "ri" in x.split('\\')[-1].lower()]
            postman = [x in files for x in files if "postman" in x.split('\\')[-1].lower()]
            return swagger, user_guides, conformance, ctk, ri, postman

def merge_desc():
    for description in descriptions:
        with open("C:\\Users\\henri\\Documents\\TMF\\api_table_docs\\table_generator\\data\\indexes\\" + description, "r") as f:
            data = f.read()
            thisDesc = json.loads(data)
            for key in thisDesc:
                for index, objs in enumerate(thisDesc[key]):
                    print(objs)
                    for obj in objs:
                        swagger, user_guides, conformance, ctk, ri, postman = find_docs(obj, description)
                        obj['swagger'] = swagger
                        obj['user_guides'] = user_guides
                        obj['conformance'] = conformance
                        obj['ctk'] = ctk
                        obj['ri'] = ri
                        obj['postman'] = postman

                    thisDesc[index] = objs
                    if obj not in descFull:
                        descFull[obj] = [thisDesc[obj]]
                    else:
                        descFull[obj].append(thisDesc[obj])

merge_desc()
# print(descFull)
open('out.json', 'w').write(json.dumps(descFull, indent=4))
           


# for folder in glob.glob(path):