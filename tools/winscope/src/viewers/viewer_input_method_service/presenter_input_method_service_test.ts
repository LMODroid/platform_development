/*
 * Copyright (C) 2022 The Android Open Source Project
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
import {HierarchyTreeBuilder} from 'test/unit/hierarchy_tree_builder';
import {TraceType} from 'trace/trace_type';
import {PropertySource} from 'trace/tree_node/property_tree_node';
import {executePresenterInputMethodTests} from 'viewers/common/presenter_input_method_test_utils';
import {PresenterInputMethodService} from './presenter_input_method_service';

describe('PresenterInputMethodService', () => {
  describe('PresenterInputMethod tests:', () => {
    const selectedTree = new HierarchyTreeBuilder()
      .setId('InputMethodService')
      .setName('entry')
      .setProperties({where: 'location', elapsedNanos: 0})
      .addChildProperty({name: 'test default property', value: 0, source: PropertySource.DEFAULT})
      .build();

    executePresenterInputMethodTests(
      selectedTree,
      'elapsedNanos',
      [2, 1, 3],
      true,
      PresenterInputMethodService,
      TraceType.INPUT_METHOD_SERVICE
    );
  });
});
