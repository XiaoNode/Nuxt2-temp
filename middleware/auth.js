import Cookies from "js-cookie";

export default function ({ redirect, store }) {
  const isAuthenticated = store.state.auth.username ? true : false;
  const hasLogined = store.state.isLogined;

  // let cookieStore=Cookies.get('store')
  // cookieStore? cookieStore=JSON.parse(cookieStore):null
  // let lg=cookieStore?.isLogined
  // console.log(lg)

  if (!isAuthenticated) {
    redirect({ name: "auth" });
  }
}
