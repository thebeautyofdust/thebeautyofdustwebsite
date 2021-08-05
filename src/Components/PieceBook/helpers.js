
const pieces = [
    {
        index: 0,
        imgPath: 'https://lh3.googleusercontent.com/poZL2yiHwTCvRyG-67mF7e1HE5xSRDKWm7xDrmxyWFtivv3jrukDEBSQG5AUeFafJhlxOJLOJvb-2Nu2XRxZPrQ_ab4GhAZlpnPtY9H-ZpHQPXdbDHYbT2JjzFEOIgmCozmV5dCn4w=w700',
        title: 'she said',
        id: 'shesaid'
    },
    {
        index: 1,
        imgPath: 'https://lh3.googleusercontent.com/OJFVlSmmQ4GnNnxjdnHNT9mMgqK2W-_3HrViLjCjMOzziIz812_NuesBHCZemAWXqHZ1yxH-MDlDW0IcBM2cQvfQRZzDSk_Q546Fh1tk7X8WW9CvccLa_EPzTA5wpQrqy--W7utfBQ=w700',
        title: 'walk in the woods',
        id: 'trees'
    },
    {
        index: 2,
        imgPath: 'https://lh3.googleusercontent.com/OJFVlSmmQ4GnNnxjdnHNT9mMgqK2W-_3HrViLjCjMOzziIz812_NuesBHCZemAWXqHZ1yxH-MDlDW0IcBM2cQvfQRZzDSk_Q546Fh1tk7X8WW9CvccLa_EPzTA5wpQrqy--W7utfBQ=w700',
        title: 'free write january 16th',
        id: 'freewrite'
    }
];

export const getFirstPiece = () => {
    return pieces[0];
};

export const getNextPiece = (currentPieceIndex) => {
    const nextIndex = (currentPieceIndex + 1) % pieces.length;
    return pieces[nextIndex];
};

export const getPrevPiece = (currentPieceIndex) => {
    const nextIndex = (currentPieceIndex + 1) % pieces.length;
    return pieces[nextIndex];
};
