
const engBraille = [
    { eng: 'a', braille: '0.....' },
    { eng: 'c', braille: '00....' },
    { eng: 'd', braille: '00.0..' },
    { eng: 'b', braille: '0.0...' },
    { eng: 'e', braille: '0..0..' },
    { eng: 'f', braille: '000...' },
    { eng: 'g', braille: '0000..' },
    { eng: 'h', braille: '0.00..' },
    { eng: 'i', braille: '.00...' },
    { eng: 'j', braille: '.0000..' },
    { eng: 'k', braille: '0...0.' },
    { eng: 'l', braille: '0.0.0.' },
    { eng: 'm', braille: '00..0.' },
    { eng: 'n', braille: '00.00.' },
    { eng: 'o', braille: '0..00.' },
    { eng: 'p', braille: '000.0.' },
    { eng: 'q', braille: '00000.' },
    { eng: 'r', braille: '0.000.' },
    { eng: 's', braille: '.00.0.' },
    { eng: 't', braille: '.0000.' },
    { eng: 'u', braille: '0...00' },
    { eng: 'v', braille: '0.0.00' },
    { eng: 'w', braille: '.000.0' },
    { eng: 'x', braille: '00..00' },
    { eng: 'y', braille: '00.000' },
    { eng: 'z', braille: '0..000' },
    { eng: ' ', braille: '......' },
];

const capitalBraille = ".....0"

const english = engBraille.map((english) => english.eng)
const braille = engBraille.map((braille) => braille.braille)


function translation(input) {
    let convertedString = ''
    let setCapital
    if (english.some((char) => input.includes(char) )) {
        const splitInput = input.split('')
    
        splitInput.forEach((oldChar) => english.find((newChar, i) => {
            
            if (oldChar === newChar.toUpperCase()) {
                convertedString = convertedString + capitalBraille
            } 

            if (oldChar.toLowerCase() === newChar) {

                convertedString = convertedString + braille[i]

            }
        }))
        return convertedString;

    } else if (input.search(braille)) {
        let brailleString = [];

        for (let i = 0; i <= input.length; i+= 6) {
            let splitBraille = input.slice(i, i+6)
            

            if (splitBraille.length === 6) {
                brailleString.push(splitBraille);
            }
        }
        
        brailleString.forEach((oldChar) => braille.find((newChar, i) => {

            if (oldChar===capitalBraille) {
                setCapital = true
            } 

            if (oldChar === newChar) {
                if (setCapital === true) {
                    convertedString = convertedString + english[i].toUpperCase()
                } else {

                    convertedString = convertedString + english[i]
                }
            setCapital = false 
            }
        }))
        return convertedString;
    }
}


console.log(translation("Ice"))
console.log(translation(".....0.00...00....0..0.."))