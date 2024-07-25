import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { TemplateReferenceComponent } from "./template-reference/template-reference.component";
import { CounterComponent } from "./counter/counter.component";
import { TwoWayComponent } from "./two-way/two-way.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { StructdirComponent } from "./directives/structdir/structdir.component";
import { AttribdirComponent } from "./directives/attribdir/attribdir.component";
import { FirstComponent } from "./routing/first/first.component";
import { SecondComponent } from "./routing/second/second.component";
import { NavbarComponent } from "./routing/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, NgclassComponent, TemplateReferenceComponent, CounterComponent, TwoWayComponent, DataBindingComponent, StructdirComponent, AttribdirComponent, FirstComponent, SecondComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
