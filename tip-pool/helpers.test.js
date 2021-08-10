describe("Payment test(with setup and tear-down)", function () {

    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    })

    it("should sum total bill amount of all payments on sumPaymentTotal()", function () {
        expect(sumPaymentTotal('billAmt')).toEqual(50);
    });

    it("should sum total tip amount of all payments on sumPaymentTotal()", function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
    });

    it("should calculate the correct tip percentage on calculateTipPercent()", function () {
        expect(calculateTipPercent(100, 50)).toEqual(50);
        expect(calculateTipPercent(100, 25)).toEqual(25);
    })

    it("should create new td from value and append to row on appendTd(tr, value)", function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'new');
        expect(newTr.childElementCount).toEqual(1);
    })

    it("should create delete button on appendDeleteBtn()", function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        expect(newTr.childElementCount).toEqual(1);
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        while (summaryTbody.firstChild) {
            summaryTbody.removeChild(summaryTbody.lastChild);
        }
        while (paymentTbody.firstChild) {
            paymentTbody.removeChild(paymentTbody.lastChild);
        }
        allPayments = {};
    })
})
