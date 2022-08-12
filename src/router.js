import { createWebHistory, createRouter } from "vue-router";
import MainPage from "./components/MainPage.vue";
import PostList from "./components/PostList.vue";
import DetailPage from "./components/DetailPage.vue";
import AuthorCompo from "./components/AuthorCompo.vue";
import CommentCompo from "./components/CommentCompo.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/list",
    component: PostList,
  },
  {
    path: "/detail/:id(\\d+)",
    component: DetailPage,
    children: [
      {
        path: "author",
        component: AuthorCompo,
      },
      {
        path: "comment",
        component: CommentCompo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
