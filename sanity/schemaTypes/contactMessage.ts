import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'Contact Message',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'email', type: 'string', title: 'Email' }),
    defineField({ name: 'subject', type: 'string', title: 'Subject' }),
    defineField({ name: 'message', type: 'text', title: 'Message' }),
    defineField({ name: 'submittedAt', type: 'datetime', title: 'Submitted At', readOnly: true }),
  ],
  preview: {
    select: { name: 'name', subject: 'subject' },
    prepare: ({ name, subject }) => ({
      title: subject || 'No subject',
      subtitle: name,
    }),
  },
})
