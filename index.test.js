jest.mock('../request');

import * as user from '../user';


it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => expect(data).toBe('Mark'));
});

it('works with resolves', () => {
    expect.assertions(1);
    return expect(user.getUserName(5)).resolves.toBe('Paul');
  });
  
  it('works with async/await', async () => {
    expect.assertions(1);
    const data = await user.getUserName(4);
    expect(data).toBe('Mark');
  });
  
  it('works with async/await and resolves', async () => {
    expect.assertions(1);
    await expect(user.getUserName(5)).resolves.toBe('Paul');
  });
  it('тестирование ошибок с rejects', () => {
    expect.assertions(1);
    return expect(user.getUserName(3)).rejects.toEqual({
      error: 'User with 3 not found.',
    });
  });
  
  it('тестирование ошибок с async/await и rejects', async () => {
    expect.assertions(1);
    await expect(user.getUserName(3)).rejects.toEqual({
      error: 'User with 3 not found.',
    });
  });
  