Office.initialize = function (reason) {
    //function getrandom(x) {
    //    if (x == "phone")
    //        return chance.phone();
    //    else if (x == "zip")
    //        return chance.zip();
    //    else if (x == "address")
    //        return chance.address();
    //    else
    //        return "not supported";
    //}

    Excel.Script.CustomFunctions = {};
    Excel.Script.CustomFunctions["ICS"] = {};
    Excel.Script.CustomFunctions["ICS"]["ISPRIME"] = {
        call: ISPRIME,
        description: "determines whether a number is prime",
        result: {
            resultType: Excel.CustomFunctionValueType.boolean,
            resultDimensionality: Excel.CustomFunctionDimensionality.scalar,
        },
        parameters: [
            {
                name: "number",
                description: "the number to be evaluated",
                valueType: Excel.CustomFunctionValueType.string,
                valueDimensionality: Excel.CustomFunctionDimensionality.scalar,
            }
        ]
    };

    Excel.run(function (context) {
        context.workbook.customFunctions.addAll();
        return context.sync().then(function () { });
    }).catch(function (error) { });
};