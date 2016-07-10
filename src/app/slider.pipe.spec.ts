/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SliderPipe } from './slider.pipe';

describe('Pipe: Slider', () => {
  it('create an instance', () => {
    let pipe = new SliderPipe();
    expect(pipe).toBeTruthy();
  });
});
