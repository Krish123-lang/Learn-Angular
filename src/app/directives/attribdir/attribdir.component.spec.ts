import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribdirComponent } from './attribdir.component';

describe('AttribdirComponent', () => {
  let component: AttribdirComponent;
  let fixture: ComponentFixture<AttribdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttribdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttribdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
