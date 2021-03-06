const store =  {
    "profileTypes": [
        {
            "id": "1",
            "name": "Womens",
            "bust": ["31.5 inches", "33-34 inches", "35.5-37 inches", "39-41 inches", "43-45 inches", "48.5-50.5 inches", "52.5 inches"],
            "waist": ["24.5 inches", "25.5-27 inches", "28-30 inches", "32-34.5 inches", "37-38.5 inches", "43-45.75 inches", "48.25 inches"],
            "hips": ["33 inches", "34.5-36 inches", "37.5-39.5 inches", "41.5-43.5 inches", "46-48.5 inches", "51.5-54 inches", "56.75 inches"]
        },
        {
            "id": "2",
            "name": "Mens",
            "bust": ["35 inches", "37 inches", "40 inches", "43 inches", "47 inches", "50 inches", "55 inches"],
            "waist": ["NA", "NA", "NA", "NA", "NA", "NA", "NA"],
            "hips": ["NA", "NA", "NA", "NA", "NA", "NA", "NA"]
        }
    ],

    "regions": [
       { 
           "id": "670a3bc6-61b9-450d-813c-65e64bd64940",
           "country": "USA"
        },
        {
            "id": "37bf77ad-7b29-497f-8270-8aa35059d223",
            "country": "UK"
        },
        {
            "id": "4ced9f24-e626-42df-aeaf-cf147748b70a",
            "country": "Japan"
        }
    ],

    "letterSizes": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],

    "profiles": [
        {
            "profiletype_id": "1",
            "region_id": "670a3bc6-61b9-450d-813c-65e64bd64940",
            "fit": "USA - Womens",
            "category": "Pants, Dresses, Skirts, Coats, and Jackets",
            "number_sizes": ["0 - 2", "4 - 6", "8 - 10", "12 - 14", "16 - 18", "20 - 22", "24 - 26"],
            "results": "the USA"
        },
        {
            "profiletype_id": "1",
            "region_id": "37bf77ad-7b29-497f-8270-8aa35059d223",
            "fit": "UK - Womens",
            "category": "Pants, Dresses, Skirts, Coats, and Jackets",
            "number_sizes": ["2 - 4", "6 - 8", "10 -12", "14 - 16", "18 - 20", "22 - 24", "26 - 28"],
            "results": "the UK"
        },
        {
            "profiletype_id": "1",
            "region_id": "4ced9f24-e626-42df-aeaf-cf147748b70a",
            "fit": "Japan - Womens",
            "category": "Pants, Dresses, Skirts, Coats, and Jackets",
            "number_sizes": ["5", "7 - 9", "11 - 13", "15 - 17", "19 - 21", "23 - 25", "27 - 29"],
            "results": "Japan"
        },
        {
            "profiletype_id": "2",
            "region_id": "670a3bc6-61b9-450d-813c-65e64bd64940",
            "fit": "USA - Mens",
            "category": "T-shirts, Jackets, and Tank Tops",
            "number_sizes": ["32", "34 - 36", "38 - 40", "42 - 44", "46", "48", "50"],
            "results": "the USA"
        },
        {
            "profiletype_id": "2",
            "region_id": "37bf77ad-7b29-497f-8270-8aa35059d223",
            "fit": "UK - Mens",
            "category": "T-shirts, Jackets, and Tank Tops",
            "number_sizes": ["32", "34 - 36", "38 - 40", "42 - 44", "46", "48", "50"],
            "results": "the UK"
        },
        {
            "profiletype_id": "2",
            "region_id": "4ced9f24-e626-42df-aeaf-cf147748b70a",
            "fit": "Japan - Mens",
            "category": "T-shirts, Jackets, and Tank Tops",
            "number_sizes": ["27.25", "36 - 38", "40 - 42", "44 - 46", "48", "50", "52"],
            "results": "Japan"
        }
    ],
}

export default store;