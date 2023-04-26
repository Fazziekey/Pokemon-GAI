export const PAGE_STATUS = {
    login: 0,
    home: 1,
};

export const PATHS = [
    { to: "/home/overview", text: "Overview" },
    { to: "/home/create", text: "Create" },
    { to: "/home/gallery", text: "Gallery" },
    { to: "/home/friends", text: "Friends" },
];

export const PROFILE_INFO_LIST = [
    { emoji: "✅", label: "Age:" },
    { emoji: "✨", label: "Role:" },
    { emoji: "😍", label: "Like:" },
    { emoji: "📖", label: "Motto:" },
    { emoji: "📧", label: "Contact:" },
];

export const ATTRIBUTE_TYPE = {
    number: 0,
    category: 1,
};

export const ATTRIBUTE_LIST = [
    {
        title: "Property",
        value: "Water",
        type: ATTRIBUTE_TYPE.category
    },
    {
        title: "HP",
        value: 50,
        type: ATTRIBUTE_TYPE.number
    },
    {
        title: "Attack",
        value: 60,
        type: ATTRIBUTE_TYPE.number
    },
    {
        title: "IQ",
        value: 70,
        type: ATTRIBUTE_TYPE.number
    },
    {
        title: "MBTI",
        value: "ISTJ",
        type: ATTRIBUTE_TYPE.category
    }
];
