
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ loanAmt: 150000, loanDur: 30, loanRate: 4.5 })).toEqual('760.03');
  expect(calculateMonthlyPayment({ loanAmt: 300000, loanDur: 30, loanRate: 3.5 })).toEqual('1347.13');
});


it("should return a result with 2 decimal places", function () {
  expect(roundDecimals(1.093420923049)).toEqual('1.09');
  expect(roundDecimals(562031.132326356546)).toEqual('562031.13');
});

afterEach(function () {
  calculateMonthlyPayment({ loanAmt: 0, loanDur: 0, loanRate: 0 });
})
