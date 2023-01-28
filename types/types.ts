export type BlogPost = {
  timestamp: number;
  author: string;
  title: string;
  location: string;
  date: string;
  content: (Paragraph | Image)[];
};

export type Paragraph = {
  title: string;
  text: string;
  type: string;
};

export type Image = {
  path: string;
  text: string;
  type: string;
};
