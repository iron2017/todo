import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFrontComponent } from './todo-front.component';

describe('TodoFrontComponent', () => {
  let component: TodoFrontComponent;
  let fixture: ComponentFixture<TodoFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
