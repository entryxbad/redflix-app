import {
  Auth,
  Favorites,
  Home,
  Profile,
  Search,
  Trending
} from '@/components/ui'

import { adminRoutes } from './admin.routes'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Auth',
    component: Auth
  },
  {
    name: 'Favorites',
    component: Favorites
  },
  {
    name: 'Profile',
    component: Profile
  },
  {
    name: 'Trending',
    component: Trending
  },
  {
    name: 'Search',
    component: Search
  }
]

export const routes = [...userRoutes, ...adminRoutes]
