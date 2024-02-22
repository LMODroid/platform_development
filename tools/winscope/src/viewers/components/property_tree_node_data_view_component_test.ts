/*
 * Copyright (C) 2024 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import {PropertyTreeNodeDataViewComponent} from './property_tree_node_data_view_component';

describe('PropertyTreeNodeDataViewComponent', () => {
  let fixture: ComponentFixture<PropertyTreeNodeDataViewComponent>;
  let component: PropertyTreeNodeDataViewComponent;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}],
      declarations: [PropertyTreeNodeDataViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTreeNodeDataViewComponent);
    component = fixture.componentInstance;
  });

  it('can be created', () => {
    expect(component).toBeTruthy();
  });
});