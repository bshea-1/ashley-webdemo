export const DEMO_USER = {
    name: "Sarah Jenkins",
    role: "Sales Associate",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBxUXsjGj080VA9WxgG0kZibqXvwjNpkN0Ws0sD6uvnQNjWydMLMqJe7-MSNWDmjSByIQe3DyFzwLXBCKmse0V6P0xfp9oICvcIEZAdf3Nm0Nuf3NCAS0D4C-VoDOnONvruN0VDoDZvjJ2LcPKhgiqzc8nFJIRGROB-Qs7xVlTJlnwzkbtSfuhN72Q87b0q02sx-DdkFIps44WEiS3rKDXATNyinxRbf68tbKO6xwcBPQ5b4kl6rjEWsZqvsHyNdltQSRq_8MNttHo"
};

export const PRODUCTS = [
    { id: 1, name: "Rawcliffe Sectional", price: "$1,299.99", numPrice: 1299.99, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD86a0CGCWebZZNa7mC4EGEt1oszU7YdQtVmXsm180zdiZZzH973bN0lwhFVculdUra36uZ2Ig6zF0LTj2mBgYYce-vyCLr6bsOo0jPIg9irg2OHE1s2gFID0-hI4e2b5ddP6X9HMkgqbQp0tUPpPFtQ--oDMaaV5z02_B0-ftlgJ-5MTqoPLw-fvDabw0eII5FJC4eRAnEGaVeaECzGNxQfGPsvYTTYTP3OIcKvrIrcL4if7-yB06txuQwygVzdlAgkvtfhEOdPo7f" },
    { id: 2, name: "Maimz Contemporary Sofa", price: "$699.00", numPrice: 699.00, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZbBtpdbEXs1lNQ31M0UaFOYndvCw-RfUo_pNWuR9oR8OAV9F3VA4uMyAyjkvr5q6pq8nkeocEWgIoxWifc7Aex5JJesOhmKwfqq1dAI1Ao8jTEA9OuL_1FdrGmlGNvdrFxVwh8pJOAbbSZHyqvIKGYekSmdJa73euciheScquAIlFKeHcSD0AWgOOidGqAu7jabuVQEtMxiTeaoXWf-Lr0swxmcZTOO-CPO6XBBwdR92Svo7wvGtOivctJkz4w3l_MIgHF7ZoZoZ" },
    { id: 3, name: "Dorsten Oversized Chair", price: "$499.99", numPrice: 499.99, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsIsRoov8Afgf_n8Q9NE3wGw1jO2gB7WJu_P-ItI2lKxM8E4mnZ4qLs3jJUFcIPHUqUv82FvbX0kYYx-gToo0y7TlzWoip81rZCBgWbu6EhNzaZ53T-smNSGkUs-ojucw_ksVJyEv7l2z8v4Y_SU-WtzPBTjU9PX78XToUb-Ayge-ZNIe_Bqea3ln80fCbTP7b2XmBloThqzOsmwaFEhcbuuuReSibI-AJ1wZAunyyOANCarqdi-jBA3LYRZ8sJP79-0tKn4TGwi7H" },
    { id: 4, name: "Mid-Century Accent Chair", price: "$249.00", numPrice: 249.00, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3nZ4r9_f3fqfL0yvHtCQsEs5vaw1Q_dOL4UWshiUejsCvIA0etohbKYc77KFJQpLyUIpQhDwlAvSNR9cLrsqW_SkF1e9a2MPR39mdMltDtPhSA5GyIr8cp9Lpn5SNi-nsYB7rMIYZ5A51bYpyUOXUHasT1Yd8R22IByCKAl4p2Krvwg88qpcDs-259wYXZgyK279XVCmqzzccDMcxGeVHrvCAnr2zdjJc4pW7JQMmr3ZCMJol3TD0SfOV3uovc6342HNd4s0WJV6" },
];

export const CUSTOMERS = [
    {
        id: 1,
        name: "John Smith",
        email: "john.s@example.com",
        phone: "(555) 012-3456",
        memberSince: "March 2021",
        totalSpent: 12450.00,
        ordersCount: 8,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        addresses: [
            { id: 1, type: "Home", street: "123 Oak Street", city: "Tampa", state: "FL", zip: "33601", isDefault: true },
            { id: 2, type: "Work", street: "456 Business Blvd", city: "Tampa", state: "FL", zip: "33602", isDefault: false },
        ],
        paymentMethods: [
            { id: 1, type: "Visa", last4: "4242", expiry: "12/26", isDefault: true },
            { id: 2, type: "Mastercard", last4: "8888", expiry: "03/25", isDefault: false },
        ],
        orders: [
            { id: "AF-93821", date: "Dec 15, 2024", items: 2, total: 1408.33, status: "Delivered" },
            { id: "AF-87234", date: "Nov 28, 2024", items: 1, total: 699.00, status: "Delivered" },
            { id: "AF-82119", date: "Oct 10, 2024", items: 3, total: 2150.00, status: "Delivered" },
        ]
    },
    {
        id: 2,
        name: "Sarah Connor",
        email: "sarah.c@example.com",
        phone: "(555) 098-7654",
        memberSince: "January 2022",
        totalSpent: 8320.00,
        ordersCount: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        addresses: [
            { id: 1, type: "Home", street: "789 Palm Ave", city: "Orlando", state: "FL", zip: "32801", isDefault: true },
        ],
        paymentMethods: [
            { id: 1, type: "Amex", last4: "1234", expiry: "08/27", isDefault: true },
        ],
        orders: [
            { id: "AF-91002", date: "Dec 10, 2024", items: 1, total: 1299.99, status: "Processing" },
            { id: "AF-85443", date: "Sep 22, 2024", items: 2, total: 899.00, status: "Delivered" },
        ]
    },
    {
        id: 3,
        name: "Mike Ross",
        email: "mike.ross@example.com",
        phone: "(555) 456-7890",
        memberSince: "June 2023",
        totalSpent: 3200.00,
        ordersCount: 2,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        addresses: [
            { id: 1, type: "Home", street: "321 Cypress Lane", city: "Miami", state: "FL", zip: "33101", isDefault: true },
        ],
        paymentMethods: [
            { id: 1, type: "Visa", last4: "9999", expiry: "11/25", isDefault: true },
        ],
        orders: [
            { id: "AF-88821", date: "Dec 1, 2024", items: 2, total: 1600.00, status: "Shipped" },
        ]
    },
];

export const SAVED_CARTS = [
    {
        id: "1024",
        customer: "John Smith",
        customerId: 1,
        date: "Today, 10:42 AM",
        items: [
            { id: 1, name: "Rawcliffe Sectional", price: 1299.99, qty: 1, variant: "Standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD86a0CGCWebZZNa7mC4EGEt1oszU7YdQtVmXsm180zdiZZzH973bN0lwhFVculdUra36uZ2Ig6zF0LTj2mBgYYce-vyCLr6bsOo0jPIg9irg2OHE1s2gFID0-hI4e2b5ddP6X9HMkgqbQp0tUPpPFtQ--oDMaaV5z02_B0-ftlgJ-5MTqoPLw-fvDabw0eII5FJC4eRAnEGaVeaECzGNxQfGPsvYTTYTP3OIcKvrIrcL4if7-yB06txuQwygVzdlAgkvtfhEOdPo7f" },
            { id: 4, name: "Mid-Century Accent Chair", price: 249.00, qty: 1, variant: "Velvet Blue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3nZ4r9_f3fqfL0yvHtCQsEs5vaw1Q_dOL4UWshiUejsCvIA0etohbKYc77KFJQpLyUIpQhDwlAvSNR9cLrsqW_SkF1e9a2MPR39mdMltDtPhSA5GyIr8cp9Lpn5SNi-nsYB7rMIYZ5A51bYpyUOXUHasT1Yd8R22IByCKAl4p2Krvwg88qpcDs-259wYXZgyK279XVCmqzzccDMcxGeVHrvCAnr2zdjJc4pW7JQMmr3ZCMJol3TD0SfOV3uovc6342HNd4s0WJV6" }
        ],
        total: 1548.99,
        status: "Active"
    },
    {
        id: "8821",
        customer: "Mike Ross",
        customerId: 3,
        date: "Yesterday, 4:15 PM",
        items: [
            { id: 2, name: "Maimz Contemporary Sofa", price: 699.00, qty: 2, variant: "Standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZbBtpdbEXs1lNQ31M0UaFOYndvCw-RfUo_pNWuR9oR8OAV9F3VA4uMyAyjkvr5q6pq8nkeocEWgIoxWifc7Aex5JJesOhmKwfqq1dAI1Ao8jTEA9OuL_1FdrGmlGNvdrFxVwh8pJOAbbSZHyqvIKGYekSmdJa73euciheScquAIlFKeHcSD0AWgOOidGqAu7jabuVQEtMxiTeaoXWf-Lr0swxmcZTOO-CPO6XBBwdR92Svo7wvGtOivctJkz4w3l_MIgHF7ZoZoZ" },
            { id: 3, name: "Dorsten Oversized Chair", price: 499.99, qty: 1, variant: "Standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsIsRoov8Afgf_n8Q9NE3wGw1jO2gB7WJu_P-ItI2lKxM8E4mnZ4qLs3jJUFcIPHUqUv82FvbX0kYYx-gToo0y7TlzWoip81rZCBgWbu6EhNzaZ53T-smNSGkUs-ojucw_ksVJyEv7l2z8v4Y_SU-WtzPBTjU9PX78XToUb-Ayge-ZNIe_Bqea3ln80fCbTP7b2XmBloThqzOsmwaFEhcbuuuReSibI-AJ1wZAunyyOANCarqdi-jBA3LYRZ8sJP79-0tKn4TGwi7H" }
        ],
        total: 1897.99,
        status: "Saved"
    },
    {
        id: "1019",
        customer: "Sarah Connor",
        customerId: 2,
        date: "Dec 15, 2024",
        items: [
            { id: 2, name: "Maimz Contemporary Sofa", price: 699.00, qty: 1, variant: "Standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZbBtpdbEXs1lNQ31M0UaFOYndvCw-RfUo_pNWuR9oR8OAV9F3VA4uMyAyjkvr5q6pq8nkeocEWgIoxWifc7Aex5JJesOhmKwfqq1dAI1Ao8jTEA9OuL_1FdrGmlGNvdrFxVwh8pJOAbbSZHyqvIKGYekSmdJa73euciheScquAIlFKeHcSD0AWgOOidGqAu7jabuVQEtMxiTeaoXWf-Lr0swxmcZTOO-CPO6XBBwdR92Svo7wvGtOivctJkz4w3l_MIgHF7ZoZoZ" }
        ],
        total: 699.00,
        status: "Pending"
    }
];
