import fs from "fs";
import path from "path";

export function getPathFile() {
    return path.join(process.cwd(), 'data', 'register_data.json');
}

export function readFile(pathFile) {
    
    const fileContent = fs.readFileSync(pathFile);
    return JSON.parse(fileContent)
}

export function writeFile(pathFile, data) {
    const fileContent = readFile(pathFile);
    fileContent.push(data);
    fs.writeFileSync(pathFile, JSON.stringify(fileContent));
}


function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const data = {
            email: email
        }
        
        const pathFile = getPathFile();
        writeFile(pathFile, data);
        res.status(201).json({message: 'success', data: data})
    } else {
        const pathFile = getPathFile();
        const data = readFile(pathFile);
        res.status(200).json({ response: data })

    }

}

export default handler;