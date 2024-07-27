import { Routes } from '@angular/router';
import { FirstComponent } from './routing/first/first.component';
import { SecondComponent } from './routing/second/second.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { UserComponent } from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttribdirComponent } from './directives/attribdir/attribdir.component';
import { StructdirComponent } from './directives/structdir/structdir.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'template-reference', component: TemplateReferenceComponent },
    { path: 'two-way', component: TwoWayComponent },
    { path: 'user', component: UserComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'attribdir', component: AttribdirComponent },
    { path: 'structdir', component: StructdirComponent },
    { path: 'class', component: NgclassComponent },
    { path: 'controlflow', component: ControlflowComponent },
    { path: 'pipes', component: PipesComponent },
];
