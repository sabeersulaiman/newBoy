# Mangostores Build

Add Configuration environment file : ```.env``` in the root folder of the application.
```
TOKEN_KEY_ADMIN=gYLXuink3kExrLlcD5D3JXtKCCfJm6vP
TOKEN_KEY=CkunH4Li6aqn4Qcwkl2X3VlEqaEhppCO
DATABASE_CONNECTION_STRING=mongodb://localhost/mango
DATABASE_CONNECTION_STRING_TEST=mongodb://localhost/mangotest
MAIN_URL=http://localhost:4000/
MAIN_LOCATION=/home/ss/works/mango/
CDN_URL=http://localhost:4000/
CDN_LOCATION=/home/ss/works/mango/dist/
STORAGE_URL=http://localhost:4000/uploads/
STORAGE_LOCATION=/home/ss/works/mango/dist/storage
PLIVO_AUTH_ID=MAMWEYNJZJMJQ2YJUYMJ
PLIVO_AUTH_SECRET=NjZjM2JjY2ZmMzZlN2U1MDBjZmI3MTU2YWU5NGFi
API_KEY_FRONT=KNhbdJKink3kExrLlcD5DBDIUDNVKeobjbcj4Qcwkl2X3VlEsnibkKBEHCMCcnel
API_KEY_BACK=KNhbdJKink3kExrLlcD5DBDIUDNVKeobjbcj4Qcwkl2X3VlEsnibkKBEHCMCcnelkdskdnkpakdm
```

To install run:
```
npm run build
```

To run (only if install is successful):
```
npm run store
```

Test
```
npm test
```