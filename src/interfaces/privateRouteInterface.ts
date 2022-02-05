export interface PrivateRouteInterface {
    component: React.FC
    token: string,
    role: string
    path:string
    roles:string[]
  }