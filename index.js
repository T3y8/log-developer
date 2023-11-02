module.exports = {
    log: async (msg, color, background) => {
        if(!color) color = `white`;
        let ccolor = color.toLowerCase();
        let logSystem = ``;
        let logSystem2 = ``;
        if(!background) background = ``;
        let bbackground = background.toLowerCase();
        if(bbackground === `red`){
            logSystem2 += `\x1b[41m`;
        } else if(bbackground === `green`){
            logSystem2 += `\x1b[42m`;
        } else if(bbackground === `yellow`){
            logSystem2 += `\x1b[43m`;
        } else if(bbackground === `blue`){
            logSystem2 += `\x1b[44m`;
        } else if(bbackground === `magenta`){
            logSystem2 += `\x1b[45m`;
        } else if(bbackground === `cyan`){
            logSystem2 += `\x1b[46m`;
        } else if(bbackground === `white`){
            logSystem2 += `\x1b[47m`;
        } else if(bbackground === `gray`){
            logSystem2 += `\x1b[100m`;
        }
        if(ccolor === `red`){
            logSystem += `\x1b[31m`;
        } else if(ccolor === `green`){
            logSystem += `\x1b[32m`;
        } else if(ccolor === `yellow`){
            logSystem += `\x1b[33m`;
        } else if(ccolor === `blue`){
            logSystem += `\x1b[34m`;
        } else if(ccolor === `magenta`){
            logSystem += `\x1b[35m`;
        } else if(ccolor === `cyan`){
            logSystem += `\x1b[36m`;
        } else if(ccolor === `white`){
            logSystem += `\x1b[37m`;
        } else if(ccolor === `gray`){
            logSystem += `\x1b[90m`;
        }
        return console.log(logSystem + logSystem2 + `%s\x1b[0m`, msg);
    },
    tables: {
        above: async () => {
            return `╔════════════════════════════════════════════════════════════════╗`;
        },
        middle: async (text, value) => {
            let textCount = text.length;
            let spaces = 32 - Number(textCount);
            let spaces1 = Math.floor(spaces / 2);
            let spaces2 = Math.floor(spaces / 2);
            if (!spaces1 + spaces2 + textCount === 32) spaces2++;
            let string = ``;
            while (spaces1 > 0) {
                string += ` `;
                spaces1--;
            }
            string += text;
            while (spaces2 > 0) {
                string += ` `;
                spaces2--;
            }
            let textCount1 = value.length;
            let spaces13 = 32 - Number(textCount1);
            let spaces11 = Math.floor(spaces13 / 2);
            let spaces12 = Math.floor(spaces13 / 2);
            if (!spaces11 + spaces12 + textCount1 === 32) spaces12++;
            let string2 = ``;
            while (spaces11 > 0) {
                string2 += ` `;
                spaces11--;
            }
            string2 += value;
            while (spaces12 > 0) {
                string2 += ` `;
                spaces12--;
            }
            if(!textCount % 2 === 0 && !textCount1 % 2 === 0){
                string2 = ` ` + string2;
            }
            if(textCount % 2 === 0){
                string = string.replace(` `, ``);
            }
            if(textCount1 % 2 === 0){
                string2 = string2.replace(` `, ``);
            }
            return `║` + string + `║` + string2 + `║`;
        },
        under: async () => {
            return `╚════════════════════════════════════════════════════════════════╝`;
        }
    }
}