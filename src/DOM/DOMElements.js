const Title = {
    element: "h4",
};

const weatherIcon = {
    element: "img",
    attributes: {
        src: "#",
        alt: "",
        height: "50",
        width: "50",
    },
};

const temp = {
    element: "h5",
};

const hourElement = {
    element: "div",
    className: ["hour"],
    childNodes: [Title, weatherIcon, temp],
};

const dayElement = {
    element: "div",
    className: ["day"],
    childNodes: [Title, weatherIcon, temp]
};

export {hourElement, dayElement};