
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { Register1Component } from './views/register/register1/register1.component';
import { LoginComponent } from './views/login/login.component';
import { AddPlanComponent } from './views/plan/add-plan/add-plan.component';
import { ViewPlanComponent } from './views/plan/view-plan/view-plan.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },
  { path: 'register', children:
  [
    { path: 'register1', component: Register1Component},
  ]
},
{ path: 'plan', children:
[
  { path: 'addPlan', component: AddPlanComponent},
]
},
{ path: 'plan', children:
[
  { path: 'viewPlan', component: ViewPlanComponent},
]
},
  { path: 'login', component: LoginComponent},
  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
