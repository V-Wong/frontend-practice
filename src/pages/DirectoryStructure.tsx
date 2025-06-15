import FileTree, { type FileTreeItem } from "../components/FileTree";
import Page from "../Page";

const SAMPLE_DATA: FileTreeItem = {
  name: "root",
  items: [
    {
      name: "level 1",
      items: [
        {
          name: "child of level 1",
          items: [
            { name: "grandchild of level 1" },
            { name: "another grandchild of level 1" },
          ],
        },
      ],
    },
  ],
};

const DirectoryStructure = () => (
  <Page>
    <h1>File Tree</h1>
    <FileTree root={SAMPLE_DATA} />
  </Page>
);

export default DirectoryStructure;
