import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentedetalleComponent } from './componentedetalle.component';

describe('ComponentedetalleComponent', () => {
  let component: ComponentedetalleComponent;
  let fixture: ComponentFixture<ComponentedetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentedetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
