
/*
===========================================================
NAUZA TU DIGITAL MOTOR MARKET
VEHICLE LISTINGS DATABASE
===========================================================

IMPORTANT:
This file contains APPROVED/PUBLISHED marketplace listings.

Nauza Tu does not own these vehicles.
The seller is responsible for the accuracy of the information.

To add a new approved vehicle, copy one vehicle object
and change its information.

===========================================================
*/

const vehicles = [

    {
        id: "NT001",

        make: "Toyota",
        model: "Harrier",
        year: 2019,

        category: "SUV",

        price: 2850000,

        location: "Nairobi",

        transmission: "Automatic",
        fuel: "Petrol",

        mileage: 72000,

        engine: "2.0L",

        drive: "2WD",

        condition: "Used",

        image: "images/toyota-harrier.jpg",

        images: [
            "images/toyota-harrier.jpg",
            "images/toyota-harrier-2.jpg",
            "images/toyota-harrier-3.jpg",
            "images/toyota-harrier-4.jpg",
            "images/toyota-harrier-5.jpg"
        ],

        description:
            "Toyota Harrier 2019 available in Nairobi. " +
            "Automatic transmission, petrol engine and approximately " +
            "72,000 KM. Contact the seller for viewing and further information.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254722910913",
            whatsapp: "+254722910913"
        }
    },


    {
        id: "NT002",

        make: "Mazda",
        model: "CX-5",
        year: 2020,

        category: "SUV",

        price: 2350000,

        location: "Nairobi",

        transmission: "Automatic",
        fuel: "Petrol",

        mileage: 65000,

        engine: "2.0L",

        drive: "2WD",

        condition: "Used",

        image: "images/mazda-cx5.jpg",

        images: [
            "images/mazda-cx5.jpg"
        ],

        description:
            "Mazda CX-5 2020 available in Nairobi. " +
            "Automatic transmission with petrol engine.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254724708032",
            whatsapp: "+254724708032"
        }
    },


    {
        id: "NT003",

        make: "Toyota",
        model: "Premio",
        year: 2018,

        category: "Sedan",

        price: 1450000,

        location: "Nairobi",

        transmission: "Automatic",
        fuel: "Petrol",

        mileage: 88000,

        engine: "1.8L",

        drive: "2WD",

        condition: "Used",

        image: "images/toyota-premio.jpg",

        images: [
            "images/toyota-premio.jpg"
        ],

        description:
            "Toyota Premio 2018 available in Nairobi. " +
            "Automatic petrol sedan suitable for everyday driving.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254722910913",
            whatsapp: "+254722910913"
        }
    },


    {
        id: "NT004",

        make: "Subaru",
        model: "Forester",
        year: 2019,

        category: "Station Wagon",

        price: 1950000,

        location: "Kiambu",

        transmission: "Automatic",
        fuel: "Petrol",

        mileage: 81000,

        engine: "2.0L",

        drive: "AWD",

        condition: "Used",

        image: "images/subaru-forester.jpg",

        images: [
            "images/subaru-forester.jpg"
        ],

        description:
            "Subaru Forester 2019 available in Kiambu. " +
            "Automatic petrol vehicle with all-wheel drive.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254724708032",
            whatsapp: "+254724708032"
        }
    },


    {
        id: "NT005",

        make: "Toyota",
        model: "Hilux",
        year: 2020,

        category: "Pickup",

        price: 3850000,

        location: "Nairobi",

        transmission: "Manual",
        fuel: "Diesel",

        mileage: 91000,

        engine: "2.4L",

        drive: "4WD",

        condition: "Used",

        image: "images/toyota-hilux.jpg",

        images: [
            "images/toyota-hilux.jpg"
        ],

        description:
            "Toyota Hilux 2020 pickup available in Nairobi. " +
            "Diesel engine with manual transmission and 4WD.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254722910913",
            whatsapp: "+254722910913"
        }
    },


    {
        id: "NT006",

        make: "Nissan",
        model: "X-Trail",
        year: 2019,

        category: "SUV",

        price: 2200000,

        location: "Nairobi",

        transmission: "Automatic",
        fuel: "Petrol",

        mileage: 76000,

        engine: "2.0L",

        drive: "2WD",

        condition: "Used",

        image: "images/nissan-xtrail.jpg",

        images: [
            "images/nissan-xtrail.jpg"
        ],

        description:
            "Nissan X-Trail 2019 SUV available in Nairobi. " +
            "Automatic petrol vehicle.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254724708032",
            whatsapp: "+254724708032"
        }
    },


    {
        id: "NT007",

        make: "Toyota",
        model: "Hiace",
        year: 2018,

        category: "Van",

        price: 3650000,

        location: "Nairobi",

        transmission: "Manual",
        fuel: "Diesel",

        mileage: 124000,

        engine: "2.8L",

        drive: "2WD",

        condition: "Used",

        image: "images/toyota-hiace.jpg",

        images: [
            "images/toyota-hiace.jpg"
        ],

        description:
            "Toyota Hiace 2018 van available in Nairobi. " +
            "Diesel engine and manual transmission.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254722910913",
            whatsapp: "+254722910913"
        }
    },


    {
        id: "NT008",

        make: "Mitsubishi",
        model: "Pajero",
        year: 2017,

        category: "SUV",

        price: 3250000,

        location: "Mombasa",

        transmission: "Automatic",
        fuel: "Diesel",

        mileage: 106000,

        engine: "3.2L",

        drive: "4WD",

        condition: "Used",

        image: "images/mitsubishi-pajero.jpg",

        images: [
            "images/mitsubishi-pajero.jpg"
        ],

        description:
            "Mitsubishi Pajero 2017 available in Mombasa. " +
            "Automatic diesel SUV with 4WD.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254724708032",
            whatsapp: "+254724708032"
        }
    },


    {
        id: "NT009",

        make: "Ford",
        model: "Ranger",
        year: 2021,

        category: "Pickup",

        price: 4200000,

        location: "Nairobi",

        transmission: "Automatic",
        fuel: "Diesel",

        mileage: 58000,

        engine: "2.0L",

        drive: "4WD",

        condition: "Used",

        image: "images/ford-ranger.jpg",

        images: [
            "images/ford-ranger.jpg"
        ],

        description:
            "Ford Ranger 2021 pickup available in Nairobi. " +
            "Automatic diesel pickup with 4WD.",

        seller: {
            name: "Vehicle Seller",
            type: "Private Seller",
            phone: "+254722910913",
            whatsapp: "+254722910913"
        }
    }

];
