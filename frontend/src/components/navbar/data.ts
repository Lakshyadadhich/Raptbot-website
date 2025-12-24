import { NavItem } from "@/types/menu";
// import demo1 from "@/assets/img/demo/vl-demo-1.1.png";
// import demo2 from "@/assets/img/demo/vl-demo-1.2.png";
// import demo3 from "@/assets/img/demo/vl-demo-1.3.png";
// import demo4 from "@/assets/img/demo/vl-demo-1.4.png";

export const menuItems: NavItem[] = [
  // {
  //   label: "Home",

  //   megaMenuItems: [
  //     {
  //       image: demo1,
  //       items: [
  //         { label: "Multi Page", url: "/multi/index-1" },
  //         { label: "Single Page", url: "/single/index-1" },
  //       ],
  //     },
  //     {
  //       image: demo2,
  //       items: [
  //         { label: "Multi Page", url: "/multi/index-2" },
  //         { label: "Single Page", url: "/single/index-2" },
  //       ],
  //     },
  //     {
  //       image: demo3,
  //       items: [
  //         { label: "Multi Page", url: "/multi/index-3" },
  //         { label: "Single Page", url: "/single/index-3" },
  //       ],
  //     },
  //     {
  //       image: demo4,
  //       items: [
  //         { label: "Multi Page", url: "/multi/index-4" },
  //         { label: "Single Page", url: "/single/index-4" },
  //       ],
  //     },
  //   ],
  // },

  {
    label: "home",
    url: "/home",
  },

  {
    label: "about us",
    url: "/about",
  },
  {
    label: "services",
    url:"/services",
    children: [
    { label: "salesforce services", url: "/Salesforce-services" },
      { label: "digital transformation", url: "/Digital-transformation" },
      { label: "software development", url: "/Software-development" },
      { label: "managed services", url: "/Managed-services"},

      
    ],
  },
  {
    label: "careers",
    url : "/career",
    // children: [
    //   { label: "Team", url: "/team" },
    //   { label: "Faq", url: "/faq" },
    //   { label: "Contact", url: "/contact" },
      
    // ],
  },
  {
    label: "case studies",
    url: "/case-studies",
    // children: [
    //   { label: "Case Studies", url: "/case-studies" },
    // ],
  },
  // {
  //   label: "blog",
  //   url: "/blog" ,
  //   // children: [
  //   //   { label: "Blog", url: "/blog" },
      
  //   // ],
  // },
];
