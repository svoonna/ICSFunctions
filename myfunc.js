Office.initialize = function (reason) {
    function getrandom(x) {
        if (x == "phone")
            return chance.phone();
        else if (x == "zip")
            return chance.zip();
        else if (x == "address")
            return chance.address();
        else
            return "not supported";
    }

    Excel.Script.CustomFunctions = {};
    Excel.Script.CustomFunctions["TEST"] = {};
    Excel.Script.CustomFunctions["TEST"]["RANDOM"] = {
        call: getrandom,
        description: "Create various random data (phone, zip, etc)",
        result: {
            resultType: Excel.CustomFunctionValueType.string,
            resultDimensionality: Excel.CustomFunctionDimensionality.scalar,
        },
        parameters: [
            {
                name: "type of data",
                description: "Which type of data you need (phone, zip, etc)",
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