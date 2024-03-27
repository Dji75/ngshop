import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should truncate if length is greater than default', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('a'.repeat(60)) as string;
    expect(result.length).toBe(51);
    expect(result.slice(-1)).toBe('…');
  })

  it('should truncate if length is greater than parameter', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('a'.repeat(6), 5) as string;
    expect(result.length).toBe(6);
    expect(result.slice(-1)).toBe('…');
  })

  it('should not truncate if length is equal than parameter', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('a'.repeat(6), 6) as string;
    expect(result.length).toBe(6);
    expect(result.slice(-1)).not.toBe('…');
  })
  
  it('should not truncate if length is lower than parameter', () => {
    const pipe = new TruncatePipe();
    const result = pipe.transform('a'.repeat(4), 6) as string;
    expect(result.length).toBe(4);
    expect(result.slice(-1)).not.toBe('…');
  })
});
