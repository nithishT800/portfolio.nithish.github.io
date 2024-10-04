import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EmployerLayoutComponent } from './employer-layout/employer-layout.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EmployerTeamComponent } from './employer-team/employer-team.component';
import { EmployerTransactionHistoryComponent } from './employer-transaction-history/employer-transaction-history.component';
import { EmployerManagePaymentComponent } from './employer-manage-payment/employer-manage-payment.component';
import { EmployerMessagesComponent } from './employer-messages/employer-messages.component';
import { EmployerNotificationsComponent } from './employer-notifications/employer-notifications.component';
import { EmployerSettingsComponent } from './employer-settings/employer-settings.component';


export const routes: Routes = [
    {path:'', component:EmployerLayoutComponent, children: [
        {path: '', redirectTo: 'dashboard', pathMatch:'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'create-project', redirectTo: 'create-project/detail', pathMatch:'full'},
        {path: 'create-project/:step', component: CreateProjectComponent},
        {path: 'projects/:projects_type', component: ProjectListComponent},
        {path: 'projects', redirectTo: 'projects/all', pathMatch:'full'},
        {path: 'project-detail/:project_id/:section', component: ProjectDetailComponent},
        {path: 'teams', component: EmployerTeamComponent},
        {path: 'transactions', component: EmployerTransactionHistoryComponent},
        {path: 'payment-method', component: EmployerManagePaymentComponent},
        {path: 'messages', component: EmployerMessagesComponent},
        {path: 'notifications', component: EmployerNotificationsComponent},
        {path: 'settings', component: EmployerSettingsComponent},
    ]}
];
