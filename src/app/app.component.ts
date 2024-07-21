import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { TemplateReferenceComponent } from "./template-reference/template-reference.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, NgclassComponent, TemplateReferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
