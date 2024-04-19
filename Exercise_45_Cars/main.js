// make function
function storecarInfo(Manufacturer, Model, ...extraoption) {
    // make object
    const carinfo = {
        Manufacturer,
        Model,
        ...Object.assign({}, ...extraoption)
    };
    return carinfo;
}
let carSpec = storecarInfo("Audi", "e-tron GT", { Color: "Tango Red metallic" }, { Year: 2024 }, { Price: " $ 147,100" });
console.log(carSpec);
export {};
