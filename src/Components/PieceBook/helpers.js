import shesaid from '../../images/she-said.jpg';

const pieces = [
    {
        index: 0,
        imgPath: 'https://lh3.googleusercontent.com/poZL2yiHwTCvRyG-67mF7e1HE5xSRDKWm7xDrmxyWFtivv3jrukDEBSQG5AUeFafJhlxOJLOJvb-2Nu2XRxZPrQ_ab4GhAZlpnPtY9H-ZpHQPXdbDHYbT2JjzFEOIgmCozmV5dCn4w=w2400',
        title: 'She Said',
        id: 'she-said'
    },
    {
        index: 1,
        imgPath: 'https://lh3.googleusercontent.com/cpZwlaor8Rw7Pkk1wblwyMD0dAIkOI4yRabSCyMcAfN688yVddywm-WffUTcoWeT3kkDc315TSjevxd37JKOmBIyEJe3xoyFIi6eXcMbdUNYvUIVNAS35RIx5RmWc4yvyjlOlHIrsA=w2400',
        title: 'Path',
        id: 'path'
    },
    
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
