
exports.handler = async (event) => {
    console.log(event);
    const bukrs = event.pathParameters.bukrs;
    const VWerke = new Map();
    VWerke.set("1000", "BAEV");
    VWerke.set("4000", "AVB");
    VWerke.set("7000", "AKB");
    const Vw = { 'Bukrs': bukrs, 'VwName': VWerke.get(bukrs) };

    const response = {
    
        statusCode: 200,
        //  Uncomment below to enable CORS requests
         headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*"
          }, 
        body: JSON.stringify(Vw),
    };
    return response;
};

