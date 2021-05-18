aim = {
    info: {
        title: "Gevoel in balans",
        description: ".",
        termsOfService: "http://aliconnect.nl/terms/",
        contact: { email: "max.van.kampen@alicon.nl" },
        license: { name: "Apache 2.0", url: "http://www.apache.org/licenses/LICENSE-2.0.html" },
        version: "1.0.2"
    },
    css: {
        rules: {
            ".row.top.bar": "background-color:rgba(59,125,237,0.8); color:white;",
            ".row.top.fixed": "background-color:rgba(59,125,237,0.8);",
            ".row.aimbanner": "background-color:rgba(59,125,237,0.1);",
            ".row.footer": "background-color:rgba(59,125,237,0.2);"
        }
    },
    externalDocs: { description: "Find out more about Aliconnect", url: "https://aliconnect.nl" },
    servers: [ { url: "https://gevoelinbalans.aliconnect.nl/api" } ],
    tags: [],
	paths: {},
	components: {
        schemas: {
			Company: aim.components.schemas.Company,
            Contact: aim.components.schemas.Contact,
			Website: aim.components.schemas.Website,
			Webpage: aim.components.schemas.Webpage,
			Task: aim.components.schemas.Task,
            Map: aim.components.schemas.Map,
			System: aim.components.schemas.System,
        }
    },
    om: {
        nav: {
            items: {
                Admin: {
                    className: "admin", items: {
                        "Publish": { href: "#/admin/publish" },
                    }
                },
            },
        },
    },
}
