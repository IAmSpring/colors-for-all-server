const Color = require('../../models/color');

module.exports = {
    colors: () => {
        return Color.find()
        .then(colors => {
            return colors.map(color => {
                return { ...color._doc, _id: color.id };
            });
        })
        .catch(err => {
            throw err;
        });
    },
    createColor: (args) => {
        const color = new Color({
            name: args.colorInput.name,
            category: args.colorInput.category,
            red: args.colorInput.red,
            green: args.colorInput.green,
            blue: args.colorInput.blue,
            hex: args.colorInput.hex                    
        });
        return color
        .save()
        .then(result => {
            console.log(result);
            return { ...result._doc, _id: result.id };
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    }
}