import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Singleton About page – always opens the same document
      S.listItem()
        .title("About Page")
        .id("aboutPageSingleton")
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId("aboutPage") // fixed ID so only one document is used
        ),

      // Orderable Projects list
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects (drag to reorder)",
        S,
        context,
      }),

      // Other document types except ones we handle above
      ...S.documentTypeListItems().filter(
        (listItem) => !["project", "aboutPage"].includes(listItem.getId() ?? "")
      ),
    ]);
