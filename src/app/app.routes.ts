import { Routes } from '@angular/router';
import { Mainstr } from './mainstr/mainstr';
// import { Home } from './home/home';
import { About } from './about/about';
import { Wildcard } from './wildcard/wildcard';

export const routes: Routes = [
    // { path: "", redirectTo: "/", pathMatch: "full" },
    // {
    //     path: "",
    //     component: Mainstr,
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: "",
    //             pathMatch: "full"
    //         },
            // { path: "home", component: Home },
            // { path: "about", component: About },
            // { path: "dashboard", component: Dashboard },

    //     ]
    // },
    {path : "dashboard", loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
        children: [
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full"
            },
            {path: "home", loadComponent: () => import('./home/home').then(m => m.Home) },
            {path : "main", loadComponent: () => import('./mainstr/mainstr').then(m => m.Mainstr) },
            {path : "rxjs", loadComponent : () => import('./rxjsObservable/rxjs-observable').then(m => m.RxjsObservable)}
        ]
     },
    // {path : "home", loadComponent: () => import('./home/home').then(m => m.Home) },
    {path : "about/:id", loadComponent: () => import('./about/about').then(m => m.About) },

    {path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "**", component: Wildcard },
];

// export const routes: Routes = [
//   { path: "", redirectTo: "home", pathMatch: "full" },
// //   {
// //     path: "main",
// //     component: Mainstr,
// //     children: [
//       { path: "home", component: Home },        // default child route
//       { path: "about", component: About }   // relative child route
// //     ]
// //   },
// ];
