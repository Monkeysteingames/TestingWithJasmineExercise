describe("Payment test(with setup and tear-down)", function () {

    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    })

    it("should add new payment to allPayments on submitPaymentInfo()", function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
    })

    it("should create new payment on createCurPayment()", function () {
        let newPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        }
        expect(createCurPayment()).toEqual(newPayment);
    })

    it("should create new td and append to row on appendPaymentTable()", function () {
        let newPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        }
        appendPaymentTable(newPayment);

        expect(paymentTbody.childElementCount).toEqual(1);
    })

    it("should update payment table on appendPaymentTable()", function () {
        let newPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        }
        allPayments['payment1'] = newPayment;

        appendPaymentTable(newPayment);
        let newTd = document.querySelectorAll('#paymentTable tbody tr td');
        expect(newTd[0].innerText).toEqual('$50');
        expect(newTd[1].innerText).toEqual('$10');
    })

    afterEach(function () {
        let allPayments = {};
        while (summaryTbody.firstChild) {
            summaryTbody.removeChild(summaryTbody.lastChild);
        }
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.lastChild);
        }
    })
})

