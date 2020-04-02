import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosCidadeComponent } from './anuncios-cidade.component';

describe('AnunciosCidadeComponent', () => {
  let component: AnunciosCidadeComponent;
  let fixture: ComponentFixture<AnunciosCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
