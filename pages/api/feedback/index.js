import path from 'path';
import fs from 'fs';

export function getFilePath() {
    return path.join(process.cwd(), 'data', 'feedback_data.json')
}

export function readFile(filePath) {
    const feedbackContent = fs.readFileSync(filePath);
    const data = JSON.parse(feedbackContent)
    return data
}

function handler(req, res) {
    if (req.method === 'POST'){
        const email = req.body.email;
        const text = req.body.text;

        const feedback = {
            id: new Date().toISOString(),
            email: email,
            text: text
        }

        const filePath = getFilePath();
        const data = readFile(filePath);
        data.push(feedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: 'success', feedback: feedback})
    }
    else {
        const filePath = getFilePath();
        const data = readFile(filePath);
        res.status(200).json({ feedback: data });
    }
}

export default handler;