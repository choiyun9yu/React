export default function handler(req, res) {
    switch (req.method) {
        case 'PATCH':
            res.send('ShortLink 수정');
            break;

        case 'GET':
            res.send('ShortLink 조회');
            break;

        default:
            res.send();
            break;
    }
}
