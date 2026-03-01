import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    // 1. Title
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 2. Description (Short)
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // Full Description
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    // Category
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "UI/UX Design", value: "ui-ux-design" },
          { title: "Vibe Coding Projects", value: "vibe-coding-projects" },
          { title: "Logo Design Projects", value: "logo-design-projects" },
          { title: "Graphic Design Projects", value: "graphic-design-projects" },
        ],
        layout: "dropdown",
      },
    }),

    // 3. Tags
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // 4. Images
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
        name: "completionYear",
        title: "Completion Year",
        type: "number",
        validation: (Rule) =>
          Rule.required().min(2000).max(new Date().getFullYear()),
      }),
    // Thumbnail
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ✅ NEW FIELD — Client Problem
    defineField({
      name: "clientProblem",
      title: "Problem Client Faced",
      type: "array",
      of: [{ type: "block" }],
      description: "Describe the core challenge or issue the client had.",
    }),

    // ✅ NEW FIELD — Your Solution
    defineField({
      name: "solution",
      title: "How I Resolved the Issue",
      type: "array",
      of: [{ type: "block" }],
      description: "Explain your approach and how you solved the problem.",
    }),

    // 6. Features
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),

    // 7. Technologies Used
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // 8. My Contribution
    defineField({
      name: "contribution",
      title: "My Contribution",
      type: "array",
      of: [{ type: "block" }],
    }),

    // Links
    defineField({
      name: "liveUrl",
      title: "Live Website URL",
      type: "url",
    }),

    defineField({
      name: "githubUrl",
      title: "GitHub Repository",
      type: "url",
    }),

    // Client
    defineField({
      name: "client",
      title: "Client / Company",
      type: "string",
    }),

    // Role
    defineField({
      name: "role",
      title: "Your Role",
      type: "string",
    }),

    // Project Type
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Freelance", value: "freelance" },
          { title: "Full-Time Job", value: "job" },
          { title: "Personal Project", value: "personal" },
          { title: "Open Source", value: "opensource" },
        ],
      },
    }),

    // Status
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
        ],
      },
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text" },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "thumbnail",
      subtitle: "client",
    },
  },
  
});