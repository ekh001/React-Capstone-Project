import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

import Intro from '../pages/Intro'
import Seoul from '../pages/Seoul'
import Busan from '../pages/Busan'

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
      path: "/intro",
      component: Home,
      name: "Home",
      protected: false,
    },

    {
      path: "/seoul",
      component: Seoul,
      name: "Seoul",
      protected: false,
    },

    {
      path: "/busan",
      component: Busan,
      name: "Busan",
      protected: false,
    }


  ]

  export default routes