import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgprogramaComponent } from './argprograma.component';

describe('ArgprogramaComponent', () => {
  let component: ArgprogramaComponent;
  let fixture: ComponentFixture<ArgprogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgprogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgprogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
