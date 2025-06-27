export interface links {
  label: string;
  url: string;
  subLinks?: links[];
}

export const TopbarLinks: links[] = [
  {
    label: "Home",
    url: "/",
  },

  {
    label: "Contact",
    url: "/contact",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Sign Up",
    url: "/signup",
    subLinks: [
      { label: "lorem", url: "/" },
      { label: "lorem", url: "/" },
    ],
  },
];

export const SidebarLinks: links[] = [
  {
    label: "Sports & Outdoor",
    url: "/",
  },

  {
    label: "Electronics",
    url: "/contact",
  },
  {
    label: "Men’s Fashion",
    url: "/about",
  },
  {
    label: "Woman’s Fashion",
    url: "/signup",
    subLinks: [
      { label: "lorem", url: "/" },
      { label: "lorem", url: "/" },
    ],
  },
];
