// data_news.js
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const data = [
  {
    id: 1,
    name: "National Training Event '25",
    slug: createSlug("National Training Event '25"), // "national-training-event-25"
    date: "October 1st",
    paragraph: "The three-day event kicked off on Friday, March 7th...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/copy_of_copy_of_img_6541.jpg",
  },
  {
    id: 2,
    name: "Thanksgiving 2024",
    slug: createSlug("Thanksgiving 2024"), // "thanksgiving-2024"
    date: "October 3rd",
    paragraph: "Proudly organised by our section's HR Department...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/thanksgiving2.jpg",
  },
  {
    id: 3,
    name: "National Training Event '25",
    slug: createSlug("National Training Event '25"), // "national-training-event-25"
    date: "October 1st",
    paragraph: "The three-day event kicked off on Friday, March 7th...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/copy_of_copy_of_img_6541.jpg",
  },
  {
    id: 4,
    name: "Thanksgiving 2024",
    slug: createSlug("Thanksgiving 2024"), // "thanksgiving-2024"
    date: "October 3rd",
    paragraph: "Proudly organised by our section's HR Department...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/thanksgiving2.jpg",
  },
  {
    id: 5,
    name: "National Training Event '25",
    slug: createSlug("National Training Event '25"), // "national-training-event-25"
    date: "October 1st",
    paragraph: "The three-day event kicked off on Friday, March 7th...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/copy_of_copy_of_img_6541.jpg",
  },
  {
    id: 6,
    name: "Thanksgiving 2024",
    slug: createSlug("Thanksgiving 2024"), // "thanksgiving-2024"
    date: "October 3rd",
    paragraph: "Proudly organised by our section's HR Department...",
    image:
      "https://unipi.esngreece.gr/sites/unipi.esngreece.gr/files/news/images/thanksgiving2.jpg",
  },
];

export default data;
