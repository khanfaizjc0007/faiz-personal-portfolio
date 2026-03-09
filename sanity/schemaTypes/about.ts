import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "About Text",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
      description: "Main about/bio text shown on the About page.",
    }),
    defineField({
      name: "skills",
      title: "Expertise Sections",
      type: "array",
      of: [
        defineField({
          name: "skillGroup",
          title: "Skill Group",
          type: "object",
          fields: [
            { name: "category", title: "Category", type: "string" },
            {
              name: "items",
              title: "Items",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        }),
      ],
      description: "Expertise categories and items.",
    }),
    defineField({
      name: "experience",
      title: "Experience Timeline",
      type: "array",
      of: [
        defineField({
          name: "experienceItem",
          title: "Experience Item",
          type: "object",
          fields: [
            { name: "year", title: "Year", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "company", title: "Company", type: "string" },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      bio: "bio",
    },
    prepare(selection) {
      const { bio } = selection as { bio?: string }
      return {
        title: "About Page",
        subtitle: bio ? bio.slice(0, 80) + (bio.length > 80 ? "…" : "") : "",
      }
    },
  },
});

