const fs = require("fs");

const themePath = "./theme/theme.json";

const loadTheme = () => {
    try {
        return JSON.parse(fs.readFileSync(themePath, "utf-8"));
    }

    catch(err) {
        return [];
    }
}

const updateTheme = (req, res) => {
    console.log("Updating Theme...");

    const theme = loadTheme();
  
    if (req.body.theme != null) {
        theme[0] = req.body;
        fs.writeFileSync(themePath, JSON.stringify(theme));
    }
    
    res.json({ data: loadTheme() });
}

module.exports = { updateTheme };