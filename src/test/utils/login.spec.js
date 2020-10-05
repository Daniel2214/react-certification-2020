import login from "../../utils/login";

describe("Login", () => {
  it("retrieves valid user", async () => {

    const expected = { id: '123', name: 'Wizeline' }

    const user = await login(process.env.REACT_APP_TEST_USER, process.env.REACT_APP_TEST_PASSWORD)

    expect(user).toBeInstanceOf(Object);
    expect(user).toMatchObject(expected);

  });

  it("invalid credentials", async () => {

    await login("user", "password").catch((error) => {
      expect(error).toBe("Wrong credentials");
    });    
    
    
  });

});