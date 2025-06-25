const assert = require("assert");

describe("Feature Reqres", function () {

  it("GET List Users", async function () {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.page, 2);
    assert.strictEqual(data.data[0].id, 7);
    assert.strictEqual(data.data[0].email, "michael.lawson@reqres.in");
  });

  it("POST Create User", async function () {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        name: "shinta",
        job: "leader"
      })
    });

    const data = await response.json();
    assert.strictEqual(response.status, 201);
    assert.strictEqual(data.name, "shinta");
    assert.strictEqual(data.job, "leader");
  });
});
