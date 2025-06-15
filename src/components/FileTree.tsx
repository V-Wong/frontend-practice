import { useState } from "react";

export type FileTreeItem = Folder | File;

type Folder = {
  name: string;
  items: FileTreeItem[];
};

type File = {
  name: string;
};

type FileTreeItemProps = {
  root: FileTreeItem;
};

type FileTreeProps = FileTreeItemProps;

const isFolder = (maybeFolder: FileTreeItem): maybeFolder is Folder => {
  return !!(maybeFolder as Folder).items;
};

const FileTreeItem = ({ root }: FileTreeItemProps) => {
  const [open, setIsOpen] = useState(false);

  if (!isFolder(root)) {
    return <li className="pl-2">{root.name}</li>;
  }

  return (
    <>
      <span onClick={() => setIsOpen(!open)}>
        {open ? "⌄" : ">"} {root.name}
      </span>
      {open && (
        <ul className="pl-4">
          {root.items.map((child) => (
            <FileTree root={child} />
          ))}
        </ul>
      )}
    </>
  );
};

const FileTree = ({ root }: FileTreeProps) => (
  <div className="w-full max-w-md">
    <FileTreeItem root={root} />
  </div>
);

export default FileTree;
