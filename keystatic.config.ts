import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    news: collection({
      label: "News",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({ label: "Content" }),
        date: fields.date({ label: "Date" }),
      },
    }),
    events: collection({
      label: "Events",
      slugField: "title",
      path: "src/content/events/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.markdoc({ label: "Content" }),
        date: fields.date({ label: "Date" }),
      },
    }),
  },
});
