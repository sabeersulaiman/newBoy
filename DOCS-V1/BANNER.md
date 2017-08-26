# /v1/Banner

*Common Headers*
Property  | Value
------------- | -------------
API-KEY  | API Key Provided

## 1. GET / [?lang=]

Get all banners. Can Supply a language in url with _optional_ ```lang``` query (Default is ```en```).

Banner Action Can be specified by
```json
{
    Category: 0, //actionCategory can be used
    Product: 1, //actionProduct can be used
    Offer: 2 //actionCoupon can be used (actionCoupon here refers to offer Id)
}
```

### Responses
#### 1. Success (MBAF100)
```json
{
    "statusCode": "MBAF100",
    "message": "Success",
    "data": [
        {
            "_id": "597ec9f43e6317144aa4eb54",
            "actionType": 0,
            "actionCategory": "5954b4ca0b2eb649d70d424f",
            "actionCoupon": null,
            "actionProduct": null,
            "published": true,
            "description": {
                "_id": "597ec9f43e6317144aa4eb55",
                "banner": "597ec9f43e6317144aa4eb54",
                "name": "Banner Category",
                "webImage": "f1e2a17b-deab-4286-ac33-2e3706d02c81.jpeg",
                "mobileImage": "35d7687f-b10f-44d8-8653-fecaf630bfde.jpeg",
                "language": "en",
                "__v": 0
            }
        },
        {
            "_id": "5988af58d1db8528a7e719e6",
            "actionType": 0,
            "actionCategory": "5954b4ca0b2eb649d70d424f",
            "actionCoupon": null,
            "actionProduct": null,
            "published": true,
            "description": {
                "_id": "59891fb992990d2aad1f5892",
                "banner": "5988af58d1db8528a7e719e6",
                "name": "എന്തോ ഒരു ബാനർ",
                "webImage": "f1e2a17b-deab-4286-ac33-2e3706d02c81.jpeg",
                "mobileImage": "f1f611a9-875c-4c51-9967-4b9e0df70e7d.jpeg",
                "language": "ml",
                "__v": 0
            }
        }
    ]
}
```