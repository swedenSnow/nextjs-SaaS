import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
    .post((req, res) => {
        const note = {
            ...req.body,
            id: Date.now(),
        };
        notes.push(note);
        res.json({ date: note });
    })
    .get((req, res) => {
        res.json({ data: notes });
    });

export default handler;
