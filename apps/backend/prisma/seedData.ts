// first and last name of a person
type EmployeeSeed = { firstName: string; lastName: string; };

// departments with their employees
export const departmentsSeedData: { name: string; employees: EmployeeSeed[] }[] = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robbins" },
            { firstName: "Madeleine", lastName: "Madden" }
        ]
    },
    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            { firstName: "Priyanka", lastName: "Bose" },
            { firstName: "Hammed", lastName: "Animashaun" },
            { firstName: "Álvaro", lastName: "Morte" },
            { firstName: "Taylor", lastName: "Napier" },
            { firstName: "Alan", lastName: "Simmonds" }
        ]
    },
    {
        name: "Communications",
        employees: [
            { firstName: "Gil", lastName: "Cardinal" },
            { firstName: "Richard J.", lastName: "Lewis" }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            { firstName: "Randy", lastName: "Bradshaw" },
            { firstName: "Tracey", lastName: "Cook" },
            { firstName: "Lubomir", lastName: "Mykytiuk" }
        ]
    },
    {
        name: "Facilities",
        employees: [
            { firstName: "Dakota", lastName: "House" },
            { firstName: "Lori Lea", lastName: "Okemah" },
            { firstName: "Renae", lastName: "Morrisseau" },
            { firstName: "Rick", lastName: "Belcourt" }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            { firstName: "Selina", lastName: "Hanusa" },
            { firstName: "Buffy", lastName: "Gaudry" },
            { firstName: "Shaneen Ann", lastName: "Fox" },
            { firstName: "Allan", lastName: "Little" },
            { firstName: "Danny", lastName: "Rabbit" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Jesse Ed", lastName: "Azure" },
            { firstName: "Stacy", lastName: "Da Silva" },
            { firstName: "Vladimír", lastName: "Valenta" },
            { firstName: "Samone", lastName: "Sayeses-Whitney" },
            { firstName: "Paul", lastName: "Coeur" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "Graham", lastName: "Greene" },
            { firstName: "Sandika", lastName: "Evergreen" },
            { firstName: "Jennifer", lastName: "Rodriguez" },
            { firstName: "Aiyana", lastName: "Littlebear" },
            { firstName: "Inara", lastName: "Thunderbird" },
            { firstName: "Kaya", lastName: "Runningbrook" },
            { firstName: "Elara", lastName: "Firehawk" },
            { firstName: "Siona", lastName: "Moonflower" },
            { firstName: "Kaiyu", lastName: "Greywolf" },
            { firstName: "Ayawamat", lastName: "Nightwind" },
            { firstName: "Tala", lastName: "Braveheart" },
            { firstName: "Iniko", lastName: "Stonebear" },
            { firstName: "Onatah", lastName: "Redhawk" }
        ]
    }
];

// leadership roles; roles without an employee are vacant
export const roleSeedData: { title: string; employee?: EmployeeSeed }[] = [
    { title: "CEO / Chair of Board", employee: { firstName: "Jo-Anne", lastName: "Sinclair" } },
    { title: "COO / VP Operations", employee: { firstName: "Jackson", lastName: "Smith" } },
    { title: "CFO / VP Administration", employee: { firstName: "Susan", lastName: "Thomas" } },
    { title: "VP Client Services", employee: { firstName: "Richa", lastName: "Kaur" } },
    { title: "CIO", employee: { firstName: "Josee", lastName: "Benjamin" } },
    { title: "VP Sales & Marketing", employee: { firstName: "Vincent", lastName: "Grey" } },
    { title: "Director Financial and Audit Services", employee: { firstName: "Rupa", lastName: "Kharki" } },
    { title: "Director Human Resources", employee: { firstName: "Xun", lastName: "Kuang" } },
    { title: "Director Legal Services / General Counsel", employee: { firstName: "Stien", lastName: "Pedersen" } },
    { title: "Director Information Technology", employee: { firstName: "Sandra", lastName: "Bear" } },
    { title: "Director Information Security and CISSO", employee: { firstName: "Gus", lastName: "Blue" } },
    { title: "Director Accounting", employee: { firstName: "Sam", lastName: "Kong" } },
    { title: "Director Physical Security", employee: { firstName: "Valentine", lastName: "Smith" } },
    { title: "Director Facilities", employee: { firstName: "Mariya", lastName: "Kaperski" } },
    { title: "Manager, Business Continuity and Disaster Recovery", employee: { firstName: "Abd", lastName: "al-Hamid Alami" } },
    { title: "Manager, Internal Audit", employee: { firstName: "Victoria", lastName: "Gray" } },
    { title: "Chief Architect", employee: { firstName: "Cheryl", lastName: "Guru" } },
    { title: "Manager, Security Architecture", employee: { firstName: "Jean", lastName: "Ngoy" } },
    { title: "Solution Architect, Online Banking", employee: { firstName: "Kris", lastName: "Gold" } },
    { title: "Manager, Application Solutions", employee: { firstName: "Isaac", lastName: "Smith" } },
    { title: "Lead Developer, Online Banking", employee: { firstName: "Payton", lastName: "Frost" } },
    { title: "Manager, Operational Risk", employee: { firstName: "Samantha", lastName: "Nettle" } },
    { title: "Manager, Vendor Relations", employee: { firstName: "Yolanda", lastName: "Ferreira" } },
    { title: "Manager, Purchasing", employee: { firstName: "Samir", lastName: "Hassan" } },
    { title: "Manager, Communications", employee: { firstName: "Yuna", lastName: "Aikawa" } },
    { title: "Manager, Customer Experience and Community Engagement", employee: { firstName: "Jonathan", lastName: "Carberry" } },
    { title: "Manager of Sales", employee: { firstName: "Roland", lastName: "Wei" } },
    { title: "Manager, Marketing", employee: { firstName: "Pran", lastName: "Singh" } },
    { title: "Business Analyst, Online Banking", employee: { firstName: "Linda", lastName: "Analyst" } },
    { title: "Manager, Contract Management", employee: { firstName: "Esra", lastName: "Sedge" } },
    { title: "Manager, Compliance Management", employee: { firstName: "Pranee", lastName: "Tan" } },
    { title: "Manager IT End User Service Desk", employee: { firstName: "Karmen", lastName: "Spruce" } },
    { title: "Manager IT End User Computing", employee: { firstName: "Haydar", lastName: "Katirci" } },
    { title: "Manager IT Telecom and Infrastructure", employee: { firstName: "Jill", lastName: "Harkness" } },
    { title: "Manager, Data Center and Hosting Services", employee: { firstName: "Tim", lastName: "Morrison" } },
    { title: "Manager of IT Risk Management", employee: { firstName: "Aleksandr", lastName: "Milosevic" } },
    { title: "Manager IT, Project Management Office", employee: { firstName: "Jim", lastName: "Wingnut" } },

    // vacant roles
    { title: "Vacant Role" },
    { title: "Vacant Role" },
    { title: "Vacant Role" },
    { title: "Vacant Role" },
    { title: "Vacant Role" },
    { title: "Vacant Role" }
];