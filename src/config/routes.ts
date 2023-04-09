import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Intro from '../pages/Intro'
import EditData from '../pages/EditData'
import Seoul from '../pages/Seoul'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}


const routes: RouteType[] = [
    {
      path: "",
      component: Intro,
      name: "Intro Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      // this is set to "false" to prevent a constant popup
      protected: false,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    },

    {
      path: "/intro",
      component: Home,
      name: "Home",
      protected: false,
    },
    {
      path: "/editdata",
      component: EditData,
      name: "Edit Data",
      protected: false,
    },

    {
      path: "/seoul",
      component: Seoul,
      name: "Seoul",
      protected: false,
    }

  ]

  export default routes