const mockedUser = {
  id: '123',
  name: 'Wizeline'
};

export default async function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject("Wrong credentials");
    }, 500);
  });
}