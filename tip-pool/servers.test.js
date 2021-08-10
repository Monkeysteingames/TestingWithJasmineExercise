describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add server info to serverTable on updateServerTable', function () {
    submitServerInfo();

    expect(serverTbody.childElementCount).toEqual(2);
  })

  afterEach(function () {
    while (serverTbody.firstChild) {
      serverTbody.removeChild(serverTbody.lastChild);
    }
  });
});
