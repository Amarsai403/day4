import { TestPPipe } from './test-p.pipe';

describe('TestPPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPPipe();
    expect(pipe).toBeTruthy();
  });
});
