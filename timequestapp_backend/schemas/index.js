export default {
    name: "exercise",
    title: "exercise",
    type: "document",
    fields: [
        {
            name: "title",
            title: "title",
            type: "string",
        },
        {
            name: "background",
            title: "background",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "description",
            title: "description",
            type: "string",
        },
        {
            name: "audio",
            title: "audio",
            type: "file"
        },
    ]
}