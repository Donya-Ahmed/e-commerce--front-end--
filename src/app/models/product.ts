export interface Product {
  "title":string,
 "discription":string,
   "categories":string,
  "subcategory":string,
  "attributes":[
  {
             "attributeName":string,
              "values":[
                   {
                       "value":string,
                        "quantity":number
                   }

                     ]

  }
  ],
  "price":number,
  "image":string,
  "avaliable":boolean,
  "createdAt": string,
  "updatedAt":string,
  "_id":string
}
