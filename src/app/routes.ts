import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";

const routeConfig : Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },

    {
        path: 'details/:id',
        component: PhotoDetailsComponent,
        title: 'Details'
    }

];

export default routeConfig;