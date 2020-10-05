import Youtube from "../../api/Youtube";

// Do not add the async keyword here, as it does nothing
describe("Youtube API", () => {
  // You can provide the async keyword to the test case
  it("retrieves Youtube videos", async () => {

    const response = await Youtube.get("/search", {
      params: {
        q: "Perro",
      },
    });

    expect(response.data.items).toBeInstanceOf(Array);
    expect(response.data.items.length).toBe(16);
  });

});