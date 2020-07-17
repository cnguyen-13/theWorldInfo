const addCommasToNumber = require("../../HelperFunctions/addCommasToNumber");

test("Testing addCommasToNumber Function:", () => {
    expect(addCommasToNumber(1234567890)).toBe("1,234,567,890");
    expect(addCommasToNumber(514291)).toBe("514,291");
    expect(addCommasToNumber(9)).toBe("9");
    expect(addCommasToNumber(24)).toBe("24");
    expect(addCommasToNumber(197)).toBe("197");
    expect(addCommasToNumber(2491)).toBe("2,491");
    expect(addCommasToNumber(52912)).toBe("52,912");
    expect(addCommasToNumber(952912)).toBe("952,912");
    expect(addCommasToNumber(8157212)).toBe("8,157,212");
    expect(addCommasToNumber(189572891521)).toBe("189,572,891,521");
});
